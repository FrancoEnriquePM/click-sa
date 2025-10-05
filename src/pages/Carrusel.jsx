import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

// Importar imágenes
import imgImportaciones from "../assets/Carrusel/importaciones.jpg";
import imgExportaciones from "../assets/Carrusel/exportaciones.jpg";
import imgAutorizaciones from "../assets/Carrusel/autorizaciones_y_certificaciones.jpg";

const Carrusel = () => {
  const datos = [
    {
      id: 1,
      titulo: "Importaciones",
      descripcion: "Realizamos importaciones de forma eficiente y segura.",
      imagen: imgImportaciones,
    },
    {
      id: 2,
      titulo: "Exportaciones",
      descripcion:
        "Tu mejor aliado para encontrar oportunidades de mercado internacional.",
      imagen: imgExportaciones,
    },
    {
      id: 3,
      titulo: "Autorizaciones y certificaciones",
      descripcion:
        "Nos encargamos de los trámites de autorizaciones previas y certificaciones necesarias para el despacho aduanero.",
      imagen: imgAutorizaciones,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Eliminado: const [loading, setLoading] = useState(true);
  const [startX, setStartX] = useState(0);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef(null);

  // 📝 Helper para la transición de fade
  const iniciarTransicion = useCallback(() => {
    setFade(true);
    clearTimeout(timeoutRef.current);
    // 600ms de transición + un pequeño buffer
    timeoutRef.current = setTimeout(() => setFade(false), 600);
  }, []);

  // ⏩ Función Siguiente Imagen
  const siguienteImagen = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === datos.length - 1 ? 0 : prevIndex + 1
    );
    iniciarTransicion();
  }, [datos.length, iniciarTransicion]);

  // ⏪ Función Anterior Imagen
  const anteriorImagen = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? datos.length - 1 : prevIndex - 1
    );
    iniciarTransicion();
  };

  // ⏱️ Autoplay (cada 7s)
  useEffect(() => {
    const interval = setInterval(() => siguienteImagen(), 7000);
    return () => clearInterval(interval);
  }, [siguienteImagen]);

  // 🗑️ ELIMINADO: useEffect para simular la carga de imagen

  // 👆 Swipe táctil
  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) siguienteImagen();
    else if (endX - startX > 50) anteriorImagen();
  };

  // 🖱️ Swipe con mouse
  const handleMouseDown = (e) => setStartX(e.clientX);
  const handleMouseUp = (e) => {
    const endX = e.clientX;
    if (startX - endX > 50) siguienteImagen();
    else if (endX - startX > 50) anteriorImagen();
  };

  // 🧹 Limpiar el timeout al desmontar
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="max-w-[1400px] w-full m-auto relative group max-h-screen select-none">
      <div className="relative h-full overflow-hidden rounded-2xl shadow-lg">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.25)), url(${datos[currentIndex].imagen})`,
          }}
          className={`w-full min-h-[600px] bg-cover bg-center transition-all duration-700 ease-in-out flex items-center justify-center relative ${
            // La clase fade maneja la transición de la imagen
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* ELIMINADO: El div del Loader */}

          {/* Texto superpuesto - Ahora SIEMPRE visible, con la transición de fade */}
          <div className="absolute bottom-8 left-8 bg-black/40 dark:bg-surface/15 backdrop-blur-sm p-3 rounded-2xl text-surface shadow-md max-w-[70%]">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-2 drop-shadow-lg">
              {datos[currentIndex].titulo}
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              {datos[currentIndex].descripcion}
            </p>
          </div>
        </div>

        {/* Botones de navegación (Iguales) */}
        <button
          onClick={anteriorImagen}
          aria-label="Anterior"
          className="hidden group-hover:flex absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-black/30 dark:bg-white/30 text-surface dark:text-text hover:scale-105 hover:bg-black/40 dark:hover:bg-white/40 transition"
        >
          <LucideArrowLeft size={28} />
        </button>

        <button
          onClick={siguienteImagen}
          aria-label="Siguiente"
          className="hidden group-hover:flex absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-black/30 dark:bg-white/30 text-surface dark:text-text hover:scale-105 hover:bg-black/40 dark:hover:bg-white/40 transition"
        >
          <LucideArrowRight size={28} />
        </button>
      </div>

      {/* Indicadores (Iguales) */}
      <div className="flex justify-center space-x-2 py-4">
        {datos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              iniciarTransicion();
            }}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === i
                ? "bg-secondary scale-125"
                : "bg-border hover:bg-primary-light"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
