import { useEffect } from 'react';

// Easter egg: Konami Code → retro terminal takeover
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export const useEasterEggs = () => {
  useEffect(() => {
    let sequence = [];

    const handleKey = (e) => {
      sequence.push(e.key);
      if (sequence.length > KONAMI.length) sequence.shift();

      if (sequence.join(',') === KONAMI.join(',')) {
        sequence = [];
        triggerKonami();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
};

const triggerKonami = () => {
  const overlay = document.createElement('div');
  overlay.id = 'konami-overlay';
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: #000; display: flex; align-items: center; justify-content: center;
    font-family: 'JetBrains Mono', monospace; color: #22c55e;
    flex-direction: column; gap: 8px; padding: 40px;
    animation: fadeIn 0.3s ease;
  `;

  const lines = [
    '> Konami Code activated...',
    '> Accessing restricted files...',
    '> sudo zeel --reveal-secrets',
    '',
    '> SECRET UNLOCKED 🎉',
    '',
    '> $ cat /dev/secrets/zeel.txt',
    '',
    '  Name: Zeel',
    '  Class: Full Stack Developer',
    '  Weakness: Interesting problems',
    '  Superpower: Turning coffee into code',
    '  Status: Available for hire ✅',
    '  Favourite bug: The one I just fixed',
    '',
    '> Press [ESC] to close this terminal.',
  ];

  const pre = document.createElement('pre');
  pre.style.cssText = 'font-size: clamp(12px, 2vw, 16px); line-height: 1.8; max-width: 600px; width: 100%;';
  overlay.appendChild(pre);
  document.body.appendChild(overlay);

  // Type each line
  let i = 0;
  const typeLine = () => {
    if (i < lines.length) {
      pre.textContent += lines[i] + '\n';
      i++;
      setTimeout(typeLine, i === 0 ? 0 : 80);
    }
  };
  typeLine();

  const close = (e) => {
    if (e.key === 'Escape' || e.type === 'click') {
      overlay.style.animation = 'none';
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.3s ease';
      setTimeout(() => overlay.remove(), 300);
      window.removeEventListener('keydown', close);
      overlay.removeEventListener('click', close);
    }
  };
  window.addEventListener('keydown', close);
  overlay.addEventListener('click', close);
};
