export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-700 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-lg md:text-xl">
          CEI 71
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#sobre" className="hover:text-yellow-300 transition">Sobre</a>
          <a href="#estrutura" className="hover:text-yellow-300 transition">Estrutura</a>
          <a href="#galeria" className="hover:text-yellow-300 transition">Galeria</a>
          <a href="#contato" className="hover:text-yellow-300 transition">Contato</a>
        </nav>

        <a
          href="https://wa.me/5515999999999"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg shadow transition"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}