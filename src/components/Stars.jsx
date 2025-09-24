import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const Stars = ({ count = 80 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let dpr = window.devicePixelRatio || 1;
    let w = (canvas.width = window.innerWidth * dpr);
    let h = (canvas.height = window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const colors = ['#ffffff', '#ffd6f0', '#c7b2ff', '#b3fff0'];
    const stars = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.2,
      alpha: Math.random(),
      twinkle: Math.random() * 0.02 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let raf = null;

    function render() {
      ctx.clearRect(0, 0, w, h);
      for (let s of stars) {
        s.alpha += s.twinkle * (Math.random() > 0.5 ? 1 : -1);
        if (s.alpha < 0.1) s.alpha = 0.1;
        if (s.alpha > 1) s.alpha = 1;
        ctx.beginPath();
  // soft glow
  const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
  grad.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
  grad.addColorStop(0.2, s.color);
  grad.addColorStop(0.6, `rgba(0,0,0,0)`);
        ctx.fillStyle = grad;
        ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
        ctx.fill();
        // center bright pixel
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, s.alpha + 0.3)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    }

    render();

    const onResize = () => {
      dpr = window.devicePixelRatio || 1;
      w = (canvas.width = window.innerWidth * dpr);
      h = (canvas.height = window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 opacity-90"
      aria-hidden="true"
    />
  );
};

export default Stars;

Stars.propTypes = {
  count: PropTypes.number,
};
