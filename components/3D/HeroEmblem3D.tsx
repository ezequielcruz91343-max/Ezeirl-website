"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

function createEzeEmblem(): THREE.Group {
  const group = new THREE.Group();

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#d4af37"),
    metalness: 0.95,
    roughness: 0.05,
    envMapIntensity: 3,
  });
  const goldMidMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#c9a84c"),
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 2,
  });
  const silverMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#c0c0c0"),
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 2,
  });

  // Vertical spine
  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.4, 0.18), silverMaterial);
  spine.position.set(-0.45, 0, 0);
  group.add(spine);

  // Top bar
  const top = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.25, 0.18), goldMaterial);
  top.position.set(0.1, 0.58, 0);
  group.add(top);

  // Middle bar
  const mid = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.22, 0.18), goldMidMaterial);
  mid.position.set(0.0, 0, 0);
  group.add(mid);

  // Bottom bar
  const bot = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.25, 0.18), goldMaterial);
  bot.position.set(0.1, -0.58, 0);
  group.add(bot);

  return group;
}

function WebGLFallback() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-center w-full h-full"
    >
      <svg
        width="180"
        height="180"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="EZE Emblem"
        role="img"
      >
        <polygon
          points="50,4 92,27 92,73 50,96 8,73 8,27"
          stroke="#c9a84c"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        <rect x="26" y="26" width="7" height="48" fill="#e8c87a" />
        <rect x="26" y="26" width="36" height="9" fill="#e8c87a" />
        <rect x="26" y="45.5" width="28" height="9" fill="#c9a84c" />
        <rect x="26" y="65" width="36" height="9" fill="#e8c87a" />
      </svg>
    </motion.div>
  );
}

export default function HeroEmblem3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const testCanvas = document.createElement("canvas");
    const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!webglSupported || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene
    const scene = new THREE.Scene();
    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Lights
    const redLight = new THREE.PointLight(new THREE.Color("#cc0000"), 2, 8);
    redLight.position.set(0, 0, 2);
    scene.add(redLight);

    const sideLight = new THREE.PointLight(new THREE.Color("#ff1a1a"), 0.3, 10);
    sideLight.position.set(-3, 2, 1);
    scene.add(sideLight);

    const goldLight = new THREE.PointLight(new THREE.Color("#c9a84c"), 0.5, 8);
    goldLight.position.set(3, -2, 1);
    scene.add(goldLight);

    const ambient = new THREE.AmbientLight(new THREE.Color("#111111"), 0.8);
    scene.add(ambient);

    // Emblem group
    const emblem = createEzeEmblem();
    scene.add(emblem);

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let frameId: number;
    let targetRotX = 0;
    let targetRotY = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse follow
      targetRotY += (mouseRef.current.x * 0.3 - targetRotY) * 0.05;
      targetRotX += (-mouseRef.current.y * 0.15 - targetRotX) * 0.05;

      emblem.rotation.y = targetRotY;
      emblem.rotation.x = targetRotX;
      emblem.rotation.z = Math.sin(t * 0.3) * 0.05;
      emblem.position.y = Math.sin(t * 0.5) * 0.08;

      // Pulsing red light
      redLight.intensity = 2 + Math.sin(t * 0.8) * 0.6;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
      // Dispose all geometries and materials in the emblem group
      emblem.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else {
            (mesh.material as THREE.Material).dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [webglSupported, reducedMotion]);

  if (!webglSupported || reducedMotion) {
    return <WebGLFallback />;
  }

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="w-full h-full"
      style={{ background: "transparent", display: "block" }}
      aria-label="EZE IRL 3D emblem"
      role="img"
    />
  );
}
