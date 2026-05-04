export default function ContatoResumo() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contato
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Localização</p>
            <p className="font-semibold text-gray-800">
              Sorocaba - SP
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Telefone</p>
            <p className="font-semibold text-gray-800">
              (15) 99999-9999
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}