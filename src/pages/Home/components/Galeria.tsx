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
    <section id="galeria" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-blue-700">
          Nosso espaço
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {imagens.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={img}
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}