export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* COLUNA 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            CEI 71
          </h3>

          <p className="text-gray-400">
            Educação infantil com carinho e responsabilidade
          </p>
        </div>

        {/* COLUNA 2 */}
        <div>
          <h4 className="font-semibold mb-4">
            Contato
          </h4>

          <p className="text-gray-400">
            📍 Sorocaba - SP
          </p>

          <p className="text-gray-400">
            📞 (15) 3217-2114
          </p>
        </div>

        {/* COLUNA 3 */}
        <div>
          <h4 className="font-semibold mb-4">
            Navegação
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#sobre" className="hover:text-white transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#estrutura" className="hover:text-white transition">
                Estrutura
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-white transition">
                Galeria
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-white transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* LINHA FINAL */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} CEI 71 - Todos os direitos reservados
      </div>
    </footer>
  );
}