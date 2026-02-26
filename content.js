// =======================
// PANEL COMERCIAL HR MOTOR
// =======================
// Nota: este archivo define datos globales para index.html.
// Debe usar window.* (no const) para que el HTML lo detecte.

// -----------------------
// 1) GRID HOME: Herramientas
// -----------------------
window.TOOLS = [
  {
    name: "Acceso Web",
    desc: "Gestor HR Motor (operativa interna)",
    url: "https://www.hrmotor.com/gestor/",
    icon: "9d5b4786-8fbb-4391-a2f3-b34020945959.png",
    group: "Operativa",
    badge: "Diario"
  },
  {
    name: "My Mutua",
    desc: "Portal Mutua (seguros / gestiones)",
    url: "https://www.mymutua.es/",
    icon: "assets/icons/mutua.png",
    group: "Seguros"
  },
  {
    name: "Serviceform",
    desc: "CRM / captación de leads",
    url: "https://www.serviceform.es/",
    icon: "assets/icons/serviceform.png",
    group: "CRM",
    badge: "Comercial"
  },
  {
    name: "WhatsApp Web",
    desc: "Comunicación con clientes",
    url: "https://web.whatsapp.com/",
    icon: "assets/icons/whatsapp.png",
    group: "Comunicación"
  },
  {
    name: "Lendismart",
    desc: "Financiación / operaciones",
    url: "https://hrmotor.lendismart.com/login",
    icon: "assets/icons/lendismart.png",
    group: "Financiación"
  },
  {
    name: "DocuSign",
    desc: "Firmas electrónicas",
    url: "https://account.docusign.com/",
    icon: "assets/icons/docusign.png",
    group: "Documentación",
    badge: "Diario"
  },
  {
    name: "Woffu",
    desc: "RRHH: horario, ausencias, vacaciones",
    url: "https://app.woffu.com/v2/login",
    icon: "assets/icons/woffu.png",
    group: "RRHH"
  }
];

// -----------------------
// 2) PESTAÑAS (Tabs): Páginas internas con “hero” + guías
// IMPORTANTÍSIMO: las claves deben coincidir con data-page del navbar
// -----------------------
window.PAGES = {
  acceso_web: {
    navLabel: "Acceso Web",
    title: "Acceso Web (Gestor HR Motor)",
    heroTitle: "Gestor HR Motor",
    description: "Portal interno de operativa diaria. Acceso a procesos, documentación y herramientas corporativas.",
    icon: "9d5b4786-8fbb-4391-a2f3-b34020945959.png",
    primaryUrl: "https://www.hrmotor.com/gestor/",
    primaryLabel: "Abrir Acceso Web",
    updated: "2026-02-26",
    badges: [{ label: "Diario" }, { label: "Interno" }],
    blocks: [
      {
        title: "Checklist de acceso",
        steps: [
          "Abrir en Chrome.",
          "Verificar sesión corporativa activa.",
          "Si falla, Ctrl+F5 y prueba en incógnito."
        ]
      },
      {
        title: "Si hay incidencia",
        bullets: [
          "Adjuntar captura del error y hora exacta.",
          "Indicar delegación/usuario afectado.",
          "Confirmar si le ocurre a más compañeros."
        ]
      }
    ]
  },

  my_mutua: {
    navLabel: "My Mutua",
    title: "My Mutua",
    heroTitle: "Portal My Mutua",
    description: "Acceso a gestiones con Mutua (seguros / documentación / trámites).",
    icon: "assets/icons/mutua.png",
    primaryUrl: "https://www.mymutua.es/",
    primaryLabel: "Abrir My Mutua",
    // Si quieres conservar el enlace SSO largo, lo dejamos como secundario (opcional):
    secondaryUrl: "https://access.mutua.es/auth/realms/mymutua/protocol/openid-connect/auth?response_type=code&client_id=appseguros-front-canal-mediacion&scope=openid&state=kmbjXkQ7kJGvwZLQYHuo6lrnl1g7xDf-l2dCRIdr04M%3D&redirect_uri=https://www.mymutua.es/front-canal-mediacion/login/oauth2/code/sso&nonce=L0XFsW7iFaW1ZhX6dGXDl-tQm1y89v-5n7mKoEBgpv4",
    secondaryLabel: "Acceso SSO (si aplica)",
    updated: "2026-02-26",
    badges: [{ label: "Proveedor" }],
    blocks: [
      {
        title: "Problemas de acceso",
        steps: [
          "Cerrar sesión y volver a entrar.",
          "Probar incógnito si hay bucle de login.",
          "Verificar que usas el usuario correcto."
        ]
      }
    ]
  },

  serviceform: {
    navLabel: "Serviceform",
    title: "Serviceform",
    heroTitle: "Serviceform (CRM / Captación)",
    description: "Gestión de leads y seguimiento comercial. Registra resultado y siguiente acción.",
    icon: "assets/icons/serviceform.png",
    primaryUrl: "https://www.serviceform.es/",
    primaryLabel: "Abrir Serviceform",
    updated: "2026-02-26",
    badges: [{ label: "Comercial" }, { label: "Diario" }],
    blocks: [
      {
        title: "Buenas prácticas",
        bullets: [
          "Responder leads lo antes posible.",
          "Registrar contacto (llamada/WhatsApp) y resultado.",
          "Crear seguimiento si no se cierra en el primer contacto."
        ]
      },
      {
        title: "Si no aparecen leads",
        steps: [
          "Revisar filtros/fechas.",
          "Probar en incógnito (extensiones).",
          "Confirmar que el origen (formulario) está operativo."
        ]
      }
    ]
  },

  whatsapp_web: {
    navLabel: "WhatsApp Web",
    title: "WhatsApp Web",
    heroTitle: "WhatsApp Web (Clientes)",
    description: "Canal rápido para comunicación con clientes. Evita mezclar cuentas personales y corporativas.",
    icon: "assets/icons/whatsapp.png",
    primaryUrl: "https://web.whatsapp.com/",
    primaryLabel: "Abrir WhatsApp Web",
    updated: "2026-02-26",
    badges: [{ label: "Atención cliente" }],
    blocks: [
      {
        title: "Indicaciones",
        bullets: [
          "Usar un perfil dedicado si aplica.",
          "No compartir datos sensibles si no es necesario.",
          "Si se desloguea, reescanea el QR."
        ]
      }
    ]
  },

  lendismart: {
    navLabel: "Lendismart",
    title: "Lendismart",
    heroTitle: "Lendismart (Financiación)",
    description: "Portal de financiación para operaciones y tramitaciones.",
    icon: "assets/icons/lendismart.png",
    primaryUrl: "https://hrmotor.lendismart.com/login",
    primaryLabel: "Abrir Lendismart",
    updated: "2026-02-26",
    badges: [{ label: "Financiación" }],
    blocks: [
      {
        title: "Checklist antes de tramitar",
        bullets: [
          "Datos del cliente completos y verificados.",
          "Documentación requerida lista.",
          "Condiciones y plazos confirmados."
        ]
      }
    ]
  },

  docusign: {
    navLabel: "DocuSign",
    title: "DocuSign",
    heroTitle: "DocuSign (Firmas)",
    description: "Envío y firma electrónica. Recomendación: entrar por la home para evitar redirecciones inestables.",
    icon: "assets/icons/docusign.png",
    primaryUrl: "https://account.docusign.com/",
    primaryLabel: "Abrir DocuSign",
    updated: "2026-02-26",
    badges: [{ label: "Documentación" }, { label: "Diario" }],
    blocks: [
      {
        title: "Flujo rápido",
        steps: [
          "Iniciar sesión.",
          "Seleccionar plantilla o documento.",
          "Añadir firmantes y campos.",
          "Enviar y revisar estado."
        ]
      },
      {
        title: "Si hay problemas de acceso",
        bullets: [
          "Probar en incógnito (cookies/SSO).",
          "Evitar enlaces OAuth largos (pueden caducar)."
        ]
      }
    ]
  },

  woffu: {
    navLabel: "Woffu",
    title: "Woffu",
    heroTitle: "Woffu (RRHH)",
    description: "Control horario, ausencias, vacaciones y solicitudes.",
    icon: "assets/icons/woffu.png",
    primaryUrl: "https://app.woffu.com/v2/login",
    primaryLabel: "Abrir Woffu",
    secondaryUrl: "https://woffu.com/es/",
    secondaryLabel: "Web informativa",
    updated: "2026-02-26",
    badges: [{ label: "RRHH" }],
    blocks: [
      {
        title: "Uso habitual",
        bullets: [
          "Fichaje/registro de jornada.",
          "Solicitudes de vacaciones/ausencias.",
          "Consulta del estado de solicitudes."
        ]
      }
    ]
  }
};

// -----------------------
// 3) Sidebar: Comunicados / Noticias
// -----------------------
window.COMUNICADOS = [
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

window.NOTICIAS = [
  {
    title: "Nuevo argumentario comercial (Q1)",
    date: "2026-02-24",
    text: "Disponible el argumentario para objeciones frecuentes. Abrir documento.",
    pdf: "assets/pdf/argumentario-q1.pdf"
  }
];
