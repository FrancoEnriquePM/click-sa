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
      // Para el modo oscuro, usamos un gris muy oscuro con un toque de azul
      changeThemeColor("#030712"); // Simula dark:bg-gray-950/30
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      // Para el modo claro, usamos un blanco con un toque de azul claro
      changeThemeColor("#ffffff"); // Simula bg-white/30
    }
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  // Componentes de Layout
  const ElementosPublicos = ({ children }) => (
    <>
      <main className="bg-background text-text min-h-screen transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="max-w-7xl mx-auto pt-6 px-6">{children}</div>
        <Footer />
      </main>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ElementosPublicos>
              {/*  <Carrusel />
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
