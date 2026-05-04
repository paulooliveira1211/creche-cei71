export default function Sobre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* IMAGEM */}
        <img
          src="/fachada.png"
          className="rounded-2xl shadow-xl"
          alt="Fachada da creche"
        />

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Sobre o CEI 71
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            O CEI 71 é um espaço dedicado ao cuidado, educação e desenvolvimento das crianças,
            oferecendo um ambiente seguro, acolhedor e preparado para o aprendizado.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Nossa equipe atua com carinho e responsabilidade, proporcionando experiências
            que contribuem para o crescimento saudável e feliz de cada criança.
          </p>
        </div>

      </div>
    </section>
  );
}