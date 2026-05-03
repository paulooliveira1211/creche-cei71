export default function Estrutura() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
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
              <li key={i} className="flex gap-2">
                <span>✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          src="/fachada.png"
          className="rounded-2xl shadow-xl"
        />

      </div>
    </section>
  );
}