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

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Nosso espaço
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {imagens.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                className="w-full aspect-[4/3] object-cover"
                alt=""
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}