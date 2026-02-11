'use client';

import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const yesBtnRef = useRef<HTMLButtonElement | null>(null);
  const noBtnRef = useRef<HTMLButtonElement | null>(null);
  const buttonsRowRef = useRef<HTMLDivElement | null>(null);
  const fireworksCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [noText, setNoText] = useState('No way');
  const [mobileNoClicks, setMobileNoClicks] = useState(0);

  useEffect(() => {
    // Detect touch vs mouse
    let touch = false;
    try {
      if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
        touch = true;
      } else if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        touch = true;
      }
    } catch {
      touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
    setIsTouchDevice(touch);
  }, []);

  useEffect(() => {
    if (!isCelebrating) return;

    const card = cardRef.current;
    const canvas = fireworksCanvasRef.current;
    if (!card || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = card.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      hue: number;
    };

    type Firework = {
      particles: Particle[];
    };

    let fireworks: Firework[] = [];
    let fwAnimating = true;
    let fireworkSpawner: number | null = null;

    const launchFireworks = () => {
      if (!canvas || !ctx) return;
      const bursts = 6;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2.4;

      for (let i = 0; i < bursts; i++) {
        const angleOffset = Math.random() * Math.PI * 2;
        const hue = 330 + Math.random() * 40;
        const particles: Particle[] = [];
        const count = 40;

        for (let j = 0; j < count; j++) {
          const angle = (j / count) * Math.PI * 2 + angleOffset;
          const speed = 2.2 + Math.random() * 3.3;
          particles.push({
            x: centerX,
            y: centerY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 0,
            maxLife: 45 + Math.random() * 15,
            hue,
          });
        }
        fireworks.push({ particles });
      }
    };

    const updateFireworks = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((fw) => {
        fw.particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.02;
          p.life++;
          const alpha = 1 - p.life / p.maxLife;
          if (alpha <= 0) return;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${alpha})`;
          ctx.fill();
        });
        fw.particles = fw.particles.filter((p) => p.life < p.maxLife);
      });

      fireworks = fireworks.filter((fw) => fw.particles.length > 0);

      if (fwAnimating) {
        requestAnimationFrame(updateFireworks);
      }
    };

    // start
    launchFireworks();
    requestAnimationFrame(updateFireworks);
    fireworkSpawner = window.setInterval(launchFireworks, 900);

    // Floating hearts
    const hearts = ['💖', '💘', '❤️', '💕', '💝'];
    let heartSpawner: number | null = null;

    const spawnHeart = () => {
      if (!card) return;
      const span = document.createElement('span');
      span.className = 'floating-heart';
      span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      const cardWidth = card.clientWidth || 320;
      const offset = (cardWidth * 0.2) / 2 + Math.random() * (cardWidth * 0.6);
      span.style.left = `${offset}px`;
      span.style.fontSize = `${18 + Math.random() * 10}px`;
      card.appendChild(span);
      window.setTimeout(() => {
        if (span.parentNode) span.parentNode.removeChild(span);
      }, 3400);
    };

    spawnHeart();
    heartSpawner = window.setInterval(spawnHeart, 850);

    return () => {
      fwAnimating = false;
      if (fireworkSpawner) window.clearInterval(fireworkSpawner);
      if (heartSpawner) window.clearInterval(heartSpawner);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isCelebrating]);

  const dodgeNoButton = () => {
    const noBtn = noBtnRef.current;
    const buttonsRow = buttonsRowRef.current;
    if (!noBtn || !buttonsRow) return;

    const maxOffsetX = Math.max(20, buttonsRow.clientWidth / 2 - 40);
    const maxOffsetY = 55;
    const angle = Math.random() * Math.PI * 2;
    const radius = 20 + Math.random() * Math.min(maxOffsetX, maxOffsetY);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    noBtn.style.position = 'relative';
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    const yesBtn = yesBtnRef.current;
    if (yesBtn) {
      yesBtn.style.transform = 'translateY(-2px) scale(1.06)';
      yesBtn.style.boxShadow = '0 18px 36px rgba(55, 178, 77, 0.65)';
    }
  };

  const handleMobileNoTap = () => {
    const noBtn = noBtnRef.current;
    const yesBtn = yesBtnRef.current;
    if (!noBtn) return;

    const messages = ['Are you sure?', 'Really sure?', 'Think again...', 'Last chance 😏'];

    setMobileNoClicks((prev) => {
      const next = prev + 1;
      const msgIndex = Math.min(next - 1, messages.length - 1);
      setNoText(messages[msgIndex]);

      const shrinkStep = 0.18;
      const growStep = 0.12;
      const scaleNo = Math.max(0, 1 - next * shrinkStep);
      const opacityNo = Math.max(0, 1 - next * shrinkStep);

      noBtn.style.transform = `scale(${scaleNo})`;
      noBtn.style.opacity = String(opacityNo);

      if (yesBtn) {
        const yesScale = 1 + next * growStep;
        yesBtn.style.transform = `scale(${yesScale})`;
      }

      if (scaleNo <= 0.1) {
        noBtn.style.display = 'none';
        noBtn.disabled = true;
      }

      return next;
    });
  };

  const handleNoMouseEnter = () => {
    if (isTouchDevice) return;
    dodgeNoButton();
  };

  const handleNoMouseMove = () => {
    if (isTouchDevice) return;
    dodgeNoButton();
  };

  const handleNoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Detect touch at click time so the very first tap on mobile already shrinks the button
    const touchLike =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (touchLike || isTouchDevice) {
      handleMobileNoTap();
    } else {
      dodgeNoButton();
    }
  };

  const handleYesClick = () => {
    setIsCelebrating(true);
    const yesBtn = yesBtnRef.current;
    const noBtn = noBtnRef.current;
    if (yesBtn) {
      yesBtn.disabled = true;
      yesBtn.style.opacity = '0.8';
    }
    if (noBtn) {
      noBtn.disabled = true;
      noBtn.style.opacity = '0.4';
    }
  };

  return (
    <>
      <div className="sparkles" aria-hidden="true" />
      <main
        className={`card${isCelebrating ? ' celebrating' : ''}`}
        aria-live="polite"
        ref={cardRef}
      >
        <canvas id="fireworksCanvas" ref={fireworksCanvasRef} />
        <div className="hearts">💕💌💕</div>
        <h1 className="title">Will you be my Valentine?</h1>
        <p className="subtitle">
          Choose wisely... but just so you know, the correct answer is obvious. 💖
        </p>

        <div className="buttons-row" id="buttonsRow" ref={buttonsRowRef}>
          <button
            className="btn-yes"
            id="yesBtn"
            ref={yesBtnRef}
            type="button"
            onClick={handleYesClick}
          >
            Yes, of course!
          </button>
          <button
            className="btn-no"
            id="noBtn"
            ref={noBtnRef}
            type="button"
            onMouseEnter={handleNoMouseEnter}
            onMouseMove={handleNoMouseMove}
            onFocus={handleNoMouseEnter}
            onClick={handleNoClick}
          >
            {noText}
          </button>
        </div>
        <p className="hint">(Psst... the &quot;No&quot; button is very shy 👀)</p>

        <div className="gift-wrapper" />

        <p className="bottom-note" id="celebrationText">
          I knew it chakanyura 😂🤣❤️
        </p>

        <div className="celebration" id="celebration">
          {isCelebrating && (
            <img
              src="https://bzangygroink.co.uk/wp-content/uploads/2022/10/quby-dancing.gif"
              alt="Cute dancing gif"
              className="celebration-gif"
              loading="lazy"
            />
          )}
        </div>

        <p className="bottom-note base-note">Made with way too much sweetness ✨</p>
      </main>
    </>
  );
}

