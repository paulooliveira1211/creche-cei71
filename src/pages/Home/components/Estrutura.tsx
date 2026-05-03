export default function Estrutura() {
  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Estrutura e Rotina
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Salas organizadas e adaptadas</li>
            <li>✔ Parque infantil</li>
            <li>✔ Atividades pedagógicas</li>
            <li>✔ Alimentação diária</li>
            <li>✔ Momentos de recreação</li>
          </ul>
        </div>

        <img
          src="/fachada.jpg"
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}