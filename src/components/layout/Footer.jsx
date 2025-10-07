import { Link } from "react-router-dom";
import { servicios, propuestas, nosotros } from "../../constants";

const Footer = () => {
  return (
    <footer className="mt-9 py-10 border-t border-border max-w-7xl mx-auto px-6 bg-surface text-text transition-colors duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sobre nosotros */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-secondary">
            Sobre nosotros
          </h3>
          <ul className="space-y-2">
            {nosotros.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-text-muted hover:text-secondary transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-secondary">
            Servicios
          </h3>
          <ul className="space-y-2">
            {servicios.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-text-muted hover:text-secondary transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Certificaciones */}
        {
          <div>
            <h3 className="text-md font-semibold mb-4 text-secondary">
              Propuestas
            </h3>
            <ul className="space-y-2">
              {propuestas.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-text-muted hover:text-secondary transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>

      {/* Derechos reservados */}
      <div className="text-right mt-8 text-text-muted">
        <h3>© 2025 Click S.A.</h3>
      </div>
    </footer>
  );
};

export default Footer;
