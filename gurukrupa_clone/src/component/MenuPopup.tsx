"use client";

import { useState } from "react";

interface MenuPopupProps {
  menu: string;
  items: string[];
  selectedItems: string[];
  onClose: () => void;
  onSave: (items: string[]) => void;
}

export default function MenuPopup({
  menu,
  items,
  selectedItems,
  onClose,
  onSave,
}: MenuPopupProps) {
  const [localSelected, setLocalSelected] = useState<string[]>(selectedItems);

  const toggleItem = (item: string) => {
    setLocalSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#0b1d39]">
            {menu} Menu
          </h3>
          <button onClick={onClose} className="text-xl text-gray-500">✕</button>
        </div>

        {/* ITEMS */}
        <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
          {items.map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-orange-50"
            >
              <input
                type="checkbox"
                checked={localSelected.includes(item)}
                onChange={() => toggleItem(item)}
                className="accent-orange-600"
              />
              <span className="text-sm font-medium">{item}</span>
            </label>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(localSelected)}
            className="px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold"
          >
            Save Selection
          </button>
        </div>
      </div>
    </div>
  );
}
