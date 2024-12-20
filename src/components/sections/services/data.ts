import img1 from "./assets/garden.webp";
import img2 from "./assets/servicios-forestales.webp";
// TODO
import img3 from "./assets/ambiental.webp";


export const servicesSectionData = {
  title: "Nuestros servicios",
  subheading: {
    text1_1:
      "Brindamos una amplia gama de servicios en ingeniería ambiental, forestal y paisajística.",
    text2:
      "Cada proyecto es único y lo abordamos con precisión técnica y un profundo respeto por el medio ambiente.",
      text1_2: "Nos especializamos en:",
  },
  services: [
    {
      title: "Paisajismo",
      briefDescription:
        "Diseños únicos que embellecen tu entorno, creando paisajes sostenibles y llenos de vida.",
      visual: img1,
    },
    {
      title: "Servicios forestales",
      briefDescription:
        "Gestión forestal sostenible para preservar y revitalizar tus espacios.",
      visual: img2,
    },
    {
      title: "Servicios Ambientales",
      briefDescription: "Implementamos sistemas de gestión ambiental que promueven sostenibilidad y eficiencia en cada proceso.",
      visual: img3,
    },
  ],
  callToAction: "¡Elige una solución para tí hoy!",
  buttonText: "Solicitar Cotización",
};
