import cliente1 from "../assets/NuestrosClientes/cliente_1.png";
import cliente2 from "../assets/NuestrosClientes/cliente_2.png";
import cliente3 from "../assets/NuestrosClientes/cliente_3.png";
import cliente4 from "../assets/NuestrosClientes/cliente_4.png";

const NuestrosClientes = () => {
  const logos = [
    { id: 1, src: cliente1, alt: "Cliente 1" },
    { id: 2, src: cliente2, alt: "Cliente 2" },
    { id: 3, src: cliente3, alt: "Cliente 3" },
    { id: 4, src: cliente4, alt: "Cliente 4" },
  ];

  return (
    <section className="py-9 bg-surface border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-12">
          Nuestros <span className="text-secondary font-bold">Clientes</span>
        </h2>

        {/* Contenedor de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center transform transition-all duration-500 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-24 md:h-28 lg:h-32 w-auto opacity-85 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosClientes;
