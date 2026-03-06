import { useState } from "react";
import { Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";

export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Контакты</h1>
      <p className="text-neutral-500 text-center mb-12">
        Свяжитесь любым удобным способом — ответим быстро
      </p>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          {/* Phone */}
          <a
            href="tel:+79116317777"
            className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:border-amber-500/50 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500/20 transition">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Телефон</p>
              <p className="font-bold text-lg">+7 911 631-77-77</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/79116317777"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:border-green-500/50 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 shrink-0 group-hover:bg-green-500/20 transition">
              <MessageCircle size={22} />
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
              <p className="font-bold text-lg">Написать в WhatsApp</p>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/+79116317777"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:border-sky-500/50 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition">
              <Send size={22} />
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Telegram</p>
              <p className="font-bold text-lg">Написать в Telegram</p>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
            <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Адрес</p>
              <p className="font-bold">г. Нижневартовск</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
            <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Режим работы</p>
              <p className="font-bold">Пн–Сб: 08:00 – 20:00</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold mb-1">Оставить заявку</h2>
          <p className="text-neutral-500 text-sm mb-6">Опишите задачу — перезвоним в течение часа</p>

          {sent && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl p-4 mb-6 text-sm font-medium">
              ✓ Заявка отправлена! Мы скоро свяжемся с вами.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-1.5">Имя</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition placeholder:text-neutral-600"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-1.5">Телефон</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition placeholder:text-neutral-600"
                placeholder="+7 ..."
              />
            </div>
            <div>
              <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-1.5">Сообщение</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition resize-none placeholder:text-neutral-600"
                placeholder="Опишите, какие работы нужны..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 rounded-xl transition text-sm"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
