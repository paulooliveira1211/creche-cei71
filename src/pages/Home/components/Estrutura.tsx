export default function Estrutura() {
  return (
    <section id="estrutura" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Estrutura completa
          </h2>

          <ul className="space-y-4 text-gray-600">
            {[
              "Salas adaptadas",
              "Parque infantil",
              "Atividades pedagógicas",
              "Alimentação diária",
              "Momentos de recreação",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-green-500">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGEM */}
        <img
          src="/fachada.png"
          className="rounded-2xl shadow-xl w-full"
          alt="Estrutura da creche"
        />

      </div>
    </section>
  );
}