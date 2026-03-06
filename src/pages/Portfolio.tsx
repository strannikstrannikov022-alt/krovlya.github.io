import { useState } from "react";
import { Phone, Send, MessageCircle, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Кровля частного дома",
    desc: "Полная замена покрытия на металлочерепицу. Площадь 180 м².",
    img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&q=80",
  },
  {
    id: 2,
    title: "Мягкая кровля",
    desc: "Монтаж мягкой кровли, гидроизоляция, утепление.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 3,
    title: "Кровля из профнастила",
    desc: "Замена стропильной системы и монтаж профнастила.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    id: 4,
    title: "Устранение протечки",
    desc: "Ремонт кровли двухэтажного дома. Замена повреждённых листов.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    id: 5,
    title: "Фальцевая кровля",
    desc: "Монтаж фальцевой кровли 320 м². Водосточная система.",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
  },
  {
    id: 6,
    title: "Утепление мансарды",
    desc: "Утепление мансардной крыши минватой 200 мм + пароизоляция.",
    img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Наши работы</h1>
      <p className="text-neutral-500 text-center mb-10">
        Примеры выполненных кровельных работ в Нижневартовске
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition cursor-pointer"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Кровля
              </span>
              <h3 className="font-bold text-lg mt-1 mb-2">{p.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-2xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black transition"
            >
              <X size={18} />
            </button>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Кровля
              </span>
              <h2 className="text-2xl font-bold mt-1 mb-2">
                {selected.title}
              </h2>
              <p className="text-neutral-400 mb-6">{selected.desc}</p>
              <p className="text-sm text-neutral-500">
                Хотите такой же результат? Свяжитесь с нами:
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="tel:+79116317777"
                  className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold px-5 py-2.5 rounded-lg transition text-sm"
                >
                  <Phone size={15} />
                  Позвонить
                </a>
                <a
                  href="https://wa.me/79116317777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/+79116317777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm"
                >
                  <Send size={15} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA bottom */}
      <div className="mt-16 text-center">
        <p className="text-neutral-400 mb-4">Нужна такая же работа?</p>
        <a
          href="tel:+79116317777"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition"
        >
          <Phone size={18} />
          Позвонить
        </a>
      </div>
    </section>
  );
}
