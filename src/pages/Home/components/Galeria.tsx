export default function Galeria() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Nosso espaço
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["/fachada.jpg", "/fachada.jpg", "/fachada.jpg"].map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
}