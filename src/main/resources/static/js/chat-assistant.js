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
  else if (lower.match(/pago|transferencia|pagopar/)) key = 'pago';

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