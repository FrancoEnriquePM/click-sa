import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    // Contenedor principal: Centrado, fondo oscuro, fuente Sans-serif, y paddings grandes.
    <div className="min-h-screen p-8 bg-gray-900 text-white flex flex-col items-center justify-center font-sans">
      {/* Contenedor de logos: Flexbox con espacio entre ellos */}
      <div className="flex space-x-16 mb-12">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          {/* Logo con estilos de tamaño, transición y sombra al pasar el mouse */}
          <img
            src={viteLogo}
            className="h-32 w-32 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafb] rounded-full p-4 hover:bg-gray-800"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-32 w-32 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafb] rounded-full p-4 hover:bg-gray-800"
            alt="React logo"
          />
        </a>
      </div>

      {/* Título: Fuente extra-gruesa, grande, y con un degradado de color */}
      <h1 className="text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Vite + React
      </h1>

      {/* Tarjeta (Card): Estilos de fondo, sombra y esquinas redondeadas */}
      <div className="flex flex-col items-center p-8 bg-gray-800 rounded-xl shadow-2xl space-y-4 max-w-sm w-full transition duration-300 hover:shadow-cyan-500/50">
        {/* Botón: Estilo de botón moderno, redondo, con sombra, hover y foco */}
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
        >
          count is {count}
        </button>

        {/* Párrafo de instrucciones */}
        <p className="text-gray-400 text-sm">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Párrafo de documentación */}
      <p className="text-cyan-500 mt-6 text-sm hover:text-cyan-400 transition duration-150">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
