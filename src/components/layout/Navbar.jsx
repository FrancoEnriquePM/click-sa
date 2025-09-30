import { Menu, X, Sun, Moon, ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { navItems } from "../../constants";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    // Resetear los dropdowns al abrir/cerrar el menú móvil
    if (!mobileDrawerOpen) {
      setDropdownOpen(null);
    }
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
    // Cerrar también los dropdowns al cerrar el navbar
    setDropdownOpen(null);
  };

  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };

  // Función para manejar el clic en un enlace del menú móvil
  const handleMobileLinkClick = (item, index) => {
    if (item.dropdown) {
      // Si tiene submenú, alternar su visibilidad
      toggleDropdown(index);
    } else {
      // Si no tiene submenú, cerrar el menú móvil
      closeNavbar();
    }
  };

  // Función para manejar el clic en un submenú
  const handleSubmenuClick = () => {
    // Cerrar tanto el submenú como el menú móvil
    setDropdownOpen(null);
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-white/30 dark:bg-gray-950/30 border-b border-transparent">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 text-blue-500 hover:text-blue-700 transition-colors dark:text-blue-300 dark:hover:text-blue-500"
          >
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span
              className="text-xl tracking-tight font-bold"
              style={{ color: "#1D3561" }}
            >
              FARMEDICAL
            </span>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group px-3"
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  className="text-base cursor-pointer py-3 dark:text-gray-200"
                  to={item.href}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ul
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 py-2 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-collapse rounded-lg shadow-2xl z-10 ${
                      dropdownOpen === index ? "block" : "hidden"
                    }`}
                  >
                    {/* Flecha apuntando hacia arriba en forma de triángulo */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white/90 dark:border-b-gray-900/90"></div>

                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className="block px-4 py-2 text-base hover:bg-white/90 dark:hover:bg-gray-700 dark:text-gray-300"
                          to={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-3 items-center text-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-black dark:text-white rounded"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
            {/* <Link to="/iniciar-sesion" className="py-2 px-3 border rounded-md backdrop-blur-md bg-white/30 dark:bg-gray-800 dark:text-gray-100">
              Registrarse
            </Link> */}
            <Link
              to="/iniciar-sesion/login"
              className="text-white py-2 px-3 rounded-md bg-gradient-to-r from-sky-950 to-amber-600"
            >
              Iniciar Sesion
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end text-black dark:text-white">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="z-20 bg-white dark:bg-gray-900 w-full p-6 flex rounded-lg shadow-lg flex-col justify-center items-center lg:hidden">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 w-full">
                  {/* Cambiamos el onClick para usar handleMobileLinkClick */}
                  <Link
                    className="text-base w-full block dark:text-gray-200"
                    to={item.href}
                    onClick={() => {
                      handleMobileLinkClick(item, index);
                    }}
                  >
                    <div className="flex justify-between items-center">
                      {item.label}
                      {item.dropdown && (
                        <span className="ml-2">
                          {dropdownOpen === index ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </span>
                      )}
                    </div>
                  </Link>

                  {item.dropdown && dropdownOpen === index && (
                    <ul className="mt-2 ml-4 py-2 bg-white dark:bg-gray-800 border rounded-md shadow-lg">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            to={subItem.href}
                            onClick={handleSubmenuClick} // Cerrar menú al seleccionar subopción
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-black dark:text-white rounded"
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>
              {/* <Link to="/iniciar-sesion" className="py-2 px-3 border rounded-md dark:text-gray-200 dark:border-gray-700">
                Registrarse
              </Link> */}
              <Link
                to="/iniciar-sesion/login"
                className="text-white py-2 px-3 rounded-md bg-gradient-to-r from-sky-950 to-amber-600"
              >
                Iniciar Sesion
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
