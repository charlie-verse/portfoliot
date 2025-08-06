"use client";

import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SkillButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientColor?: string;
  children: React.ReactNode;
}

export function SkillButton({
  children,
  className,
  gradientColor = "#262626",
}: SkillButtonProps) {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-100);
    mouseY.set(-100);
  }, [mouseX, mouseY]);

  useEffect(() => {
    mouseX.set(-100);
    mouseY.set(-100);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative inline-flex overflow-hidden rounded-full bg-black dark:bg-white border border-gray-300 dark:border-gray-200 text-white dark:text-black cursor-pointer transition-all duration-200 shadow-sm hover:shadow-lg",
        className,
      )}
    >
      <div className="relative z-10 px-5 py-2.5 text-xs font-semibold tracking-wide">
        {children}
      </div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(150px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 60%)
          `,
          opacity: 0.6,
        }}
      />
      {/* Gradient border effect */}
      <motion.div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 blur-sm" />
      </motion.div>
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
