import { Phone, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8 text-sm text-neutral-400">
        <div>
          <p className="text-white font-bold text-lg mb-2">
            <span className="text-amber-400">Ремонт</span>Кровли
          </p>
          <p>Ремонт и монтаж кровли в Нижневартовске.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Контакты</p>
          <a href="tel:+79116317777" className="flex items-center gap-2 hover:text-amber-400 transition mb-2">
            <Phone size={14} /> +7 911 631-77-77
          </a>
          <a href="https://wa.me/79116317777" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-400 transition mb-2">
            <MessageCircle size={14} /> WhatsApp
          </a>
          <a href="https://t.me/+79116317777" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sky-400 transition">
            <Send size={14} /> Telegram
          </a>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Режим работы</p>
          <p>Пн–Сб: 08:00 – 20:00</p>
          <p>Вс: выходной</p>
          <p className="mt-2">г. Нижневартовск</p>
        </div>
      </div>
      <div className="border-t border-neutral-800 text-center text-xs text-neutral-600 py-4">
        © {new Date().getFullYear()} РемонтКровли. Все права защищены.
      </div>
    </footer>
  );
}
