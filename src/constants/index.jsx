export const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Sobre Nosotros",
    href: "#",
    dropdown: [
      { label: "Nuestra Empresa", href: "/sobre-nosotros/nuestra-empresa" },
      { label: "Historia", href: "/sobre-nosotros/historia" },
      { label: "App Móvil", href: "/sobre-nosotros/app-movil" },
      { label: "Contacto", href: "/sobre-nosotros/contacto" },
    ],
  },
  { label: "Productos", href: "/productos" },
  { label: "Certificaciones", href: "/certificaciones" },
  { label: "Estandares", href: "/estandares" },
];

export const resourcesLinks = [
  { href: "/sobre-nosotros/nuestra-empresa", text: "Nuestra empresa" },
  { href: "/sobre-nosotros/historia", text: "Historia" },
  { href: "/sobre-nosotros/app-movil", text: "App Móvil" },
  { href: "/sobre-nosotros/contacto", text: "Contacto" },
];

export const platformLinks = [
  { href: "/certificaciones", text: "Certificaciones" },
  { href: "/estandares", text: "Estandares" },
];

export const communityLinks = [
  { href: "/productos", text: "Nuestros productos" },
];
