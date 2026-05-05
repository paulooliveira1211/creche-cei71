export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h3 className="text-lg md:text-xl font-semibold mb-4">
          CEI 71 - Sorocaba
        </h3>

        <p className="mb-2">
          Educação infantil com carinho e responsabilidade
        </p>

        <p>📍 Sorocaba - SP</p>
        <p>📞 (15) 3217-2114</p>

        <p className="mt-6 text-sm opacity-80">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>

      </div>
    </footer>
  );
}