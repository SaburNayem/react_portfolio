import { useEffect, useRef, useState } from "react";

export default function RopePull({ toggleLamp, waveToken }) {
  const [isWaving, setIsWaving] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [ropeState, setRopeState] = useState({ x: 0, y: 0 });
  const wrapRef = useRef(null);
  const animationRef = useRef(null);
  const physicsRef = useRef({
    isDragging: false,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0
  });

  useEffect(() => {
    if (!waveToken) return;
    setIsWaving(true);
    const timer = setTimeout(() => setIsWaving(false), 700);
    return () => clearTimeout(timer);
  }, [waveToken]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const updateFromPoint = (clientX, clientY) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + 2;
    const nextX = Math.max(-72, Math.min(72, clientX - anchorX));
    const nextY = Math.max(0, Math.min(140, clientY - anchorY));

    physicsRef.current.x = nextX;
    physicsRef.current.y = nextY;
    physicsRef.current.vx = 0;
    physicsRef.current.vy = 0;
    setRopeState({ x: nextX, y: nextY });
  };

  const animateBack = () => {
    stopAnimation();

    const tick = () => {
      const state = physicsRef.current;

      if (state.isDragging) {
        animationRef.current = null;
        return;
      }

      const spring = 0.12;
      const damping = 0.88;

      state.vx += -state.x * spring;
      state.vy += -state.y * spring;
      state.vx *= damping;
      state.vy *= damping;
      state.x += state.vx;
      state.y += state.vy;

      if (
        Math.abs(state.x) < 0.2 &&
        Math.abs(state.y) < 0.2 &&
        Math.abs(state.vx) < 0.2 &&
        Math.abs(state.vy) < 0.2
      ) {
        state.x = 0;
        state.y = 0;
        state.vx = 0;
        state.vy = 0;
        setRopeState({ x: 0, y: 0 });
        animationRef.current = null;
        return;
      }

      setRopeState({ x: state.x, y: state.y });
      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    stopAnimation();
    setIsDragging(true);
    physicsRef.current.isDragging = true;
    updateFromPoint(event.clientX, event.clientY);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!physicsRef.current.isDragging) return;
    updateFromPoint(event.clientX, event.clientY);
  };

  const handlePointerUp = (event) => {
    if (!physicsRef.current.isDragging) return;
    physicsRef.current.isDragging = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    animateBack();
    toggleLamp();
  };

  const handlePointerCancel = (event) => {
    if (!physicsRef.current.isDragging) return;
    physicsRef.current.isDragging = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    animateBack();
  };

  const ropeLength = 104 + ropeState.y;
  const ropeAngle = (Math.atan2(ropeState.x, ropeLength) * 180) / Math.PI;

  return (
    <button
      ref={wrapRef}
      type="button"
      className={`rope-wrap ${isDragging ? "pulling" : ""} ${isWaving ? "waving" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      aria-label="Pull rope to toggle lamp"
    >
      <span className="rope-anchor" />
      <span
        className="rope-body"
        style={{
          "--rope-angle": `${ropeAngle}deg`,
          "--pull-distance": `${ropeState.y}px`,
          "--pull-x": `${ropeState.x}px`
        }}
      >
        <span className="rope" style={{ height: `${ropeLength}px` }} />
        <span className="rope-tail" />
      </span>
    </button>
  );
}
