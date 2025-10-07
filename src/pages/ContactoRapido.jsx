import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactoRapido = () => {
  const contactos = [
    {
      icon: <Phone className="h-7 w-7 text-secondary" />,
      title: "Teléfono",
      description: "+591 777-12345",
    },
    {
      icon: <Mail className="h-7 w-7 text-secondary" />,
      title: "Correo electrónico",
      description: "informaciones@clickbol.com",
    },
    {
      icon: <MapPin className="h-7 w-7 text-secondary" />,
      title: "Ubicación",
      description: "Av. Mariscal Santa Cruz #456, La Paz, Bolivia",
    },
    {
      icon: <Clock className="h-7 w-7 text-secondary" />,
      title: "Horario de atención",
      description: "Lunes a Viernes 8:00 - 18:00",
    },
  ];

  return (
    <section className="py-12 bg-surface border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-12">
          Contáctanos <span className="text-secondary">Rápidamente</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-6">
          {contactos.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary-soft shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-text mb-1">
                {item.title}
              </h3>
              <p className="text-text/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div>
          <a
            href="https://wa.me/59177712345?text=Hola%2C%20quisiera%20más%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactoRapido;
