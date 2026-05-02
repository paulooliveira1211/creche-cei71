export default function Sobre() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXTO */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sobre o CEI 71
          </h2>

          <p className="mb-4 text-gray-700">
            O CEI 71 é um espaço dedicado ao cuidado, educação e desenvolvimento
            das crianças, oferecendo um ambiente seguro, acolhedor e estimulante.
          </p>

          <p className="text-gray-700">
            Nossa equipe é formada por profissionais qualificados que trabalham
            com carinho e responsabilidade, contribuindo para o crescimento
            saudável e o aprendizado das crianças.
          </p>
        </div>

        {/* IMAGEM */}
        <div>
          <img
            src="/fachada.png"
            alt="Fachada da creche"
            className="rounded-lg shadow-md w-full"
          />
        </div>

      </div>
    </section>
  );
}