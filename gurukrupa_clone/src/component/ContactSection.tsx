"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  Map as MapIcon,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our event specialist will call you shortly 😊");
  };

  // Official Amravati Embed Link
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m3!1d119213.14912959664!2d77.6749964893798!3d20.933946399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a677748511%3A0x3f33807574f52774!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703150000000!5m2!1sen!2sin";

  return (
    <section className="relative py-24 bg-[#fcfcfc] overflow-hidden">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-orange-500" />
            <p className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">
              Reserve Your Date
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Let's Create <br /> <span className="text-orange-500">Magic.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= LEFT COLUMN: INFO BENTO ================= */}
          <div className="lg:col-span-5 space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b1d39] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <MessageCircle size={120} />
              </div>
              
              <h3 className="text-3xl font-black mb-6 relative z-10">Direct Concierge</h3>
              <p className="text-slate-300 mb-10 leading-relaxed relative z-10 font-medium">
                Have specific dietary requirements or a unique theme in mind? Our master chefs and event planners are ready to talk.
              </p>

              <div className="space-y-6 relative z-10">
                <ContactLink icon={<Phone size={20} />} label="Voice Call" value="+91 98765 43210" href="tel:+919876543210" />
                <ContactLink icon={<Mail size={20} />} label="Email Us" value="gurukrupacaterers@gmail.com" href="mailto:gurukrupacaterers@gmail.com" />
                <ContactLink icon={<Clock size={20} />} label="Office Hours" value="09:00 AM - 09:00 PM" />
              </div>
            </motion.div>

            {/* Trust Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <ShieldCheck className="text-orange-500 mb-3" size={32} />
                <span className="text-xl font-black text-slate-900">100%</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider">Hygiene Certified</span>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <MapIcon className="text-orange-500 mb-3" size={32} />
                <span className="text-xl font-black text-slate-900">Amravati</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider">Central HQ</span>
              </div>
            </div>

          {/* Map Preview */}
<motion.div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl relative h-64 group">
    <iframe
      title="Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119334.33149791884!2d77.67401183307521!3d20.92444319080709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a6dec93a09%3A0xc399587889389274!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
      className="w-full h-full transition-all duration-700"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
   {/* Map Overlay Button */}
<a 
  href="https://www.google.com/maps/search/?api=1&query=Amravati,Maharashtra"
  target="_blank"
  className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center"
>
   {/* UPDATED: text-slate-900 for solid black/dark-slate text */}
   <div className="bg-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 text-slate-900">
     {/* UPDATED: text-slate-900 for the icon to match */}
     <Navigation size={14} className="text-slate-900" /> 
     Open Maps
   </div>
</a>
</motion.div>
          </div>

          {/* ================= RIGHT COLUMN: CONSULTATION FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[3.5rem] p-8 md:p-16 shadow-2xl border border-slate-100"
          >
            <div className="mb-10">
              <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Request a Proposal</h4>
              <p className="text-slate-500 font-semibold">Tell us about your event and we'll build a custom menu.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <CustomInput label="Full Name" type="text" placeholder="John Doe" />
                <CustomInput label="Phone Number" type="tel" placeholder="+91 00000 00000" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] ml-2">Event Type</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-orange-500 transition-all appearance-none cursor-pointer outline-none">
                    <option>Wedding Ceremony</option>
                    <option>Corporate Gala</option>
                    <option>Birthday Bash</option>
                    <option>Private Party</option>
                  </select>
                </div>
                <CustomInput label="Estimated Guests" type="number" placeholder="e.g. 250" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] ml-2">Additional Details</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your culinary preferences or special needs..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500 transition-all outline-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group w-full py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] text-white bg-slate-900 hover:bg-orange-600 transition-all duration-500 shadow-2xl shadow-orange-600/20 flex items-center justify-center gap-4"
              >
                Send Request 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <p className="text-[10px] text-center font-black text-slate-400 uppercase tracking-widest">
                Safe & Secure • Response within 24 Hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">{label}</p>
        <p className="font-bold text-white text-sm">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}

function CustomInput({ label, ...props }: { label: string, [key: string]: any }) {
  return (
    <div className="space-y-2 w-full">
      <label className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] ml-2">{label}</label>
      <input
        {...props}
        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
        required
      />
    </div>
  );
}