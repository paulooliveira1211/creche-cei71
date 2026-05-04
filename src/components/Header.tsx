export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="font-bold text-lg text-gray-800">
          CEI 71
        </h1>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <a href="#sobre" className="hover:text-green-600 transition">
            Sobre
          </a>
          <a href="#estrutura" className="hover:text-green-600 transition">
            Estrutura
          </a>
          <a href="#galeria" className="hover:text-green-600 transition">
            Galeria
          </a>
          <a href="#contato" className="hover:text-green-600 transition">
            Contato
          </a>
        </nav>

        {/* BOTÃO */}
        <a
          href="https://wa.me/5515999999999"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl text-sm shadow-md transition"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}