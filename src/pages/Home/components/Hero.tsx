export default function Hero() {
  return (
    <section
      className="h-[85vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/fachada.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Um lugar seguro para seu filho crescer
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Educação infantil com carinho e segurança
          </p>

          <a
            href="https://wa.me/5515999999999"
            className="bg-green-500 px-8 py-4 rounded-xl"
          >
            Agendar visita
          </a>

        </div>
      </div>
    </section>
  );
}