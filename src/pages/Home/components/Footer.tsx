export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h3 className="text-xl font-semibold mb-4">
          CEI 71 - Sorocaba
        </h3>

        <p className="text-gray-400 mb-2">
          Educação infantil com carinho e responsabilidade
        </p>

        <p className="text-gray-400">
          📍 Sorocaba - SP
        </p>

        <p className="text-gray-400">
          📞 (15) 3217-2114
        </p>

        <p className="text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>

      </div>
    </footer>
  );
}