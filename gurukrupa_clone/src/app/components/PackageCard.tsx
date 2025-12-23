import { Check } from "lucide-react";

type Props = {
  title: string;
  price: string;
  description: string;
  items: string[];
  popular?: boolean;
  index?: number;
};

export default function PackageCard({
  title,
  price,
  description,
  items,
  popular,
  index = 0,
}: Props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className={`relative rounded-[2rem] border p-8 bg-white
                  transition-all duration-500
                  hover:-translate-y-4 hover:shadow-2xl
                  ${
                    popular
                      ? "border-orange-500 shadow-orange-500/20 ring-1 ring-orange-500/50 scale-[1.05] z-10"
                      : "border-gray-100 shadow-sm"
                  }`}
    >
      {/* POPULAR BADGE */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-400 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-[#0b1d39] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{description}</p>

      <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
        <span className="text-4xl font-black text-orange-600">{price}</span>
        <span className="text-gray-400 font-medium ml-1 text-sm">/ plate</span>
      </div>

      <ul className="space-y-4 mb-8">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="text-green-600" size={12} strokeWidth={4} />
            </div>
            {item}
          </li>
        ))}
      </ul>

      {/* UPDATED THEME BUTTON: Matching your site's orange gradient */}
      <a
        href="#contact"
        className="block text-center py-4 rounded-xl font-bold text-white
                   bg-gradient-to-r from-orange-600 to-orange-500
                   shadow-lg shadow-orange-600/30
                   hover:shadow-xl hover:shadow-orange-600/40
                   transition-all duration-300"
      >
        Book This Package
      </a>
    </div>
  );
}