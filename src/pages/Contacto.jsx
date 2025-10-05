const regionales = [
  {
    regional: "Oficina La Paz",
    telefono: "2 2220000",
    direccion: "Calle Montenegro Edif. Integramet piso 7 Of. 702.",
    email: "informaciones@clickbol.com",
    mapaUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.6728845341618!2d-68.08063132527258!3d-16.542603984207584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f213123167529%3A0x187d6c91ff76eb39!2sAv.%20Montenegro%2C%20La%20Paz!5e0!3m2!1ses-419!2sbo!4v1759632927203!5m2!1ses-419!2sbo",
  },

  {
    regional: "Oficina Santa Cruz",
    telefono: "2 2220000",
    direccion: "Calle Tapiti Nº 2350 Norte interno",
    email: "informaciones@clickbol.com",
    mapaUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.436590796739!2d-63.16497672524226!3d-17.771166883182932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7d60f2669ff%3A0x6f1f0324459e88b5!2sTapiti%202350%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses-419!2sbo!4v1759633236363!5m2!1ses-419!2sbo",
  },
];

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="mt-9 bg-surface text-text transition-colors duration-300"
    >
      {/* Título principal */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Comunícate con{" "}
        <span className="text-secondary font-semibold">Nosotros.</span>
      </h2>

      <div className="container mx-auto mt-6 lg:px-8 flex flex-wrap">
        {/* Columna de información de contacto regional */}
        <div className="w-full lg:w-1/2 p-4">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Nuestras oficinas
          </h3>

          {regionales.map((regional, index) => (
            <div
              key={index}
              className="mt-6 bg-surface border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-medium text-secondary text-center mb-2">
                {regional.regional}
              </h4>

              {/* Mapa */}
              <div className="mb-4">
                <iframe
                  src={regional.mapaUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-md shadow-sm"
                  title={`Ubicación de ${regional.regional}`}
                ></iframe>
              </div>

              {/* Información */}
              <p className="text-sm text-text-muted mb-2">
                <strong>Teléfono:</strong> {regional.telefono}
              </p>
              <p className="text-sm text-text-muted mb-2">
                <strong>Dirección:</strong> {regional.direccion}
              </p>
              <p className="text-sm text-text-muted mb-2">
                <strong>Correo Electrónico:</strong> {regional.email}
              </p>
            </div>
          ))}
        </div>

        {/* Columna del formulario de contacto */}
        <div className="w-full lg:w-1/2 p-4">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Contáctanos
          </h3>

          <form className="mt-4 space-y-5 bg-surface border border-border rounded-lg p-6 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">
                Nombre
              </label>
              <input
                type="text"
                className="w-full p-2 border border-border rounded-md bg-surface text-text focus:outline-none focus:ring-2 focus:ring-secondary/60 transition-colors"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="w-full p-2 border border-border rounded-md bg-surface text-text focus:outline-none focus:ring-2 focus:ring-secondary/60 transition-colors"
                placeholder="Tu correo electrónico"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">
                Mensaje
              </label>
              <textarea
                className="w-full p-2 border border-border rounded-md bg-surface text-text focus:outline-none focus:ring-2 focus:ring-secondary/60 transition-colors"
                rows="4"
                placeholder="Escribe tu mensaje aquí"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-5 py-2 bg-secondary text-surface font-medium rounded-md shadow-md hover:opacity-90 transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
