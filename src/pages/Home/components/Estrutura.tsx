export default function Estrutura() {
  return (
    <section id="estrutura" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-700">
            Estrutura completa
          </h2>

          <ul className="space-y-4 text-gray-700 text-base md:text-lg">
            {[
              "Salas adaptadas",
              "Parque infantil",
              "Atividades pedagógicas",
              "Alimentação diária",
              "Momentos de recreação",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-green-600">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          src="/fachada.png"
          className="rounded-2xl shadow-xl w-full"
        />

      </div>
    </section>
  );
}