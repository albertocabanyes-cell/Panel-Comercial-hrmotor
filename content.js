// Iconos e imágenes: súbelos al repo y usa rutas relativas.
// Ejemplo: assets/icons/outlook.png  | assets/pdf/nota1.pdf | assets/news/foto1.jpg

const TOOLS = [
  { name: "Docusign", desc: "Correo corporativo", url: "https://account.docusign.com/oauth/auth?response_type=code&scope=all%20click.manage%20me_profile%20room_forms%20room_fields%20inproductcommunication_read%20data_explorer_signing_insights%20notary_read%20notary_write%20search_read%20search_write%20webforms_manage%20dtr%20valmod_manage%20spring_read%20spring_write%20signature&client_id=2CC56DC9-4BCD-4B55-8AB0-8BA60BAE1065&redirect_uri=https://apps.docusign.com/authenticate&state=%7b%22widgetId%22:%22%40ds/send%22%2c%22xsrfToken%22:%22Q/VzPmiiEf4v%2BDcNqBMx9xu3DmILZ9B%2B0yd/3vwabfPKg6jPSnIQNwndnKOiX8mBegx/q//m5rXIIKWDmk2H7TyiBxRQ6H29uMn2pyPHQXwUpAvE3ZcOJbCWDFSKvSvhPTASpQBu9hICgnlmlkYVjJsf%2BOlIxzg6lrpYZ5d1Sms%3D%22%2c%22redirectUri%22:%22/send/authentication?back%3D%252Fhome%22%2c%22authTxnId%22:%224e5ae9a4-f71f-48ad-accb-9bd6d595256b%22%7d", icon: "assets/icons/outlook.png" },
  { name: "Woffu", desc: "Telefonía / Centralita", url: "https://app.woffu.com/v2/login", icon: "assets/icons/3cx.png" },
  { name: "My Mutua", desc: "Documentación y recursos", url: "https://access.mutua.es/auth/realms/mymutua/protocol/openid-connect/auth?response_type=code&client_id=appseguros-front-canal-mediacion&scope=openid&state=kmbjXkQ7kJGvwZLQYHuo6lrnl1g7xDf-l2dCRIdr04M%3D&redirect_uri=https://www.mymutua.es/front-canal-mediacion/login/oauth2/code/sso&nonce=L0XFsW7iFaW1ZhX6dGXDl-tQm1y89v-5n7mKoEBgpv4", icon: "assets/icons/sharepoint.png" },
  { name: "Serviceform", desc: "CRM", url: "https://www.serviceform.es/", icon: "assets/icons/salesforce.png" }
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
