export type MenuItem = {
  name: string;
  price: number;
};

export const MENU_ITEMS: Record<string, MenuItem[]> = {
  "Traditional Maharashtrian": [
    { name: "Puran Poli", price: 80 },
    { name: "Varan Bhaat", price: 120 },
    { name: "Batata Bhaji", price: 90 },
    { name: "Kothimbir Vadi", price: 70 },
    { name: "Shrikhand", price: 60 },
  ],

  "North Indian": [
    { name: "Paneer Butter Masala", price: 180 },
    { name: "Dal Makhani", price: 160 },
    { name: "Butter Naan", price: 40 },
    { name: "Jeera Rice", price: 120 },
    { name: "Gulab Jamun", price: 60 },
  ],

  "South Indian": [
    { name: "Idli", price: 40 },
    { name: "Masala Dosa", price: 90 },
    { name: "Sambar", price: 50 },
    { name: "Coconut Chutney", price: 30 },
    { name: "Payasam", price: 60 },
  ],

  Chinese: [
    { name: "Veg Manchurian", price: 150 },
    { name: "Hakka Noodles", price: 140 },
    { name: "Fried Rice", price: 130 },
    { name: "Spring Rolls", price: 110 },
  ],

  "Live Counters": [
    { name: "Chaat Counter", price: 250 },
    { name: "Pasta Counter", price: 300 },
    { name: "Live Dosa", price: 220 },
    { name: "Mocktail Station", price: 200 },
  ],

  Desserts: [
    { name: "Gulab Jamun", price: 60 },
    { name: "Ice Cream", price: 70 },
    { name: "Pastries", price: 90 },
    { name: "Rasgulla", price: 60 },
  ],
};
