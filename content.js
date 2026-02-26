// Iconos: súbelos a /assets/icons/ y usa rutas relativas.
// Ejemplo: assets/icons/hrmotor.png | assets/icons/docusign.png | ...

const TOOLS = [
  // ===== Prioritarias (pinned) =====
  {
    name: "ACCESO WEB (Gestor)",
    desc: "Portal interno HR Motor (gestión)",
    url: "https://www.hrmotor.com/gestor/",
    icon: "assets/icons/hrmotor.png",
    group: "Operativa",
    pinned: true,
    badge: "Diario"
  },
  {
    name: "Lendismart",
    desc: "Financiación / operaciones",
    url: "https://hrmotor.lendismart.com/login",
    icon: "assets/icons/lendismart.png",
    group: "Financiación",
    pinned: true,
    badge: "Diario"
  },
  {
    name: "DocuSign",
    desc: "Firmas y envío de documentación",
    // ⚠️ Recomendado: URL limpia (evita OAuth largo)
    url: "https://account.docusign.com/",
    icon: "assets/icons/docusign.png",
    group: "Documentación",
    pinned: true,
    badge: "Diario"
  },
  {
    name: "Serviceform",
    desc: "CRM / captación de leads",
    url: "https://www.serviceform.es/",
    icon: "assets/icons/serviceform.png",
    group: "CRM",
    pinned: true,
    badge: "Comercial"
  },
  {
    name: "WhatsApp Web",
    desc: "Comunicación con clientes",
    url: "https://web.whatsapp.com/",
    icon: "assets/icons/whatsapp.png",
    group: "Comunicación",
    pinned: true,
    badge: "Diario"
  },

  // ===== Resto =====
  {
    name: "My Mutua",
    desc: "Seguros / portal Mutua",
    // ⚠️ Recomendado: URL limpia (evita state/nonce)
    url: "https://www.mymutua.es/",
    icon: "assets/icons/mutua.png",
    group: "Seguros",
    badge: "Proveedor"
  },
  {
    name: "Woffu",
    desc: "Control horario, ausencias y vacaciones",
    // Mejor app/login que la web corporativa
    url: "https://app.woffu.com/v2/login",
    icon: "assets/icons/woffu.png",
    group: "RRHH",
    badge: "Interno"
  },
  {
    name: "Formación HR Motor",
    desc: "Cursos y recursos formativos",
    url: "https://formacion.hrmotor.com/",
    icon: "assets/icons/formacion.png",
    group: "Formación",
    badge: "Academia"
  }
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
