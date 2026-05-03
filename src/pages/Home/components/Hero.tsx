export default function Hero() {
  return (
    <section
      style={{
        height: "60vh",
        backgroundImage: "url('/fachada.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full flex items-center justify-center"
    >
      <div className="bg-black/50 w-full h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            CEI 71 - Sorocaba
          </h1>

          <p className="mb-6">
            Educação infantil com carinho, segurança e dedicação
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded">
            Agendar visita
          </button>
        </div>
      </div>
    </section>
  );
}