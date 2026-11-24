const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const out = path.join(__dirname, 'dist');
fs.mkdirSync(path.join(out, 'assets'), {recursive:true});
let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
for (const ext of ['css', 'js']) {
  const data = fs.readFileSync(path.join(__dirname, `assets/site.${ext}`));
  const hash = crypto.createHash('sha256').update(data).digest('hex').slice(0,12);
  const dest = `assets/site.${hash}.${ext}`;
  fs.writeFileSync(path.join(out, dest), data);
  html = html.replace(`assets/site.${ext}`, dest);
}
for (const file of ['talvex-app-icon-64.png','talvex-app-icon-180.png','favicon.svg','favicon-32x32.png','favicon.png','favicon.ico','apple-touch-icon.png','talvex-logo.png','talvex-logo-white.png','_headers']) {
  fs.copyFileSync(path.join(__dirname,file), path.join(out,file));
}
fs.writeFileSync(path.join(out,'index.html'),html);
console.log('Built dist/ with versioned CSS and JavaScript and only the required images.');
