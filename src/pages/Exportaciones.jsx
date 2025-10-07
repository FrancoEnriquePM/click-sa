import imagenExportaciones from "../assets/Exportaciones/exportaciones.jpeg"; // Ajusta la ruta a tu imagen real
import { Globe, RefreshCw, Clock, Ship } from "lucide-react";

const Exportaciones = () => {
  const items = [
    {
      icon: <Globe className="h-8 w-8 text-secondary" />,
      title: "Exportación Definitiva",
      description:
        "Gestionamos el proceso completo para la salida definitiva de mercancías, asegurando el cumplimiento de las normativas internacionales y nacionales.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-secondary" />,
      title: "Reexportación",
      description:
        "Coordinamos la reexportación de mercancías previamente importadas, garantizando eficiencia en los trámites y tiempos de despacho.",
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Exportación Temporal",
      description:
        "Facilitamos el envío temporal de bienes para ferias, demostraciones o procesos industriales, bajo control aduanero y con retorno programado.",
    },
    {
      icon: <Ship className="h-8 w-8 text-secondary" />,
      title: "Reembarque",
      description:
        "Tramitamos el reembarque de mercancías no nacionalizadas para su salida del país, asegurando un proceso ágil y conforme a la legislación vigente.",
    },
  ];

  return (
    <section className="py-9 bg-surface border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={imagenExportaciones}
            alt="Exportaciones"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Texto e íconos */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl sm:text-5xl font-semibold mb-8">
            <span className="text-secondary">Exportaciones</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div>{item.icon}</div>
                <h3 className="text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="text-sm text-text/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exportaciones;
