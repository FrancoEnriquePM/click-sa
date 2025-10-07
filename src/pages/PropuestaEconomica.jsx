import imgCarretilla from "../assets/PropuestaEconomica/carretilla_elevadora_cajas.jpg"; // Asegúrate de tener esta imagen o ajusta la ruta

const PropuestaEconomica = () => {
  // Datos extraídos de la imagen de la tabla
  const tarifas = [
    { id: 1, min: 1, max: 2000, comision: "100" },
    { id: 2, min: 2001, max: 10000, comision: "1.25%" },
    { id: 3, min: 10001, max: 30000, comision: "1.15%" },
    { id: 5, min: 30001, max: 50000, comision: "0.75%" },
    { id: 6, min: 50001, max: 100000, comision: "0.55%" },
    { id: 7, min: 100001, max: "Adelante", comision: "0.35%" },
  ];

  return (
    // Utilizamos el espaciado de sección recomendado (py-20) y el contenedor de ancho limitado
    <section
      id="propuesta-economica"
      className="pt-12 pb-12 bg-surface text-text transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Propuesta{" "}
          <span className="text-secondary font-semibold">Económica</span>
        </h2>

        {/* Contenido Superior (Imagen y Descripción) */}
        <div className="py-6">
          {/* Imagen de la carretilla, con altura limitada y fondo contrastante */}
          <div className="relative w-full h-64 md:h-80 bg-primary-light dark:bg-primary/80 mb-6 rounded-xl overflow-hidden shadow-lg">
            <img
              src={imgCarretilla}
              alt="Carretilla elevadora moviendo cajas"
              className="w-full h-full object-cover object-center opacity-80"
            />
            {/* Overlay para hacer legible el texto sobre la imagen */}
            <div className="absolute inset-0 bg-primary/70 dark:bg-primary-light/70"></div>

            {/* Texto sobre la imagen */}
            <p className="absolute bottom-0 p-6 text-lg md:text-xl font-semibold text-white leading-relaxed drop-shadow-lg max-w-4xl">
              LA COMISIÓN POR SERVICIO DE TRÁMITE ADUANERO, SE DETERMINA
              MEDIANTE LAS TARIFAS DETALLADAS EN LA TABLA QUE APARECE ABAJO:
            </p>
          </div>
        </div>

        {/* Tabla de Tarifas */}
        <div className="overflow-x-auto shadow-sm rounded-xl border border-secondary">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-secondary dark:bg-secondary text-surface">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider w-[5%]"
                >
                  No
                </th>
                <th
                  scope="col"
                  colSpan="2"
                  className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider w-[50%]"
                >
                  Valor de la Importación
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider w-[15%]"
                >
                  Comisión
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface dark:bg-surface/90 text-text">
              {tarifas.map((tarifa, index) => (
                <tr
                  key={tarifa.id}
                  className={
                    index % 2 === 0
                      ? "bg-white dark:bg-surface"
                      : "bg-primary-soft/50 dark:bg-surface"
                  }
                >
                  {/* Columna No */}
                  <td className="px-6 py-3 whitespace-nowrap text-center text-sm font-medium">
                    {tarifa.id}
                  </td>

                  {/* Columna Valor Minimo */}
                  <td className="px-6 py-3 whitespace-nowrap text-left text-sm">
                    De $us {tarifa.min.toLocaleString()}
                  </td>

                  {/* Columna Valor Maximo */}
                  <td className="px-6 py-3 whitespace-nowrap text-left text-sm">
                    {tarifa.max === "Adelante"
                      ? tarifa.max
                      : `De $us ${tarifa.max.toLocaleString()}`}
                  </td>

                  {/* Columna Comisión */}
                  <td className="px-6 py-3 whitespace-nowrap text-center text-base font-semibold text-secondary dark:text-secondary-accent">
                    {tarifa.comision}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nota o Contacto */}
        <p className="mt-3 text-center text-text-muted text-sm italic">
          *Para importaciones de volumen superior, por favor, contáctenos
          directamente para una cotización personalizada.
        </p>
      </div>
    </section>
  );
};

export default PropuestaEconomica;
