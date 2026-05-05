const cores = ["bg-blue-100", "bg-yellow-100", "bg-green-100"];

export default function Diferenciais() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-blue-700">
          Por que escolher nossa creche?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {[
            "Ambiente seguro e acolhedor",
            "Alimentação balanceada",
            "Equipe qualificada",
          ].map((item, i) => (
            <div
              key={i}
              className={`${cores[i]} p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2`}
            >
              <p className="font-semibold text-gray-800 text-lg">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}