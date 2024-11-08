import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";

export const getInvolvedSection = {
  title: "Un futuro sostenible",
  subheading1_1: "Podemos construir ",
  subheading1_2: "ideas sostenibles, porque somos:",
  initiatives: [
    {
      title: "Responsables con el medio ambiente",
      description:
        "Estamos comprometidos con la contribución al desarrollo sostenible del medio ambiente garantizando un servicio eficaz y de alta calidad.",
      visual: svg2,
    },
    {
      title: "Comprometidos con la calidad",
      description:
        "Satisfacemos las necesidades de nuestros clientes a través de un servicio de calidad enfocado en los detalles.",
      visual: svg3,
    },
    {
      title: "Profesionales idoneos",
      description:
        "Somos un equipo de profesionales que trabajamos volcados para asegurar el éxito de nuestros proyectos y clientes.",
      visual: svg4,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Take Action Today for a Greener Tomorrow",
  button: "Join Our Initiatives",
};
