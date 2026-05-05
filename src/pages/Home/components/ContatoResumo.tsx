export default function ContatoResumo() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-yellow-50 text-center">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-700">
          Entre em contato
        </h2>

        <p className="text-gray-700 mb-2 text-lg">
          📍 Sorocaba - SP
        </p>

        <p className="text-gray-700 mb-6 text-lg">
          📞 (15) 3217-2114
        </p>

        <a
          href="https://wa.me/5515999999999"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg"
        >
          Falar no WhatsApp
        </a>

      </div>
    </section>
  );
}