import imagenEmpresa from "../assets/NuestraEmpresa/empresa.png";

const NuestraEmpresa = () => {
  return (
    <section
      id="nuestra-empresa"
      className="pt-12 pb-12 bg-surface text-text transition-colors duration-300"
    >
      {/* Título principal */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Nuestra <span className="text-secondary font-semibold">Empresa</span>
      </h2>

      {/* Sección principal (Texto + Imagen) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto py-12 px-6">
        {/* Texto */}
        <div className="lg:w-1/2 text-text-muted leading-relaxed">
          <p className="text-base sm:text-lg">
            La Agencia Despachante de Aduana{" "}
            <strong className="text-primary">“Click S.A.”</strong> es una
            empresa dedicada a brindar servicios integrales en comercio exterior
            y logística internacional. Nos comprometemos a facilitar la
            expansión global de tu negocio mediante soluciones ágiles, seguras y
            confiables.
          </p>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={imagenEmpresa}
            alt="Nuestra Empresa"
            className="rounded-2xl shadow-md hover:shadow-lg dark:shadow-none transition-transform duration-500 hover:scale-105 max-w-md w-full object-cover"
          />
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-10 px-6">
        {/* Misión */}
        <div className="p-6 bg-primary-soft dark:bg-primary-soft rounded-2xl border border-border shadow-sm transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-center mb-4 text-primary">
            Misión
          </h3>
          <p className="text-text-muted text-center leading-relaxed">
            Brindar, facilitar y agilizar el comercio internacional para
            nuestros clientes mediante servicios aduaneros eficientes,
            confiables y conformes a la normativa vigente, contribuyendo al
            crecimiento de sus negocios.
          </p>
        </div>

        {/* Visión */}
        <div className="p-6 bg-primary-soft dark:bg-primary-soft rounded-2xl border border-border shadow-sm transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-center mb-4 text-secondary">
            Visión
          </h3>
          <p className="text-text-muted text-center leading-relaxed">
            Posicionarnos como líderes reconocidos en el ámbito del comercio
            internacional, siendo un referente por nuestra excelencia operativa,
            innovación y compromiso con nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NuestraEmpresa;
