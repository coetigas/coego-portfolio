import React from 'react';

interface CoegoLogoProps {
  variant?: 'full' | 'horizontal' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  showUnderline?: boolean;
}

export const CoegoLogo: React.FC<CoegoLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showUnderline = true,
}) => {
  // Sizing mappings
  const iconDimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 44, height: 44 },
    lg: { width: 64, height: 64 },
    xl: { width: 96, height: 96 },
    hero: { width: 68, height: 68 },
  }[size];

  const textSizeClass = {
    sm: 'text-lg tracking-wider',
    md: 'text-2xl tracking-wider',
    lg: 'text-4xl tracking-widest',
    xl: 'text-5xl tracking-widest',
    hero: 'text-4xl sm:text-5xl lg:text-6xl tracking-wider',
  }[size];

  const underlineWidth = {
    sm: 'w-8 h-[2px]',
    md: 'w-12 h-[2.5px]',
    lg: 'w-20 h-[3px]',
    xl: 'w-28 h-[4px]',
    hero: 'w-24 sm:w-32 h-[3.5px]',
  }[size];

  // The stylized electric-blue COEGO monogram icon as an SVG
  const IconSvg = (
    <svg
      width={iconDimensions.width}
      height={iconDimensions.height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-[0_0_20px_rgba(0,160,255,0.6)]"
      aria-label="COEGO Icone"
    >
      <defs>
        {/* Main Electric Blue & Cyan Gradient */}
        <linearGradient id="coegoBlueGrad" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8FF" />
          <stop offset="45%" stopColor="#0080FF" />
          <stop offset="100%" stopColor="#0047BA" />
        </linearGradient>

        {/* Top-left ribbon shadow / fold */}
        <linearGradient id="coegoFoldGrad" x1="40" y1="40" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0050B3" />
          <stop offset="100%" stopColor="#00C8FF" />
        </linearGradient>

        {/* Diagonal central bar gradient */}
        <linearGradient id="coegoBarGrad" x1="90" y1="90" x2="150" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0070F3" />
          <stop offset="100%" stopColor="#00D2FF" />
        </linearGradient>

        {/* Soft glowing filter */}
        <filter id="coegoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Sweeping 'C' Arch with Sharp Angled Fins */}
      <path
        d="M165 42 L115 42 C68 42 32 75 32 110 C32 145 68 178 115 178 L168 178 L142 148 L112 148 C82 148 62 130 62 110 C62 90 82 72 112 72 L142 72 L165 42 Z"
        fill="url(#coegoBlueGrad)"
      />

      {/* 3D Curved Fold Detail on Upper-Left */}
      <path
        d="M115 42 C82 42 52 58 40 85 C48 70 70 58 100 58 L145 58 L165 42 L115 42 Z"
        fill="url(#coegoFoldGrad)"
        opacity="0.9"
      />

      {/* Central Sharp Aerodynamic Chevron Bar */}
      <polygon
        points="90,140 120,95 152,95 122,140"
        fill="url(#coegoBarGrad)"
      />
    </svg>
  );

  // Wordmark with White "CO", Blue Tech "E", White "GO"
  const Wordmark = (
    <div className="flex flex-col items-center">
      <div className={`font-black font-sans flex items-center leading-none ${textSizeClass}`}>
        <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">CO</span>
        <span className="text-[#0084FF] drop-shadow-[0_0_15px_rgba(0,140,255,0.8)] mx-[1px]">E</span>
        <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">GO</span>
      </div>

      {showUnderline && (
        <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#0080FF] to-transparent shadow-[0_0_8px_rgba(0,140,255,0.9)] mt-1.5" />
      )}
    </div>
  );

  // Variant 1: Full (Icon centered on top + Wordmark below + Glowing blue underline)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        {IconSvg}
        {Wordmark}
      </div>
    );
  }

  // Variant 2: Icon Only
  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{IconSvg}</div>;
  }

  // Variant 3: Horizontal Lockup (Icon + Wordmark side by side)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {IconSvg}
      <div className="flex flex-col items-start">
        <div className={`font-black font-sans flex items-center leading-none ${textSizeClass}`}>
          <span className="text-white">CO</span>
          <span className="text-[#0084FF] drop-shadow-[0_0_12px_rgba(0,140,255,0.8)] mx-[1px]">E</span>
          <span className="text-white">GO</span>
        </div>
        {showUnderline && (
          <div className={`${underlineWidth} rounded-full bg-gradient-to-r from-[#00C8FF] via-[#0080FF] to-transparent shadow-[0_0_8px_rgba(0,140,255,0.8)] mt-1.5`} />
        )}
      </div>
    </div>
  );
};
