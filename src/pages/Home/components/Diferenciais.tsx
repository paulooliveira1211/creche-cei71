export default function Diferenciais() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Por que escolher o CEI 71?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titulo: "Ambiente seguro",
              texto: "Espaço preparado para garantir o bem-estar das crianças.",
            },
            {
              titulo: "Alimentação balanceada",
              texto: "Refeições saudáveis acompanhadas por profissionais.",
            },
            {
              titulo: "Equipe qualificada",
              texto: "Profissionais experientes e dedicados.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">{item.titulo}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}