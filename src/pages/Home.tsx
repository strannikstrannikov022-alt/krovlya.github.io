import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Hammer,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Phone,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4">
                Нижневартовск
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Ремонт кровли
                <br />
                <span className="text-amber-400">любой сложности</span>
              </h1>
              <p className="text-neutral-400 max-w-md text-lg mb-8">
                Мягкая, металлическая, фальцевая кровля. Устранение протечек,
                замена покрытий. Бесплатный выезд на замер.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-neutral-700 hover:border-amber-500 text-neutral-200 font-semibold px-8 py-4 rounded-xl transition"
              >
                Наши работы
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right — form */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-1">Оставьте заявку</h2>
              <p className="text-neutral-500 text-sm mb-6">
                Перезвоним в течение 15 минут
              </p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <p className="text-lg font-semibold">Заявка отправлена!</p>
                  <p className="text-neutral-500 text-sm mt-1">
                    Мы скоро с вами свяжемся
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Иван"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+7 999 123-45-67"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">
                      Что нужно сделать?
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Опишите задачу..."
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-4 rounded-xl transition text-lg"
                  >
                    <Send size={18} />
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Что делаем */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Что мы делаем</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Монтаж кровли",
              desc: "Установка новой кровли под ключ — металлочерепица, профнастил, мягкая кровля.",
            },
            {
              title: "Ремонт протечек",
              desc: "Быстрое обнаружение и устранение протечек. Выезд в день обращения.",
            },
            {
              title: "Замена покрытия",
              desc: "Демонтаж старого и монтаж нового кровельного покрытия.",
            },
            {
              title: "Утепление кровли",
              desc: "Утепление минватой, пенополистиролом. Пароизоляция.",
            },
            {
              title: "Водосточные системы",
              desc: "Монтаж и ремонт водостоков, желобов, воронок.",
            },
            {
              title: "Стропильная система",
              desc: "Ремонт и замена стропил, обрешётки, мауэрлата.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-amber-500/50 transition"
            >
              <div className="w-11 h-11 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500/20 transition">
                <Hammer size={22} />
              </div>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Почему мы */}
      <section className="bg-neutral-900/50 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Почему мы</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Качество",
                text: "Проверенные материалы, гарантия на все виды работ.",
              },
              {
                icon: Shield,
                title: "Надёжность",
                text: "Договор, смета, фиксированные цены без скрытых доплат.",
              },
              {
                icon: Clock,
                title: "Сроки",
                text: "Соблюдаем сроки. Работаем быстро и аккуратно.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 mx-auto mb-4">
                  <item.icon size={26} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Дополнительные контакты */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-10 md:p-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Или свяжитесь напрямую
          </h2>
          <p className="text-neutral-500 mb-8">
            Позвоните или напишите — ответим на любые вопросы
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+79116317777"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3.5 rounded-xl transition"
            >
              <Phone size={18} />
              +7 911 631-77-77
            </a>
            <a
              href="https://wa.me/79116317777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-xl transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="https://t.me/+79116317777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold px-7 py-3.5 rounded-xl transition"
            >
              <Send size={18} />
              Telegram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
