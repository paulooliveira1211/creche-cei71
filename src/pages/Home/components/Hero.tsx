export default function Hero() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{
        height: "75vh",
        backgroundImage: "url('/fachada.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black/60 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Um lugar seguro e acolhedor para seu filho crescer
          </h1>

          <p className="text-lg md:text-xl mb-8 opacity-90">
            Educação infantil com cuidado, atenção e desenvolvimento diário
          </p>

          <a
            href="https://wa.me/5515999999999"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg shadow-lg transition"
          >
            Agendar visita
          </a>

        </div>
      </div>
    </section>
  );
}