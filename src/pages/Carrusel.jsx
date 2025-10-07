import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

import imgImportaciones from "../assets/Carrusel/importaciones.jpg";
import imgExportaciones from "../assets/Carrusel/exportaciones.jpg";
import imgAutorizaciones from "../assets/Carrusel/autorizaciones_y_certificaciones.jpg";

const Carrusel = () => {
  const datos = [
    {
      id: 1,
      titulo: "Gestión Aduanera Completa",
      subtitulo: "Importaciones",
      descripcion:
        "Realizamos importaciones de forma eficiente y segura, con despacho en menos de 24 horas.",
      textoLateral:
        "Cada programa incluye seguimiento constante, liquidador exclusivo y asesoría legal pre y post fiscalización.",
      imagen: imgImportaciones,
    },
    {
      id: 2,
      titulo: "Expande tu Negocio Globalmente",
      subtitulo: "Exportaciones",
      descripcion:
        "Tu mejor aliado para encontrar oportunidades de mercado internacional y trámites simplificados.",
      textoLateral:
        "Nos encargamos de las autorizaciones y certificaciones necesarias para tu expansión internacional.",
      imagen: imgExportaciones,
    },
    {
      id: 3,
      titulo: "Máxima Seguridad y Cumplimiento",
      subtitulo: "Autorizaciones y certificaciones",
      descripcion:
        "Nos encargamos de los trámites de autorizaciones previas y certificaciones necesarias para el despacho aduanero.",
      textoLateral:
        "Una agencia despachante a tu disposición 24/7 para garantizar la continuidad de tus operaciones.",
      imagen: imgAutorizaciones,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef(null);

  const iniciarTransicion = useCallback(() => {
    setFade(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setFade(false), 600);
  }, []);

  const siguienteImagen = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === datos.length - 1 ? 0 : prevIndex + 1
    );
    iniciarTransicion();
  }, [datos.length, iniciarTransicion]);

  const anteriorImagen = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? datos.length - 1 : prevIndex - 1
    );
    iniciarTransicion();
  };

  useEffect(() => {
    const interval = setInterval(() => siguienteImagen(), 7000);
    return () => clearInterval(interval);
  }, [siguienteImagen]);

  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) siguienteImagen();
    else if (endX - startX > 50) anteriorImagen();
  };

  const handleMouseDown = (e) => setStartX(e.clientX);
  const handleMouseUp = (e) => {
    const endX = e.clientX;
    if (startX - endX > 50) siguienteImagen();
    else if (endX - startX > 50) anteriorImagen();
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      id="carrusel"
      className="max-w-full w-full mx-auto relative group min-h-[70vh] lg:min-h-screen select-none"
    >
      <div className="relative h-full overflow-hidden rounded-none">
        {/* Fondo con overlay dinámico */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{
            backgroundImage: `
              linear-gradient(
                to top,
                rgba(0,0,0,0.65),
                rgba(0,0,0,0.35)
              ),
              url(${datos[currentIndex].imagen})
            `,
          }}
          className={`w-full min-h-[70vh] lg:min-h-screen bg-cover bg-center transition-opacity duration-700 ease-in-out flex items-end relative`}
        >
          {/* Contenido principal */}
          <div className="container mx-auto px-6 py-16 lg:py-24 z-10 text-surface flex flex-col justify-end w-full">
            {/* Subtítulo */}
            <p className="text-lg md:text-xl font-semibold tracking-wide mb-3 text-secondary drop-shadow-lg uppercase">
              {datos[currentIndex].subtitulo}
            </p>

            {/* Título */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-2xl mb-10">
              {datos[currentIndex].titulo}
            </h1>

            {/* Bloques inferiores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end text-surface">
              {/* Descripción principal */}
              <div className="bg-surface/90 dark:bg-primary-soft/70 backdrop-blur-md p-5 rounded-xl shadow-lg text-gray-300">
                <p className="text-base md:text-lg font-medium">
                  {datos[currentIndex].descripcion}
                </p>
              </div>

              {/* Texto lateral */}
              <div className="col-span-1 md:col-span-2 text-right">
                <p className="text-sm md:text-base font-light leading-relaxed max-w-md ml-auto text-gray-400">
                  {datos[currentIndex].textoLateral}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={anteriorImagen}
          aria-label="Anterior"
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-surface/20 dark:bg-primary-soft/40 text-white hover:scale-110 hover:bg-primary-accent/40 transition z-20 shadow-lg"
        >
          <LucideArrowLeft size={26} />
        </button>

        <button
          onClick={siguienteImagen}
          aria-label="Siguiente"
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-surface/20 dark:bg-primary-soft/40 text-white hover:scale-110 hover:bg-primary-accent/40 transition z-20 shadow-lg"
        >
          <LucideArrowRight size={26} />
        </button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-3 z-30">
        {datos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              iniciarTransicion();
            }}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`w-3.5 h-3.5 rounded-full border border-secondary transition-all duration-300 ${
              currentIndex === i
                ? "bg-secondary scale-125"
                : "bg-surface/60 dark:bg-primary-soft/60 hover:bg-secondary/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
