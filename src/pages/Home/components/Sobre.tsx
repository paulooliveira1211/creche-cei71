export default function Sobre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        <img
          src="/fachada.png"
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre o CEI 71
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Um espaço dedicado ao cuidado, educação e desenvolvimento das crianças,
            com foco em segurança, acolhimento e aprendizado.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Nossa equipe trabalha com carinho e responsabilidade para oferecer
            um ambiente estimulante e confiável para os pequenos.
          </p>
        </div>

      </div>
    </section>
  );
}