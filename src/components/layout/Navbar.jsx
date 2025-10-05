import { Menu, X, Sun, Moon, ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoTemaClaro from "../../assets/logo_tema_claro.png";
import logoTemaOscuro from "../../assets/logo_tema_oscuro.png";
import { navItems } from "../../constants";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    if (!mobileDrawerOpen) setDropdownOpen(null);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
    setDropdownOpen(null);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleMobileLinkClick = (item, index) => {
    if (item.dropdown) {
      toggleDropdown(index);
    } else {
      closeNavbar();
    }
  };

  const handleSubmenuClick = () => {
    setDropdownOpen(null);
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-primary/80 text-text border-border transition-colors duration-300">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/click-sa/" className="flex items-center flex-shrink-0">
            <img
              className="h-9 w-54 mr-2 transition-opacity duration-300"
              src={darkMode ? logoTemaOscuro : logoTemaClaro}
              alt="Logo"
            />
          </Link>

          {/* Links Desktop */}
          <div className="hidden lg:flex flex-grow justify-center">
            <ul className="flex space-x-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group px-3"
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    className="text-base cursor-pointer py-3 hover:text-secondary transition-colors"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ul
                      className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 py-2 backdrop-blur-lg bg-surface text-text rounded-lg shadow-2xl border border-border z-10 ${
                        dropdownOpen === index ? "block" : "hidden"
                      }`}
                    >
                      {/* Flecha */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-surface"></div>

                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            className="block px-4 py-2 text-base hover:bg-secondary hover:text-surface rounded-md transition-colors"
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
          </div>
          {/* Botón tema + login (desktop) */}
          <div className="hidden lg:flex justify-center space-x-3 items-center text-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded hover:bg-secondary/20 transition-colors text-text"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>

          {/* Botón menu móvil */}
          <div className="lg:hidden md:flex flex-col justify-end text-text">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Drawer móvil */}
        {mobileDrawerOpen && (
          <div className="z-20 bg-surface text-text w-full p-6 flex rounded-lg shadow-lg flex-col justify-center items-center lg:hidden transition-colors">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 w-full">
                  <Link
                    className="text-base w-full block"
                    to={item.href}
                    onClick={() => handleMobileLinkClick(item, index)}
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
                    <ul className="mt-2 ml-4 py-2 bg-surface border border-border rounded-md shadow-lg transition-colors duration-300">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.href}
                            onClick={handleSubmenuClick}
                            className="block px-4 py-2 text-sm text-text rounded-md transition-colors duration-300 
                     hover:bg-secondary/10 dark:hover:bg-secondary/20 hover:text-secondary"
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

            {/* Botones mobile */}
            <div className="flex space-x-6 mt-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded hover:bg-secondary/20 transition-colors text-text"
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
