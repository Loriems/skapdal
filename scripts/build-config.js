// Genera assets/js/config.js a partir de variables de entorno.
// CHAT_ENABLED=true activa el chat del bot; cualquier otro valor (o sin definir) lo deja desactivado.
const fs = require("fs");
const path = require("path");

const chatEnabled = /^(1|true|yes|si|sí)$/i.test(process.env.CHAT_ENABLED || "");
const config = { chatEnabled };

const out = path.join(__dirname, "..", "assets", "js", "config.js");
fs.writeFileSync(out, `window.SKAPDAL_CONFIG = ${JSON.stringify(config, null, 2)};\n`);
console.log(`config.js generado: chat ${chatEnabled ? "activado" : "desactivado"}`);
