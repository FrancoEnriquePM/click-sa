import imagenImportaciones from "../assets/Importaciones/importaciones.jpeg"; // Ajusta la ruta a tu imagen real
import { Shield, Truck, DollarSign, Zap } from "lucide-react";

const Importaciones = () => {
  const items = [
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Importaciones a Consumo",
      description:
        "Realizamos las gestiones necesarias para la importación definitiva de mercancías, asegurando cumplimiento normativo y eficiencia logística.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-secondary" />,
      title: "Despachos Abreviados",
      description:
        "Optimizamos procesos para cargas con requisitos simplificados, reduciendo tiempos de nacionalización.",
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Despachos Anticipados",
      description:
        "Agilizamos el retiro de mercancías mediante la presentación anticipada de la declaración aduanera.",
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary" />,
      title: "Despachos Bajo D.S. 2295",
      description:
        "Atendemos regímenes especiales con beneficios establecidos por el Decreto Supremo 2295.",
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary" />,
      title: "Despachos Inmediatos",
      description:
        "Facilitamos la liberación rápida de mercancías, priorizando urgencias operativas y comerciales.",
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Admisión Temporal",
      description:
        "Gestionamos la importación temporal de bienes con exención de tributos bajo control aduanero.",
    },
  ];

  return (
    <section className="py-9 bg-surface border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto e íconos */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-semibold mb-8">
            <span className="text-secondary">Importaciones</span>
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

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={imagenImportaciones}
            alt="Importaciones"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Importaciones;
