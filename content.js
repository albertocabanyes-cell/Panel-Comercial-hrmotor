// Iconos e imágenes: súbelos al repo y usa rutas relativas.
// Ejemplo: assets/icons/outlook.png  | assets/pdf/nota1.pdf | assets/news/foto1.jpg

const TOOLS = [
  { name: "Outlook Web", desc: "Correo corporativo", url: "https://outlook.office.com/", icon: "assets/icons/outlook.png" },
  { name: "3CX", desc: "Telefonía / Centralita", url: "https://TU_URL_3CX_AQUI", icon: "assets/icons/3cx.png" },
  { name: "SharePoint", desc: "Documentación y recursos", url: "https://axiumsoluciones.sharepoint.com/", icon: "assets/icons/sharepoint.png" },
  { name: "Salesforce", desc: "CRM", url: "https://TU_DOMINIO.lightning.force.com", icon: "assets/icons/salesforce.png" }
];

const COMUNICADOS = [
  {
    title: "Cambio de procedimiento - Tasaciones",
    date: "2026-02-26",
    text: "A partir de hoy se centraliza la solicitud de tasación por el canal X. Revisar el PDF adjunto.",
    pdf: "assets/pdf/comunicado-tasaciones.pdf"
  },
  {
    title: "Recordatorio: firma legal en correos",
    date: "2026-02-25",
    text: "Se actualiza el texto legal. Ver imagen con el formato correcto.",
    image: "assets/news/firma-legal.png"
  }
];

const NOTICIAS = [
  {
    title: "Nuevo argumentario comercial (Q1)",
    date: "2026-02-24",
    text: "Disponible el argumentario para objeciones frecuentes. Abrir documento.",
    pdf: "assets/pdf/argumentario-q1.pdf"
  }
];
