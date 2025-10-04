import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";

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
      <main className="max-w-7xl mx-auto pt-6 px-6">{children}</main>
      <Footer />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ElementosPublicos>
              {/* Aquí irán tus secciones */}
              {/* <Carrusel />
              <SeccionAppMovil />
              <InicioSeccion />
              <Testimonials /> */}
            </ElementosPublicos>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
