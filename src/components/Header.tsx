export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="font-bold text-lg">CEI 71</h1>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#sobre" className="hover:text-green-600">Sobre</a>
          <a href="#estrutura" className="hover:text-green-600">Estrutura</a>
          <a href="#galeria" className="hover:text-green-600">Galeria</a>
          <a href="#contato" className="hover:text-green-600">Contato</a>
        </nav>

        <a
          href="https://wa.me/5515999999999"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}