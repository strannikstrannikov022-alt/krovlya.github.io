import { MessageCircle, Send } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/79116317777"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="https://t.me/+79116317777"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-400 flex items-center justify-center text-white shadow-lg shadow-sky-500/30 transition-transform hover:scale-110"
        aria-label="Telegram"
      >
        <Send size={20} />
      </a>
    </div>
  );
}
