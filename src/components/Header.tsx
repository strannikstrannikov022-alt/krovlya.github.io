import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Главная" },
  { to: "/portfolio", label: "Портфолио" },
  { to: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-amber-400">Ремонт</span>Кровли
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition hover:text-amber-400 ${
                pathname === l.to ? "text-amber-400" : "text-neutral-300"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+79116317777"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <Phone size={14} />
            +7 911 631-77-77
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-neutral-800 ${
                pathname === l.to ? "text-amber-400" : "text-neutral-300"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+79116317777"
            className="mt-3 flex items-center justify-center gap-2 bg-amber-500 text-black text-sm font-semibold px-4 py-3 rounded-lg"
          >
            <Phone size={14} />
            +7 911 631-77-77
          </a>
        </nav>
      )}
    </header>
  );
}
