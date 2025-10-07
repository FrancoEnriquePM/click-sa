import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";
import Contacto from "./pages/Contacto";
import NuestraEmpresa from "./pages/NuestraEmpresa";
import Carrusel from "./pages/Carrusel";
import NuestrosClientes from "./pages/NuestrosClientes";
import Servicios from "./pages/Servicios";
import PropuestaEconomica from "./pages/PropuestaEconomica";
import Importaciones from "./pages/Importaciones";
import Exportaciones from "./pages/Exportaciones";
import AutorizacionesCertificaciones from "./pages/AutorizacionesCertificaciones";
import ContactoRapido from "./pages/ContactoRapido";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // Cambiar el <meta name="theme-color"> (para móviles)
  const changeThemeColor = (color) => {
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (!themeColorMeta) {
      themeColorMeta = document.createElement("meta");
      themeColorMeta.name = "theme-color";
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.content = color;
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      // 🔥 Usamos las variables definidas en index.css
      changeThemeColor("#111111"); // equivale a var(--color-surface) dark
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      changeThemeColor("#ffffff"); // equivale a var(--color-surface) claro
    }
  }, [darkMode]);

  // Escuchar cambios del sistema (auto dark/light)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Layout base
  const ElementosPublicos = ({ children }) => (
    <div className="bg-surface text-text min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="">{children}</main>
      <Footer />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/click-sa/"
          element={
            <ElementosPublicos>
              <Carrusel />
              <Importaciones />
              <Exportaciones />
              <AutorizacionesCertificaciones />
              <NuestrosClientes />
              <ContactoRapido />
            </ElementosPublicos>
          }
        />
        <Route
          path="/sobre-nosotros/contacto"
          element={
            <ElementosPublicos>
              <Contacto />
            </ElementosPublicos>
          }
        />
        <Route
          path="/sobre-nosotros/nuestra-empresa"
          element={
            <ElementosPublicos>
              <NuestraEmpresa />
            </ElementosPublicos>
          }
        />
        <Route
          path="/servicios"
          element={
            <ElementosPublicos>
              <Servicios />
            </ElementosPublicos>
          }
        />
        <Route
          path="/propuesta_economica"
          element={
            <ElementosPublicos>
              <PropuestaEconomica />
            </ElementosPublicos>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
