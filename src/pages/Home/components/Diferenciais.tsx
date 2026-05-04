export default function Diferenciais() {
  const itens = [
    {
      titulo: "Ambiente seguro",
      texto: "Espaço preparado para garantir o bem-estar das crianças.",
    },
    {
      titulo: "Alimentação balanceada",
      texto: "Refeições saudáveis acompanhadas diariamente.",
    },
    {
      titulo: "Equipe qualificada",
      texto: "Profissionais experientes e dedicados.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Por que escolher nossa creche?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {itens.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.titulo}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.texto}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}