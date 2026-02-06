import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const WorkflowNode = ({
  step,
  index,
  isActive,
  isCompleted,
  align,
  x,
  y,
}) => {
  const isLeft = align === 'left';

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        transform: 'translate3d(0,0,0)',
        width: 0,
        height: 0,
        overflow: 'visible',
      }}
    >
      {/* Connection Dot - theme color #d4575b */}
      <div
        className={`absolute w-5 h-5 md:w-6 md:h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 md:border-4 border-white/90 z-20 transition-all duration-500
          ${
            isActive || isCompleted
              ? 'scale-125'
              : 'bg-white/40'
          }
        `}
        style={
          isActive || isCompleted
            ? { backgroundColor: '#d4575b', boxShadow: '0 0 20px rgba(212,87,91,0.5)' }
            : {}
        }
      >
        {isActive && (
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-75"
            style={{ backgroundColor: '#d4575b' }}
          />
        )}
      </div>

      {/* Card Container - responsive width */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 flex items-center pointer-events-auto w-[240px] sm:w-[280px] md:w-[320px] max-w-[calc(100vw-2rem)]
          ${
            isLeft
              ? 'right-4 sm:right-8 flex-row-reverse text-right'
              : 'left-4 sm:left-8 flex-row text-left'
          }
        `}
      >
        {/* Card - theme border when active */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 20 : -20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`
            relative p-4 sm:p-5 rounded-2xl border backdrop-blur-md shadow-2xl transition-all duration-500 w-full
            group hover:-translate-y-1
            ${isActive ? 'border-[#d4575b]/50 bg-white/10 ring-1 ring-[#d4575b]/30' : 'border-white/20 bg-white/5 hover:border-white/30'}
          `}
        >
          {/* Header */}
          <div
            className={`flex items-center gap-3 mb-3 ${
              isLeft ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div
              className={`p-2 sm:p-2.5 rounded-xl border shadow-inner
                ${isActive ? 'bg-[#d4575b]/20 border-[#d4575b]/40 text-white' : 'bg-white/10 border-white/20 text-white/80'}
              `}
            >
              <step.icon size={20} className="sm:w-[22px] sm:h-[22px]" />
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className={`text-base sm:text-lg font-bold leading-tight text-white`}
              >
                {step.role}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#d4575b]">
                {step.title}
              </p>
            </div>

            {isCompleted && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="shrink-0 text-[#d4575b]"
              >
                <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />
              </motion.div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
            {step.description}
          </p>

          {/* Active Indicator - theme color */}
          {isActive && (
            <motion.div
              className="absolute bottom-0 h-1 rounded-full"
              style={{
                left: '16px',
                right: '16px',
                backgroundColor: '#d4575b',
                filter: 'blur(1px)',
              }}
              layoutId="activeGlow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};
