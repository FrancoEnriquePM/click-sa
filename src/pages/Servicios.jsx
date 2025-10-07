import {
  FileText,
  Clock,
  User,
  CheckCircle,
  Gavel,
  Headset,
} from "lucide-react";
import ProposalImage from "../assets/Servicios/servicios.jpg";

const services = [
  {
    icon: FileText,
    description:
      "Los despachos con **documentación completa** una vez concluido el trámite de nacionalización en un máximo de **24 hrs**.",
  },
  {
    icon: Clock,
    description:
      "Retroalimentación de los procesos de operación **constante** con el personal de la empresa.",
  },
  {
    icon: User,
    description: "Asignación de **liquidador exclusivo** para la empresa.",
  },
  {
    icon: CheckCircle,
    description:
      "Seguimiento de todas sus **AUTORIZACIONES PREVIAS y CERTIFICACIONES**.",
  },
  {
    icon: Gavel,
    description: "Asesoramiento **legal tributario** pre y post fiscalización.",
  },
  {
    icon: Headset,
    description: "Una agencia despachante a disposición **24/7**.",
  },
];

const Servicios = () => {
  return (
    // Usa el estilo del contenedor de la sección de clientes
    <section className="pt-12 pb-12 bg-surface text-text transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título movido AFUERA del contenedor de contenido */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Nuestra
          <span className="text-secondary font-semibold">
            {" "}
            Propuesta de Trabajo
          </span>
        </h2>

        {/* Contenedor de contenido: Eliminada la sombra y el borde */}
        <div className="flex flex-wrap lg:flex-nowrap rounded-lg overflow-hidden py-6">
          {/* Columna Izquierda: Imagen */}
          <div
            className="w-full lg:w-1/3 min-h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${ProposalImage})` }}
            aria-label="Trabajador de agencia aduanera inspeccionando contenedores"
          >
            <div className="w-full h-full"></div>
          </div>

          {/* Columna Derecha: Contenido */}
          <div className="w-full lg:w-2/3 p-6 md:p-7 text-text">
            {/* Título interno eliminado, solo se deja el párrafo introductorio */}
            <p className="text-lg mb-10 max-w-xl leading-relaxed text-text-muted">
              Como agencia despachante de aduana, nuestros servicios incluyen la
              gestión completa de trámites aduaneros como ser:
            </p>

            {/* Lista de Servicios */}
            <div className="grid grid-cols-1 gap-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {/* Ícono */}
                  <div className="flex-shrink-0 p-3 rounded-full bg-surface text-primary-accent mt-1 border border-border">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  {/* Descripción */}
                  <p
                    className="text-base text-text leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: service.description.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
