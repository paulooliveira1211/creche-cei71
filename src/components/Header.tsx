export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-lg md:text-xl text-blue-700">
          CEI 71
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#sobre" className="hover:text-blue-600">Sobre</a>
          <a href="#estrutura" className="hover:text-blue-600">Estrutura</a>
          <a href="#galeria" className="hover:text-blue-600">Galeria</a>
          <a href="#contato" className="hover:text-blue-600">Contato</a>
        </nav>

        <a
          href="https://wa.me/5515999999999"
          target="_blank"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}