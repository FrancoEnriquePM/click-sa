import imagenAutorizacionesCertificaciones from "../assets/AutorizacionesCertificaciones/autorizaciones_certificaciones.jpeg"; // Ajusta la ruta a tu imagen real
import {
  Globe,
  RefreshCw,
  Clock,
  Ship,
  Briefcase,
  Package,
} from "lucide-react";

const AutorizacionesCertificaciones = () => {
  const items = [
    {
      icon: <Globe className="h-8 w-8 text-secondary" />,
      title: "Senasag",
      description:
        "Gestionamos el proceso completo para la salida definitiva de mercancías, asegurando el cumplimiento de las normativas internacionales y nacionales.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-secondary" />,
      title: "Dirección General de Sustancias Controladas",
      description:
        "Coordinamos la reexportación de mercancías previamente importadas, garantizando eficiencia en los trámites y tiempos de despacho.",
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Ibmetro",
      description:
        "Facilitamos el envío temporal de bienes para ferias, demostraciones o procesos industriales, bajo control aduanero y con retorno programado.",
    },
    {
      icon: <Ship className="h-8 w-8 text-secondary" />,
      title: "Agencia Nacional de Hidrocarburos",
      description:
        "Tramitamos los permisos y certificaciones requeridos para la exportación de productos relacionados con hidrocarburos.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-secondary" />,
      title: "Viceministerio de Comercio Interno",
      description:
        "Apoyamos en la gestión de licencias y documentos necesarios para la comercialización y exportación de productos nacionales.",
    },
    {
      icon: <Package className="h-8 w-8 text-secondary" />,
      title: "Agemed",
      description:
        "Asistimos en los procesos de registro, control y autorización sanitaria para la exportación de medicamentos y productos afines.",
    },
  ];

  return (
    <section className="py-9 bg-surface border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto e íconos */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-semibold mb-8">
            <span className="text-secondary">
              Autorizaciones y <br />
              Certificaciones
            </span>
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
            src={imagenAutorizacionesCertificaciones}
            alt="AutorizacionesCertificaciones"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AutorizacionesCertificaciones;
