export default function Diferenciais() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Por que escolher nossa creche?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Ambiente seguro e acolhedor",
            "Alimentação balanceada",
            "Equipe qualificada",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}