"use client";

import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ParticlesBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // En dark mode: particules blanches, en light mode: particules sombres
  const particleColor = theme === "dark" ? "#ffffff" : "#1a1a1a";

  return (
    <Particles
      className="fixed inset-0 z-0"
      quantity={150}
      ease={50}
      color={particleColor}
      refresh={false}
    />
  );
}
