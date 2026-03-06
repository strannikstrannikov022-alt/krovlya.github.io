import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
