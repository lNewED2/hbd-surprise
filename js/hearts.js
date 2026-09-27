// หัวใจ/ประกายลอยพื้นหลัง — ใช้เหมือนกันทุกหน้า ไม่ต้องแก้ไฟล์นี้
(function () {
  const wrap = document.createElement('div');
  wrap.className = 'hearts';
  document.body.prepend(wrap);

  const emojis = ['💗', '💕', '✨', '💖'];
  const count = window.innerWidth < 500 ? 12 : 18;

  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = emojis[i % emojis.length];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    h.style.animationDuration = (8 + Math.random() * 8) + 's';
    h.style.animationDelay = (Math.random() * 10) + 's';
    h.style.fontSize = (14 + Math.random() * 16) + 'px';
    wrap.appendChild(h);
  }
})();
