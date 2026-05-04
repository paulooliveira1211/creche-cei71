export default function Hero() {
  return (
    <section
      className="w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/fachada.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* conteúdo */}
      <div className="relative text-center text-white px-6 max-w-2xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Um lugar seguro e acolhedor para seu filho crescer
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Educação infantil com cuidado, atenção e desenvolvimento diário
        </p>

        <a
          href="https://wa.me/5515999999999"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Agendar visita
        </a>

      </div>
    </section>
  );
}