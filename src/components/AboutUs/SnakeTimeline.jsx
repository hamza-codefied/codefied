import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { WorkflowNode } from './WorkflowNode';

export const SnakeTimeline = ({ steps }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Responsive Layout Configuration
  const [isMobile, setIsMobile] = useState(false);

  // Measure width: ResizeObserver catches when container gets layout (e.g. on mobile when in second row)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const w = el.offsetWidth;
      // Fallback so timeline always renders (e.g. when container has 0 width before layout)
      const effectiveWidth = w > 0 ? w : Math.min(400, typeof window !== 'undefined' ? window.innerWidth - 32 : 360);
      setWidth(effectiveWidth);
      setIsMobile(effectiveWidth < 768);
    };

    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    window.addEventListener('resize', updateWidth);
    // Re-measure after layout in case initial measure was 0 (e.g. mobile second row)
    const t = setTimeout(updateWidth, 100);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateWidth);
      clearTimeout(t);
    };
  }, []);

  // Theme color (site accent - matches site #d4575b)
  const THEME_PRIMARY = '#d4575b';

  // Layout Constants - smaller on mobile for better fit
  const ROW_HEIGHT = isMobile ? 190 : 200;
  const PADDING_TOP = isMobile ? 40 : 80;

  // Generate Coordinates for each step
  const getStepPosition = (index) => {
    if (isMobile) {
      // Mobile: single vertical line, all nodes in one column (linear vertical)
      const lineX = width * 0.10; // line on the left
      return {
        x: lineX,
        y: index * ROW_HEIGHT + PADDING_TOP,
        row: index,
        col: 0,
        align: 'right', // all cards to the right of the line = one column
      };
    } else {
      // Desktop: 2-Column Snake (Boustrophedon)
      const row = Math.floor(index / 2);
      const isRightSide = index % 4 === 1 || index % 4 === 2;

      const xLeft = width * 0.3;
      const xRight = width * 0.7;

      return {
        x: isRightSide ? xRight : xLeft,
        y: row * ROW_HEIGHT + PADDING_TOP,
        row,
        col: isRightSide ? 1 : 0,
        align: isRightSide ? 'right' : 'left',
      };
    }
  };

  const positions = steps.map((_, i) => getStepPosition(i));
  const totalHeight =
    (positions[positions.length - 1]?.y || 0) + ROW_HEIGHT;

  // Smooth Path Generator
  const constructSmoothPath = () => {
    if (!positions.length) return '';
    const R = 30;
    let d = `M ${positions[0].x} ${positions[0].y}`;

    for (let i = 1; i < positions.length - 1; i++) {
      const prev = positions[i - 1];
      const curr = positions[i];
      const next = positions[i + 1];

      const v1x = curr.x - prev.x;
      const v1y = curr.y - prev.y;
      const v2x = next.x - curr.x;
      const v2y = next.y - curr.y;

      const l1 = Math.sqrt(v1x * v1x + v1y * v1y);
      const l2 = Math.sqrt(v2x * v2x + v2y * v2y);

      const radius = Math.min(R, l1 / 2, l2 / 2);

      const startX = curr.x - (v1x / l1) * radius;
      const startY = curr.y - (v1y / l1) * radius;

      const endX = curr.x + (v2x / l2) * radius;
      const endY = curr.y + (v2y / l2) * radius;

      d += `L ${startX} ${startY} `;
      d += `Q ${curr.x} ${curr.y} ${endX} ${endY} `;
    }

    const last = positions[positions.length - 1];
    d += `L ${last.x} ${last.y}`;

    return d;
  };

  // Simulation State
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex(
        (prev) => (prev + 1) % (steps.length + 2)
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  if (!width) {
    return <div ref={containerRef} className="w-full min-h-[400px]" />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto overflow-visible"
      style={{ minHeight: totalHeight, height: totalHeight }}
    >
      {/* Background Grid - subtle, theme-aware */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Snake Path */}
      <div className="absolute inset-0 w-full h-full z-0">
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={THEME_PRIMARY} stopOpacity="0.3" />
              <stop offset="100%" stopColor={THEME_PRIMARY} stopOpacity="0.6" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite
                in="SourceGraphic"
                in2="blur"
                operator="over"
              />
            </filter>
          </defs>

          {/* Base Path */}
          <path
            d={constructSmoothPath()}
            fill="none"
            stroke="url(#line-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          />

          {/* Animated Path */}
          <motion.path
            d={constructSmoothPath()}
            fill="none"
            stroke={THEME_PRIMARY}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0.4, 0.4, 0],
              pathOffset: [0, 0, 1, 1],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ filter: 'url(#glow)' }}
          />
        </svg>
      </div>

      {/* Nodes */}
      {steps.map((step, idx) => {
        const pos = positions[idx];
        return (
          <WorkflowNode
            key={step.id}
            index={idx}
            step={step}
            x={pos.x}
            y={pos.y}
            align={pos.align}
            isActive={idx === activeStepIndex}
            isCompleted={idx < activeStepIndex}
          />
        );
      })}
    </div>
  );
};
