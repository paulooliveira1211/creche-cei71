const imagens = [
  "/foto1.jpeg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpeg",
  "/foto5.jpg",
  "/foto6.jpeg",
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Nosso espaço
        </h2>

        <p className="text-gray-600 mb-12">
          Conheça um pouco do ambiente preparado para as crianças
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {imagens.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md group"
            >
              <img
                src={img}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                alt={`Foto ${i + 1} da creche`}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}