export default function Hero() {
  return (
    <section
      className="min-h-[80vh] md:min-h-[90vh] flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/fachada.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      <div className="relative text-center text-white px-6 max-w-2xl">

        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Um lugar seguro e acolhedor para seu filho crescer
        </h1>

        <p className="text-base md:text-xl mb-8">
          Educação infantil com carinho, cuidado e desenvolvimento
        </p>

        <a
          href="https://wa.me/5515999999999"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg shadow-lg transition hover:scale-105"
        >
          Agendar visita
        </a>

      </div>
    </section>
  );
}