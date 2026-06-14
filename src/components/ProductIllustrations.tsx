import React from "react";

// Pro Smartwatch SVG Component
export function WatchIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Shadow Drop */}
        <ellipse cx="150" cy="270" rx="75" ry="10" fill="black" opacity="0.12" />
        
        {/* Metal Casing Gradients */}
        <linearGradient id="metalCaseGrad" x1="50" y1="50" x2="250" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="30%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        
        <linearGradient id="screenGrad" x1="100" y1="100" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="40%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>

        <radialGradient id="cyanGlow" cx="150" cy="150" r="80" fx="150" fy="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
        </radialGradient>

        {/* Strap Gradients */}
        <linearGradient id="strapGrad" x1="150" y1="20" x2="150" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="25%" stopColor="#e2e8f0" />
          <stop offset="75%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Strap Bottom extension */}
      <path d="M 120,200 L 120,270 C 120,275 180,275 180,270 L 180,200 Z" fill="url(#strapGrad)" stroke="#cbd5e1" strokeWidth="1" />
      {/* Strap Lines at bottom */}
      <path d="M 125,220 L 175,220" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M 125,240 L 175,240" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Strap Top extension */}
      <path d="M 120,30 L 120,100 L 180,100 L 180,30 C 180,25 120,25 120,30 Z" fill="url(#strapGrad)" stroke="#cbd5e1" strokeWidth="1" />
      <path d="M 125,60 L 175,60" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <path d="M 125,80 L 175,80" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

      {/* Watch Casing Rim Shadow */}
      <circle cx="150" cy="150" r="88" fill="#1e293b" opacity="0.15" />

      {/* Bezel Steel Ring */}
      <circle cx="150" cy="150" r="84" fill="url(#metalCaseGrad)" stroke="#94a3b8" strokeWidth="1" />
      
      {/* Outer black bezel glass ring */}
      <circle cx="150" cy="150" r="76" fill="#090d16" />

      {/* Dial indicators (dots surrounding bezel) */}
      <circle cx="150" cy="82" r="2" fill="#94a3b8" />
      <circle cx="218" cy="150" r="2" fill="#94a3b8" />
      <circle cx="150" cy="218" r="2" fill="#94a3b8" />
      <circle cx="82" cy="150" r="2" fill="#94a3b8" />

      {/* Active Digital Smart Display */}
      <circle cx="150" cy="150" r="70" fill="url(#screenGrad)" />
      
      {/* Smart glowing cyan power burst */}
      <circle cx="150" cy="150" r="62" fill="url(#cyanGlow)" />

      {/* Clock indicators & Rings */}
      <circle cx="150" cy="150" r="50" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="20 10 5 10" opacity="0.3" />
      <circle cx="150" cy="150" r="58" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" />

      {/* Beautiful Dial details (Time Display) */}
      <text x="150" y="146" textAnchor="middle" fill="#06b6d4" fontFamily="monospace" fontSize="28" fontWeight="bold" letterSpacing="1" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">09:41</text>
      <text x="150" y="166" textAnchor="middle" fill="#22d3ee" fontFamily="sans-serif" fontSize="9" fontWeight="bold" letterSpacing="1.5" opacity="0.9">AM • 78 BPM</text>
      
      {/* Fitness ring representation */}
      <path d="M 115,182 A 40 40 0 1 1 185,182" stroke="#22c55e" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <text x="150" y="186" textAnchor="middle" fill="#4ade80" fontFamily="sans-serif" fontSize="8" fontWeight="bold">92% STEPS</text>

      {/* Highlight Flare across glass reflection */}
      <path d="M 90,95 C 110,80 180,80 210,105 C 190,95 120,95 90,95 Z" fill="#ffffff" opacity="0.12" />

      {/* Side Watch Crown buttons (Metal) */}
      <rect x="233" y="138" width="8" height="24" rx="2" fill="#64748b" stroke="#cbd5e1" strokeWidth="1" />
      <circle cx="237" cy="150" r="1.5" fill="#e2e8f0" />
    </svg>
  );
}

// SonicMaster Headphones SVG Component
export function HeadphonesIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Shadow Drop */}
        <ellipse cx="150" cy="275" rx="80" ry="12" fill="black" opacity="0.18" />
        
        {/* Headphone arch gradient */}
        <linearGradient id="headbandGrad" x1="50" y1="50" x2="250" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Cup Metallic Finish */}
        <linearGradient id="cupGrad" x1="40" y1="120" x2="100" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        
        <linearGradient id="cupGradRight" x1="200" y1="120" x2="260" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Headband Arch */}
      <path d="M 68,170 C 60,110 90,60 150,60 C 210,60 240,110 232,170" stroke="url(#headbandGrad)" strokeWidth="18" strokeLinecap="round" fill="none" />
      
      {/* Inner cushion loop under arch */}
      <path d="M 78,160 C 72,120 100,74 150,74 C 200,74 228,120 222,160" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.8" />

      {/* Metallic sliding arms extenders */}
      <path d="M 68,160 L 68,185" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
      <path d="M 232,160 L 232,185" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />

      {/* Dynamic Sound waves back-panel aura */}
      <circle cx="150" cy="180" r="95" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 20" opacity="0.15" />

      {/* LEFT EAR CUP SYSTEM */}
      <g transform="translate(0, 0)">
        {/* Soft Leather Cushion Ear pad background */}
        <rect x="42" y="165" width="36" height="74" rx="18" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
        
        {/* Aluminum outer shell container */}
        <rect x="54" y="160" width="22" height="84" rx="11" fill="url(#cupGrad)" stroke="#475569" strokeWidth="1" />
        
        {/* Acoustic ventilation rim lines */}
        <line x1="65" y1="180" x2="65" y2="224" stroke="#0f172a" strokeWidth="7" strokeLinecap="round" opacity="0.5" />
        <circle cx="65" cy="202" r="3" fill="#38bdf8" />
      </g>

      {/* RIGHT EAR CUP SYSTEM */}
      <g transform="translate(0, 0)">
        {/* Soft Leather Cushion Ear pad background */}
        <rect x="222" y="165" width="36" height="74" rx="18" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
        
        {/* Aluminum outer shell container */}
        <rect x="224" y="160" width="22" height="84" rx="11" fill="url(#cupGradRight)" stroke="#475569" strokeWidth="1" />
        
        {/* Acoustic ventilation rim lines */}
        <line x1="235" y1="180" x2="235" y2="224" stroke="#0f172a" strokeWidth="7" strokeLinecap="round" opacity="0.5" />
        <circle cx="235" cy="202" r="3" fill="#38bdf8" />
      </g>

      {/* Chrome support hinges & wiring indicators */}
      <path d="M 68,140 Q 60,155 60,170" stroke="#cbd5e1" strokeWidth="3" fill="none" />
      <path d="M 232,140 Q 240,155 240,170" stroke="#cbd5e1" strokeWidth="3" fill="none" />
    </svg>
  );
}

// Hyper-Dash Sneaker SVG Component (Crimson Red base silhouette)
export function SneakerIllustration({ className = "w-full h-full", colorSpecs }: { className?: string; colorSpecs?: any }) {
  const main = colorSpecs?.main || "#E74C3C";
  const accent = colorSpecs?.accent || "#ff6c5c";
  const accentDark = colorSpecs?.accentDark || "#a82012";

  return (
    <svg viewBox="0 0 350 250" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Shadow Ground Ellipse */}
        <ellipse cx="175" cy="216" rx="135" ry="10" fill="black" opacity="0.14" />
        
        {/* Main Body Gradient */}
        <linearGradient id="bodyGrad" x1="10" y1="20" x2="340" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={main} />
          <stop offset="100%" stopColor={accentDark} />
        </linearGradient>

        {/* Sole Gradient */}
        <linearGradient id="soleRefGrad" x1="20" y1="180" x2="330" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        <linearGradient id="brandGrad" x1="110" y1="120" x2="250" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Interactive Aero Mesh Main Upper Chassis */}
      <path 
        d="M 55,180 
           C 50,165 43,125 65,110 
           C 85,95 125,80 155,95 
           C 175,105 185,140 215,135 
           C 250,130 290,120 335,150 
           C 350,160 356,175 345,185 
           L 315,195 L 115,195 Z" 
        fill="url(#bodyGrad)" 
        stroke={accentDark} 
        strokeWidth="1.2"
      />

      {/* Racing Dynamic Trim Stripes (Aerodynamics wave representation) */}
      <path 
        d="M 115,110 Q 175,115 215,145 Q 255,175 315,185" 
        stroke={accent} 
        strokeWidth="4" 
        strokeLinecap="round" 
        opacity="0.9" 
      />
      <path 
        d="M 85,120 Q 145,125 185,155 Q 225,185 285,192" 
        stroke={accent} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        opacity="0.5" 
      />

      {/* Main Vector Brand Support Swoop Overlay */}
      <path 
        d="M 147,180 Q 207,130 257,140 Q 237,165 187,185 Z" 
        fill="url(#brandGrad)" 
        stroke={accent} 
        strokeWidth="1.5" 
        opacity="0.9"
      />

      {/* Laces and Eyelet systems */}
      <g opacity="0.95">
        <path d="M 158,103 L 208,138" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" opacity="0.1" />
        <path d="M 158,98 Q 178,118 198,133" fill="none" stroke="#f8fafc" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 173,94 Q 185,112 205,127" fill="none" stroke="#f8fafc" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 188,91 Q 195,105 213,118" fill="none" stroke="#f8fafc" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* Integrated Kinetic Air Pods (cyan) */}
      <rect x="70" y="196" width="35" height="11" rx="4.5" fill="#0ea5e9" stroke={accent} strokeWidth="1" opacity="0.65" />
      <circle cx="82" cy="201.5" r="2.5" fill="#ffffff" />
      <circle cx="91" cy="201.5" r="2.5" fill="#ffffff" />

      {/* Ergonomic Curved Midsole foam */}
      <path 
        d="M 45,182 
           C 43,198 55,212 85,214 
           C 135,217 260,215 310,206 
           C 340,201 353,194 347,184 
           L 320,193 L 50,193 Z" 
        fill="url(#soleRefGrad)" 
        stroke="#cbd5e1" 
        strokeWidth="1.2" 
      />
    </svg>
  );
}

// Retro-Shot Z1 Vintage Camera SVG Component
export function CameraIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Shadow Drop */}
        <ellipse cx="150" cy="255" rx="85" ry="11" fill="black" opacity="0.18" />
        
        {/* Silver Metal Finish */}
        <linearGradient id="silverPlate" x1="50" y1="50" x2="250" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="30%" stopColor="#f8fafc" />
          <stop offset="70%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Vintage Leather Grip */}
        <linearGradient id="leatherGrip" x1="50" y1="120" x2="250" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        {/* Lens Inner Reflection Gradient */}
        <radialGradient id="lensReflect" cx="150" cy="180" r="50" fx="130" fy="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#4f46e5" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#020617" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#030712" />
        </radialGradient>
      </defs>

      {/* Camera Body Core Shadow Block */}
      <rect x="42" y="105" width="216" height="135" rx="14" fill="#090d16" opacity="0.1" />

      {/* Main Lower Casing (Teak/Leather Grip panel) */}
      <rect x="46" y="115" width="208" height="120" rx="10" fill="url(#leatherGrip)" stroke="#1e293b" strokeWidth="1" />
      {/* Leather tactile texture stripes */}
      <line x1="46" y1="130" x2="254" y2="130" stroke="#020617" strokeWidth="1" strokeDasharray="1 1" />
      <line x1="46" y1="150" x2="254" y2="150" stroke="#020617" strokeWidth="1" strokeDasharray="1 1" />
      <line x1="46" y1="170" x2="254" y2="170" stroke="#020617" strokeWidth="1" strokeDasharray="1 1" />
      <line x1="46" y1="190" x2="254" y2="190" stroke="#020617" strokeWidth="1" strokeDasharray="1 1" />
      <line x1="46" y1="210" x2="254" y2="210" stroke="#020617" strokeWidth="1" strokeDasharray="1 1" />

      {/* Silver Top Plate Chassis */}
      <path d="M 46,120 L 46,95 C 46,90 51,85 56,85 L 244,85 C 249,85 254,90 254,95 L 254,120 Z" fill="url(#silverPlate)" stroke="#94a3b8" strokeWidth="1" />

      {/* Retro Red Logo Dot on top-left grip facia */}
      <circle cx="70" cy="110" r="5.5" fill="#dc2626" />

      {/* Rangefinder Optical Viewfinder Windows */}
      <rect x="195" y="93" width="28" height="15" rx="3" fill="#09070f" stroke="#64748b" strokeWidth="1.5" />
      <circle cx="209" cy="100.5" r="4.5" fill="#312e81" opacity="0.8" />
      
      <rect x="88" y="93" width="14" height="14" rx="2" fill="#020617" stroke="#64748b" strokeWidth="1" />
      <circle cx="95" cy="100" r="2.5" fill="#14b8a6" opacity="0.7" />

      {/* TOP DECK CONTROLS (Shutter release, film speed dials, hot shoe) */}
      {/* Film rewind knob left */}
      <rect x="62" y="74" width="20" height="11" rx="1.5" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      {/* Shutter Speed Dial center */}
      <rect x="180" y="76" width="24" height="9" rx="1.5" fill="#475569" stroke="#334155" strokeWidth="1" />
      <line x1="184" y1="76" x2="184" y2="85" stroke="#94a3b8" strokeWidth="1" />
      <line x1="192" y1="76" x2="192" y2="85" stroke="#94a3b8" strokeWidth="1" />
      <line x1="200" y1="76" x2="200" y2="85" stroke="#94a3b8" strokeWidth="1" />

      {/* Shutter Button trigger */}
      <rect x="218" y="70" width="16" height="15" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
      <circle cx="226" cy="70" r="5.5" fill="#94a3b8" />

      {/* Hot shoe mount center */}
      <rect x="135" y="79" width="30" height="6" fill="#475569" stroke="#334155" strokeWidth="1" />

      {/* LARGE RETRO CAMERA OBJ LENS (Multi-layered metal rings) */}
      <circle cx="150" cy="175" r="64" fill="url(#silverPlate)" stroke="#475569" strokeWidth="1.2" />
      <circle cx="150" cy="175" r="58" fill="#090d16" />
      <circle cx="150" cy="175" r="52" fill="url(#silverPlate)" stroke="#334155" strokeWidth="1" />

      {/* Aperture F-stop marked metal ring */}
      <circle cx="150" cy="175" r="46" fill="#1e293b" />
      <text x="150" y="141" textAnchor="middle" fill="#94a3b8" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold">f=35mm 1:1.4</text>
      
      {/* Dynamic Lens Deep Glare Glass optics */}
      <circle cx="150" cy="175" r="39" fill="url(#lensReflect)" stroke="#090d16" strokeWidth="1.5" />

      {/* Internal lens cyan glint curve */}
      <path d="M 124,158 A 32 32 0 0 1 176,158" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <circle cx="132" cy="164" r="3" fill="#38bdf8" opacity="0.6" className="drop-shadow-[0_0_4px_#38bdf8]" />
    </svg>
  );
}

// Master wrapper to get accurate illustration component based on image keyword
export function ProductImageRender({ name, colorSpecs, className }: { name: string; colorSpecs?: any; className?: string }) {
  const norm = name.toLowerCase();
  if (norm.includes("watch") || norm.includes("smartwatch")) {
    return <WatchIllustration className={className} />;
  }
  if (norm.includes("headphones") || norm.includes("sonicmaster")) {
    return <HeadphonesIllustration className={className} />;
  }
  if (norm.includes("camera") || norm.includes("retro-shot")) {
    return <CameraIllustration className={className} />;
  }
  // Otherwise default to the sneaker with color spec styling!
  return <SneakerIllustration className={className} colorSpecs={colorSpecs} />;
}
