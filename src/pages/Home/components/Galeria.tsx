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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Nosso espaço
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {imagens.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={img}
                className="w-full h-48 object-cover hover:scale-110 transition"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}