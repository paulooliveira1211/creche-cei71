export default function Hero() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{
        height: "70vh",
        backgroundImage: "url('/fachada.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black/60 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Educação infantil com carinho e segurança
          </h1>

          <p className="text-lg md:text-xl mb-8 opacity-90">
            Um ambiente acolhedor para o desenvolvimento das crianças
          </p>

          <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg shadow-lg transition">
            Agendar visita
          </button>
        </div>
      </div>
    </section>
  );
}