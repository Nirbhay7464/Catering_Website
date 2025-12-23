"use client";

import { useState } from "react";
import { X, CheckCircle, FileText, ArrowRight } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "../data/menuItems";
import { generateBookingPDF } from "@/utils/generateBookingPDF";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_TYPES = [
  "Wedding", "Reception", "Engagement", 
  "Birthday Party", "Corporate Event", "Outdoor Catering",
];

const MENUS = [
  { name: "Traditional Maharashtrian", icon: "🍛" },
  { name: "North Indian", icon: "🥘" },
  { name: "South Indian", icon: "🍚" },
  { name: "Chinese", icon: "🥡" },
  { name: "Live Counters", icon: "🔥" },
  { name: "Desserts", icon: "🍰" },
];

type SelectedItems = Record<string, MenuItem[]>;

export default function BookNowPage() {
  const [eventType, setEventType] = useState("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetBooking = () => {
    setEventType("");
    setSelectedItems({});
    setName("");
    setPhone("");
    setDate("");
    setGuests("");
    setNotes("");
    setIsSubmitting(false);
    setIsSuccess(false);
  };

  const toggleItem = (menu: string, item: MenuItem) => {
    setSelectedItems((prev) => {
      const current = prev[menu] || [];
      const exists = current.find((i) => i.name === item.name);
      return {
        ...prev,
        [menu]: exists ? current.filter((i) => i.name !== item.name) : [...current, item],
      };
    });
  };

  const grandTotal = Object.values(selectedItems).flat().reduce((sum, item) => sum + item.price, 0);
  const isFormValid = eventType && name && phone && date && guests && grandTotal > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    const payload = { eventType, date, guests, customer: { name, phone }, menu: selectedItems, totalAmount: grandTotal, notes };
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      generateBookingPDF(payload);
    }, 1500);
  };

  return (
    // ADDED: Color graded background (Radial gradient for depth)
    <main className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-200/50 min-h-screen pb-24">
      
      {/* ================= 1. HEADER SECTION ================= */}
      <section className="pt-24 pb-12 bg-[#0b1d39] text-white rounded-b-[3rem] md:rounded-b-[5rem] px-6 text-center shadow-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="bg-orange-600/20 text-orange-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-orange-500/30">
            Custom Proposal
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 tracking-tighter">
            Curate Your <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8">Perfect Menu.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto font-medium">
            Select your preferences and download a personalized quote instantly.
          </p>
        </motion.div>
      </section>

      {/* ================= 2. MAIN BUILDER ================= */}
      <section className="-mt-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
          
          {/* SELECTION AREA */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* STEP 1: EVENT TYPE */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-black shadow-lg shadow-orange-600/30">1</div>
                <h2 className="text-2xl font-black text-slate-900">Choose Occasion</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {EVENT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setEventType(type)}
                    // UPDATED: High contrast text colors for buttons
                    className={`p-5 rounded-2xl border-2 transition-all text-sm font-bold tracking-tight
                    ${eventType === type 
                      ? "border-orange-500 bg-orange-50 text-orange-700 shadow-inner" 
                      : "border-slate-100 bg-slate-50 text-slate-600 hover:border-orange-200 hover:text-slate-900"}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: MENU CATEGORIES */}
<div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
  <div className="flex items-center gap-3 mb-8">
    <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-black shadow-lg shadow-orange-600/30">2</div>
    <h2 className="text-2xl font-black text-slate-900">Build Your Menu</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {MENUS.map((menu) => {
      const count = selectedItems[menu.name]?.length || 0;
      return (
        <button
          key={menu.name}
          onClick={() => setActiveMenu(menu.name)}
          className={`group relative p-6 rounded-2xl border-2 transition-all flex items-center gap-5 text-left
          ${count > 0 ? "border-orange-500 bg-white" : "border-slate-50 bg-slate-50/80 hover:bg-white hover:border-orange-200"}`}
        >
          {/* ICON CONTAINER: Removed grayscale and added a soft colored background circle */}
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 
            ${count > 0 ? "bg-orange-100 scale-110" : "bg-white shadow-sm group-hover:bg-orange-50"}`}>
            {menu.icon}
          </div>

          <div className="flex-grow">
            <p className="font-black text-slate-900 text-sm uppercase tracking-wide">{menu.name}</p>
            <p className={`text-[11px] font-bold mt-1 uppercase tracking-tighter ${count ? "text-orange-600" : "text-slate-500"}`}>
              {count ? `${count} Items Selected` : "Explore Options —>"}
            </p>
          </div>
          
          {count > 0 && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <CheckCircle size={22} className="text-orange-600 stroke-[2.5px]" />
            </motion.div>
          )}
        </button>
      );
    })}
  </div>
</div>
          </div>

          {/* SIDEBAR: SUMMARY & FORM */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* QUOTE PREVIEW */}
              <div className="bg-[#0b1d39] text-white rounded-[2.5rem] p-8 shadow-2xl relative border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                  <FileText size={20} className="text-orange-500" /> Live Quote
                </h3>

                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {Object.entries(selectedItems).map(([category, items]) => (
                    items.length > 0 && (
                      <div key={category} className="border-b border-white/10 pb-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-2">{category}</p>
                        {items.map(item => (
                          <div key={item.name} className="flex justify-between text-xs font-bold py-1">
                            <span className="text-slate-300">{item.name}</span>
                            <span className="text-white">₹{item.price}</span>
                          </div>
                        ))}
                      </div>
                    )
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t-2 border-dashed border-white/20">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Estimated Total</span>
                    <span className="text-3xl font-black text-orange-500 leading-none">₹{grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center">Contact Details</p>
                  
                  {/* UPDATED: High contrast inputs */}
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none" />
                  <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs font-black text-slate-900 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none uppercase" />
                    <input value={guests} onChange={e => setGuests(e.target.value)} placeholder="Guests" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none" />
                  </div>

                  <button
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg
                    ${isSuccess ? "bg-green-600 text-white" : isFormValid ? "bg-orange-600 text-white shadow-orange-600/30 hover:scale-[1.02] active:scale-95" : "bg-slate-100 text-slate-400"}`}
                  >
                    {isSubmitting ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : isSuccess ? "Confirmed ✓" : "Generate Proposal"}
                    {!isSubmitting && !isSuccess && <ArrowRight size={16} />}
                  </button>

                  {isSuccess && (
                    <button type="button" onClick={resetBooking} className="w-full text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2 hover:text-orange-600 transition-colors">
                      + Create New Estimate
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. MODAL OVERLAY ================= */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0b1d39]/95 backdrop-blur-md flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-[3rem] max-w-xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-white/20">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-none">{activeMenu}</h3>
                  <p className="text-[10px] font-black text-orange-600 mt-2 uppercase tracking-[0.2em]">Select items for your menu</p>
                </div>
                <button onClick={() => setActiveMenu(null)} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all border border-slate-100"><X size={20}/></button>
              </div>

              <div className="p-8 overflow-y-auto space-y-3 custom-scrollbar">
                {MENU_ITEMS[activeMenu].map((item) => {
                  const checked = selectedItems[activeMenu]?.some((i) => i.name === item.name) || false;
                  return (
                    <button
                      key={item.name}
                      onClick={() => toggleItem(activeMenu, item)}
                      className={`w-full flex justify-between items-center p-5 rounded-2xl border-2 transition-all
                      ${checked ? "border-orange-500 bg-orange-50 shadow-sm" : "border-slate-50 hover:border-orange-200"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${checked ? "bg-orange-600 text-white" : "bg-slate-200"}`}>
                          {checked && <CheckCircle size={14} className="stroke-[3px]" />}
                        </div>
                        <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                      </div>
                      <span className="font-black text-orange-700 text-sm">₹{item.price}</span>
                    </button>
                  );
                })}
              </div>

              <div className="p-8 bg-slate-50/80 mt-auto border-t border-slate-100">
                <button onClick={() => setActiveMenu(null)} className="w-full bg-[#0b1d39] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-orange-600/10 active:scale-[0.98]">
                  Update Selection
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}