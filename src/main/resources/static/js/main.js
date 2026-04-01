const WA = 'https://wa.me/595900000000';

const flows = {
  inicio: {
    msg: '¡Hola! 👋 Soy el asistente de <strong>MPStudio</strong>. ¿En qué puedo ayudarte hoy?',
    opts: [
      { label: '💰 Precios y planes', next: 'precio' },
      { label: '🖥️ Ver ejemplos de webs', next: 'ejemplos' },
      { label: '⏱ Tiempos de entrega', next: 'tiempo' },
      { label: '🌐 ¿Qué incluye?', next: 'incluye' },
      { label: '📞 Hablar con una persona', next: 'contacto' },
    ]
  },
  precio: {
    msg: 'Nuestros precios en guaraníes son:\n\n🟢 <strong>Landing Page</strong>: desde Gs. 900.000\n🟡 <strong>Sitio Corporativo</strong>: desde Gs. 1.500.000\n🔵 <strong>Tienda Online</strong>: desde Gs. 1.800.000\n\n¿Querés saber más sobre alguno?',
    opts: [
      { label: '🟢 ¿Qué es una Landing Page?', next: 'landing' },
      { label: '🟡 ¿Qué es un Sitio Corporativo?', next: 'corporativo' },
      { label: '🔵 ¿Qué es una Tienda Online?', next: 'tienda' },
      { label: '💳 ¿Cómo se paga?', next: 'pago' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  landing: {
    msg: 'Una <strong>Landing Page</strong> es una página única, bien diseñada, que muestra quién sos, qué ofrecés y cómo contactarte.\n\nEs ideal para:\n✅ Emprendedores que recién empiezan\n✅ Negocios locales (peluquerías, restaurantes, clínicas)\n✅ Profesionales independientes\n\nPrecio: desde <strong>Gs. 900.000</strong> pago único.',
    opts: [
      { label: '✅ Quiero esta opción', next: 'presupuesto' },
      { label: '🔄 Ver otras opciones', next: 'precio' },
      { label: '❓ ¿Qué incluye?', next: 'incluye' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  corporativo: {
    msg: 'Un <strong>Sitio Corporativo</strong> es una web completa con varias páginas: inicio, servicios, sobre nosotros, galería y contacto.\n\nEs ideal para:\n✅ Empresas y pymes\n✅ Profesionales y consultores\n✅ Negocios que quieren imagen más completa\n\nPrecio: desde <strong>Gs. 1.500.000</strong> pago único.',
    opts: [
      { label: '✅ Quiero esta opción', next: 'presupuesto' },
      { label: '🔄 Ver otras opciones', next: 'precio' },
      { label: '❓ ¿Qué incluye?', next: 'incluye' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  tienda: {
    msg: 'Una <strong>Tienda Online</strong> te permite vender tus productos las 24 horas del día con pagos integrados.\n\nIncluye:\n✅ Catálogo de productos\n✅ Carrito de compras\n✅ Integración con Pagopar y Bancard\n✅ Gestión de pedidos y stock\n\nPrecio: desde <strong>Gs. 1.800.000</strong> pago único.',
    opts: [
      { label: '✅ Quiero esta opción', next: 'presupuesto' },
      { label: '🔄 Ver otras opciones', next: 'precio' },
      { label: '❓ ¿Qué incluye?', next: 'incluye' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  pago: {
    msg: '💳 <strong>¿Cómo se paga?</strong>\n\nEl pago se divide en dos partes:\n\n1️⃣ <strong>50% al inicio</strong> del proyecto\n2️⃣ <strong>50% al entregar</strong> la web terminada\n\nAceptamos:\n✅ Transferencia bancaria\n✅ Pagopar\n✅ Efectivo',
    opts: [
      { label: '✅ Me interesa, quiero empezar', next: 'presupuesto' },
      { label: '🔄 Ver planes y precios', next: 'precio' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  ejemplos: {
    msg: '🖥️ Hacemos webs para distintos rubros. ¿Cuál se parece más a tu negocio?',
    opts: [
      { label: '🍽️ Restaurante / Café', next: 'ej_rest' },
      { label: '👗 Tienda de ropa', next: 'ej_ropa' },
      { label: '💪 Gimnasio / Fitness', next: 'ej_gym' },
      { label: '🏠 Inmobiliaria', next: 'ej_inmo' },
      { label: '✂️ Peluquería / Estética', next: 'ej_pelu' },
      { label: '🦷 Clínica / Odontología', next: 'ej_clinica' },
    ]
  },
  ej_rest: {
    msg: '🍽️ Para <strong>restaurantes y cafés</strong> hacemos webs con:\n\n✅ Menú digital con fotos\n✅ Botón de reservas online\n✅ Galería de platos\n✅ Ubicación y horarios\n✅ Botón de WhatsApp\n\nPrecio desde <strong>Gs. 900.000</strong>.',
    opts: [
      { label: '✅ Quiero una web así', next: 'presupuesto' },
      { label: '🔄 Ver otros rubros', next: 'ejemplos' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  ej_ropa: {
    msg: '👗 Para <strong>tiendas de ropa</strong> hacemos webs con:\n\n✅ Catálogo de productos con fotos\n✅ Carrito de compras\n✅ Integración con Pagopar\n✅ Filtros por talla y color\n✅ Gestión de stock\n\nPrecio desde <strong>Gs. 1.800.000</strong>.',
    opts: [
      { label: '✅ Quiero una web así', next: 'presupuesto' },
      { label: '🔄 Ver otros rubros', next: 'ejemplos' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  ej_gym: {
    msg: '💪 Para <strong>gimnasios y centros fitness</strong> hacemos webs con:\n\n✅ Planes y membresías\n✅ Horarios de clases\n✅ Galería del espacio\n✅ Perfil de instructores\n✅ Formulario de inscripción\n\nPrecio desde <strong>Gs. 900.000</strong>.',
    opts: [
      { label: '✅ Quiero una web así', next: 'presupuesto' },
      { label: '🔄 Ver otros rubros', next: 'ejemplos' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  ej_inmo: {
    msg: '🏠 Para <strong>inmobiliarias</strong> hacemos webs con:\n\n✅ Listado de propiedades\n✅ Filtros por zona y precio\n✅ Galería de fotos por propiedad\n✅ Mapa de ubicaciones\n✅ Formulario de consulta\n\nPrecio desde <strong>Gs. 1.500.000</strong>.',
    opts: [
      { label: '✅ Quiero una web así', next: 'presupuesto' },
      { label: '🔄 Ver otros rubros', next: 'ejemplos' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  ej_pelu: {
    msg: '✂️ Para <strong>peluquerías y estéticas</strong> hacemos webs con:\n\n✅ Servicios y precios\n✅ Galería de trabajos\n✅ Sistema de turnos online\n✅ Ubicación y horarios\n✅ Redes sociales integradas\n\nPrecio desde <strong>Gs. 900.000</strong>.',
    opts: [
      { label: '✅ Quiero una web así', next: 'presupuesto' },
      { label: '🔄 Ver otros rubros', next: 'ejemplos' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  ej_clinica: {
    msg: '🦷 Para <strong>clínicas y consultorios</strong> hacemos webs con:\n\n✅ Servicios y tratamientos\n✅ Turnos online\n✅ Perfil del equipo médico\n✅ Ubicación y horarios\n✅ Diseño que transmite confianza\n\nPrecio desde <strong>Gs. 1.200.000</strong>.',
    opts: [
      { label: '✅ Quiero una web así', next: 'presupuesto' },
      { label: '🔄 Ver otros rubros', next: 'ejemplos' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  tiempo: {
    msg: '⏱️ <strong>¿Cuánto tarda?</strong>\n\nEntregamos tu web en <strong>7 días hábiles</strong> desde que aprobás el diseño.\n\nEl proceso es:\n📋 Día 1-2: Diseño y aprobación\n💻 Día 3-6: Desarrollo completo\n✅ Día 7: Entrega + revisión',
    opts: [
      { label: '❓ ¿Qué incluye la entrega?', next: 'incluye' },
      { label: '💰 ¿Cuánto cuesta?', next: 'precio' },
      { label: '✅ Quiero empezar', next: 'presupuesto' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  incluye: {
    msg: '📦 <strong>¿Qué incluye?</strong>\n\nTodos nuestros planes incluyen:\n\n✅ Diseño 100% personalizado\n✅ Hosting por 1 año\n✅ Dominio (.com.py o .com)\n✅ Certificado SSL\n✅ Adaptado a celular y PC\n✅ 15 días de ajustes gratis\n✅ Soporte por WhatsApp',
    opts: [
      { label: '➕ ¿Hay servicios adicionales?', next: 'extras' },
      { label: '💰 Ver precios', next: 'precio' },
      { label: '✅ Quiero empezar', next: 'presupuesto' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  extras: {
    msg: '➕ <strong>Servicios adicionales:</strong>\n\n🎨 Logo profesional: <strong>Gs. 300.000</strong>\n🔧 Mantenimiento mensual: <strong>Gs. 150.000/mes</strong>\n📧 Correo corporativo: <strong>Gs. 80.000/mes</strong>\n🔍 SEO básico (Google): <strong>Gs. 250.000</strong>',
    opts: [
      { label: '✅ Quiero un presupuesto completo', next: 'presupuesto' },
      { label: '🔄 Ver planes principales', next: 'precio' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  presupuesto: {
    msg: '¡Genial! 🎉 Para prepararte un presupuesto personalizado, lo más rápido es que nos escribas por WhatsApp.\n\nNuestro equipo te responde en <strong>menos de 2 horas</strong> y la consulta es <strong>completamente gratis</strong>.',
    opts: [
      { label: '💬 Abrir WhatsApp ahora', next: 'wa', url: WA },
      { label: '📋 Completar formulario', next: 'form', url: 'contacto.html' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  },
  contacto: {
    msg: '📞 <strong>Hablemos directamente</strong>\n\nPodés contactarnos por:\n\n💬 <strong>WhatsApp</strong>: respuesta inmediata\n✉️ <strong>Email</strong>: hola@mpstudio.com.py\n\nHorario:\nLunes a Viernes: 8:00 - 18:00\nSábados: 9:00 - 13:00',
    opts: [
      { label: '💬 Escribir por WhatsApp', next: 'wa', url: WA },
      { label: '📋 Completar formulario', next: 'form', url: 'contacto.html' },
      { label: '↩ Volver al inicio', next: 'inicio' },
    ]
  }
};

function toggleChat() {
  const win = document.getElementById('chatWindow');
  win.classList.toggle('open');
}

function addMsg(content, type) {
  const m = document.getElementById('chatMessages');
  const d = document.createElement('div');
  d.className = 'chat-msg ' + type;
  d.innerHTML = `<div class="chat-msg-content">${content.replace(/\n/g, '<br>')}</div>`;
  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
}

function addOptions(opts) {
  const m = document.getElementById('chatMessages');
  const wrap = document.createElement('div');
  wrap.className = 'chat-suggestions';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.label;
    btn.onclick = () => {
      if (opt.url) { window.open(opt.url, '_blank'); return; }
      handleStep(opt.label, opt.next);
    };
    wrap.appendChild(btn);
  });
  m.appendChild(wrap);
  m.scrollTop = m.scrollHeight;
}

function showTyping() {
  const m = document.getElementById('chatMessages');
  const d = document.createElement('div');
  d.className = 'chat-msg bot';
  d.id = 'typing';
  d.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById('typing');
  if (t) t.remove();
}

function handleStep(userText, key) {
  if (userText) addMsg(userText, 'user');
  showTyping();
  setTimeout(() => {
    hideTyping();
    const flow = flows[key];
    if (!flow) return;
    addMsg(flow.msg, 'bot');
    if (flow.opts) addOptions(flow.opts);
  }, 800);
}

function send() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  const lower = text.toLowerCase();
  let key = null;
  if (lower.match(/precio|costo|cuanto|cuesta|vale|gs|guarani/)) key = 'precio';
  else if (lower.match(/tiempo|tarda|demora|dias|rapido|cuando/)) key = 'tiempo';
  else if (lower.match(/incluye|incluido|hosting|dominio|ssl/)) key = 'incluye';
  else if (lower.match(/ejemplo|portafolio|demo|muestra|trabajo/)) key = 'ejemplos';
  else if (lower.match(/contacto|whatsapp|hablar|persona|asesor/)) key = 'contacto';
  else if (lower.match(/tienda|online|ecommerce|vender/)) key = 'tienda';
  else if (lower.match(/landing/)) key = 'landing';
  else if (lower.match(/corporativo|empresa|pyme/)) key = 'corporativo';
  else if (lower.match(/pago|como pago|transferencia|pagopar/)) key = 'pago';

  if (key) {
    handleStep(text, key);
  } else {
    addMsg(text, 'user');
    showTyping();
    setTimeout(() => {
      hideTyping();
      addMsg('No entendí bien tu consulta 😅, pero puedo ayudarte con esto:', 'bot');
      addOptions(flows.inicio.opts);
    }, 800);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  handleStep(null, 'inicio');
});