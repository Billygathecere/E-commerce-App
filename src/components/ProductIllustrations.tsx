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

// AirSync Pods (Earbuds) SVG Component
export function EarbudsIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <ellipse cx="150" cy="260" rx="70" ry="10" fill="black" opacity="0.15" />
        <linearGradient id="caseBodyGrad" x1="80" y1="80" x2="220" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="lidGrad" x1="100" y1="110" x2="200" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Charging Case Base Body */}
      <rect x="85" y="110" width="130" height="110" rx="40" fill="url(#caseBodyGrad)" stroke="#334155" strokeWidth="2.5" />
      
      {/* Glossy highlight reflect */}
      <path d="M 95,140 C 95,125 105,115 125,115 L 175,115 C 195,115 205,125 205,140 C 185,130 115,130 95,140 Z" fill="#ffffff" opacity="0.08" />
      
      {/* Case Seam/Opening line */}
      <path d="M 85,135 Q 150,140 215,135" stroke="#020617" strokeWidth="3" fill="none" />
      <path d="M 85,135 Q 150,140 215,135" stroke="#475569" strokeWidth="1" fill="none" opacity="0.6" />

      {/* Case Inner Tray (Open look visualization) */}
      <rect x="110" y="118" width="80" height="4" rx="2" fill="#090d16" />

      {/* Three Power Status LED Dots (As seen in reference image!) */}
      <circle cx="136" cy="180" r="2" fill="#22c55e" className="animate-pulse" />
      <circle cx="150" cy="180" r="2" fill="#22c55e" />
      <circle cx="164" cy="180" r="2" fill="#22c55e" className="animate-pulse" />

      {/* Left Earbud Pod Silhouette inside/above */}
      <g transform="translate(-1, 0)">
        {/* Soft stem */}
        <path d="M 125,115 C 122,95 122,85 125,80" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
        {/* Rounded head */}
        <circle cx="120" cy="78" r="11" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        <circle cx="123" cy="78" r="5" fill="#1e293b" opacity="0.9" />
      </g>

      {/* Right Earbud Pod Silhouette inside/above */}
      <g transform="translate(1, 0)">
        {/* Soft stem */}
        <path d="M 175,115 C 178,95 178,85 175,80" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
        {/* Rounded head */}
        <circle cx="180" cy="78" r="11" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        <circle cx="177" cy="78" r="5" fill="#1e293b" opacity="0.9" />
      </g>
    </svg>
  );
}

// NovaPad X10 (Tablet) SVG Component
export function TabletIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Flat floor shadow */}
        <ellipse cx="150" cy="270" rx="95" ry="8" fill="black" opacity="0.2" />
        
        {/* Abstract Colorful Fluid Wallpaper Gradients */}
        <linearGradient id="waveGrad1" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="35%" stopColor="#4f46e5" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>

        <linearGradient id="standGrad" x1="100" y1="210" x2="200" y2="270" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Folio origami keyboard stand path */}
      <path d="M 80,180 L 60,265 L 240,265 L 220,180 Z" fill="url(#standGrad)" stroke="#1e293b" strokeWidth="2" />
      <path d="M 60,265 L 240,265" stroke="#64748b" strokeWidth="2" />

      {/* Beveled Outer Slate Border */}
      <rect x="75" y="45" width="150" height="210" rx="14" fill="#0f172a" stroke="#475569" strokeWidth="2" transform="rotate(-15 150 150)" />
      
      {/* Display Screen */}
      <rect x="80" y="50" width="140" height="200" rx="10" fill="url(#waveGrad1)" transform="rotate(-15 150 150)" />

      {/* Colorful abstract background curves on the screen to match screenshot perfectly! */}
      <path d="M 90,200 C 120,130 140,110 210,135" stroke="#f97316" strokeWidth="8" strokeLinecap="round" transform="rotate(-15 150 150)" opacity="0.9" />
      <path d="M 85,220 C 130,160 160,130 215,160" stroke="#facc15" strokeWidth="12" strokeLinecap="round" transform="rotate(-15 150 150)" opacity="0.8" />
      <path d="M 110,140 C 140,80 180,90 205,110" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" transform="rotate(-15 150 150)" opacity="0.85" />
      <path d="M 120,240 Q 150,210 200,230" stroke="#dc2626" strokeWidth="16" transform="rotate(-15 150 150)" opacity="0.75" />

      {/* Screen Gloss Reflection line */}
      <path d="M 100,55 L 200,155" stroke="#ffffff" strokeWidth="12" opacity="0.08" transform="rotate(-15 150 150)" />
      
      {/* Front camera dot */}
      <circle cx="150" cy="55" r="1.5" fill="#334155" transform="rotate(-15 150 150)" />
    </svg>
  );
}

// ClickMaster (Mechanical Keyboard) SVG Component
export function KeyboardIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <ellipse cx="150" cy="235" rx="110" ry="12" fill="black" opacity="0.18" />
        <radialGradient id="tealGlow" cx="150" cy="160" r="90" fx="150" fy="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d9488" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tech glow behind keys */}
      <rect x="40" y="100" width="220" height="110" rx="12" fill="url(#tealGlow)" />

      {/* Sleek Aluminum Keyboard Base */}
      <rect x="44" y="110" width="212" height="95" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2.5" />
      <rect x="48" y="114" width="204" height="87" rx="6" fill="#0f172a" />

      {/* Mechanical Key matrix rows (Teal Glowing keycaps representation!) */}
      <g transform="translate(54, 120)" fill="#115e59" stroke="#0f766e" strokeWidth="1">
        {/* Row 1 */}
        <rect x="0" y="0" width="10" height="10" rx="1.5" />
        <rect x="14" y="0" width="10" height="10" rx="1.5" />
        <rect x="28" y="0" width="10" height="10" rx="1.5" />
        <rect x="42" y="0" width="10" height="10" rx="1.5" />
        <rect x="56" y="0" width="10" height="10" rx="1.5" fill="#14b8a6" />
        <rect x="70" y="0" width="10" height="10" rx="1.5" fill="#14b8a6" />
        <rect x="84" y="0" width="10" height="10" rx="1.5" />
        <rect x="98" y="0" width="10" height="10" rx="1.5" />
        <rect x="112" y="0" width="10" height="10" rx="1.5" />
        <rect x="126" y="0" width="10" height="10" rx="1.5" />
        <rect x="140" y="0" width="10" height="10" rx="1.5" />
        <rect x="154" y="0" width="10" height="10" rx="1.5" />
        <rect x="168" y="0" width="24" height="10" rx="1.5" fill="#0d9488" />

        {/* Row 2 */}
        <rect x="0" y="14" width="16" height="10" rx="1.5" fill="#0d9488" />
        <rect x="20" y="14" width="10" height="10" rx="1.5" />
        <rect x="34" y="14" width="10" height="10" rx="1.5" />
        <rect x="48" y="14" width="10" height="10" rx="1.5" />
        <rect x="62" y="14" width="10" height="10" rx="1.5" />
        <rect x="76" y="14" width="10" height="10" rx="1.5" />
        <rect x="90" y="14" width="10" height="10" rx="1.5" />
        <rect x="104" y="14" width="10" height="10" rx="1.5" />
        <rect x="118" y="14" width="10" height="10" rx="1.5" />
        <rect x="132" y="14" width="10" height="10" rx="1.5" />
        <rect x="146" y="14" width="10" height="10" rx="1.5" />
        <rect x="160" y="14" width="10" height="10" rx="1.5" />
        <rect x="174" y="14" width="18" height="10" rx="1.5" fill="#0d9488" />

        {/* Row 3 */}
        <rect x="0" y="28" width="20" height="10" rx="1.5" fill="#0d9488" />
        <rect x="24" y="28" width="10" height="10" rx="1.5" />
        <rect x="38" y="28" width="10" height="10" rx="1.5" />
        <rect x="52" y="28" width="10" height="10" rx="1.5" />
        <rect x="66" y="28" width="10" height="10" rx="1.5" fill="#14b8a6" />
        <rect x="80" y="28" width="10" height="10" rx="1.5" fill="#14b8a6" />
        <rect x="94" y="28" width="10" height="10" rx="1.5" />
        <rect x="108" y="28" width="10" height="10" rx="1.5" />
        <rect x="122" y="28" width="10" height="10" rx="1.5" />
        <rect x="136" y="28" width="10" height="10" rx="1.5" />
        <rect x="150" y="28" width="10" height="10" rx="1.5" />
        <rect x="164" y="28" width="28" height="10" rx="1.5" fill="#0d9488" />

        {/* Row 4 (Spacebar row) */}
        <rect x="0" y="42" width="24" height="10" rx="1.5" fill="#0d9488" />
        <rect x="28" y="42" width="10" height="10" rx="1.5" />
        <rect x="42" y="42" width="10" height="10" rx="1.5" />
        <rect x="56" y="42" width="80" height="10" rx="1.5" fill="#14b8a6" /> {/* Spacebar */}
        <rect x="140" y="42" width="10" height="10" rx="1.5" />
        <rect x="154" y="42" width="10" height="10" rx="1.5" />
        <rect x="168" y="42" width="24" height="10" rx="1.5" fill="#0d9488" />
      </g>

      {/* Small Glowing active indicator LEDs */}
      <circle cx="236" cy="120" r="1.5" fill="#14b8a6" />
      <circle cx="244" cy="120" r="1.5" fill="#94a3b8" />
    </svg>
  );
}

// VisionCore 27" (Computer Display Monitor) SVG Component
export function MonitorIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Footprint shadow */}
        <ellipse cx="150" cy="260" rx="60" ry="7" fill="black" opacity="0.22" />
        
        {/* Silver metal finish for stand */}
        <linearGradient id="silverMetal" x1="120" y1="200" x2="180" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="60%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        <linearGradient id="monitorGlow" x1="50" y1="50" x2="250" y2="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#0b2430" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>

      {/* Solid metal angled desktop stand */}
      <path d="M 135,185 L 142,250 L 158,250 L 165,185 Z" fill="url(#silverMetal)" stroke="#94a3b8" strokeWidth="0.5" />
      <path d="M 115,250 C 115,245 185,245 185,250 L 175,258 L 125,258 Z" fill="url(#silverMetal)" />

      {/* Outer monitor screen bezel (Sleek minimalist black frame) */}
      <rect x="40" y="55" width="220" height="135" rx="6" fill="#090d16" stroke="#475569" strokeWidth="1.5" />
      
      {/* Matte Inside Display Screen */}
      <rect x="44" y="59" width="212" height="121" rx="2" fill="url(#monitorGlow)" />

      {/* Analytics Dashboard Grid Visualization (Matches screenshot's dashboard UI!) */}
      {/* Dashboard Top bar */}
      <rect x="48" y="63" width="204" height="8" rx="1.5" fill="#1e293b" />
      <circle cx="53" cy="67" r="1.5" fill="#f43f5e" />
      <circle cx="58" cy="67" r="1.5" fill="#eab308" />
      <circle cx="63" cy="67" r="1.5" fill="#22c55e" />
      <text x="74" y="69.5" fill="#64748b" fontFamily="sans-serif" fontSize="4.5" fontWeight="bold">ShopSwift Server Analytics</text>

      {/* Row of three dashboard visual widgets */}
      {/* Widget 1: Bar chart */}
      <rect x="48" y="75" width="62" height="46" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
      <text x="52" y="82" fill="#94a3b8" fontFamily="sans-serif" fontSize="4" fontWeight="bold">DAILY SALES</text>
      <rect x="54" y="94" width="4" height="20" fill="#0ea5e9" rx="0.5" />
      <rect x="62" y="88" width="4" height="26" fill="#0ea5e9" rx="0.5" />
      <rect x="70" y="100" width="4" height="14" fill="#38bdf8" rx="0.5" />
      <rect x="78" y="84" width="4" height="30" fill="#22c55e" rx="0.5" />
      <rect x="86" y="90" width="4" height="24" fill="#10b981" rx="0.5" />
      <rect x="94" y="98" width="4" height="16" fill="#14b8a6" rx="0.5" />
      <line x1="52" y1="116" x2="106" y2="116" stroke="#334155" strokeWidth="0.5" />

      {/* Widget 2: Line wave trend area */}
      <rect x="114" y="75" width="138" height="46" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
      <text x="118" y="82" fill="#94a3b8" fontFamily="sans-serif" fontSize="4" fontWeight="bold">CONVERSION TRENDS (UTC LOCALTIME)</text>
      {/* Wave chart path */}
      <path d="M 118,110 Q 130,90 145,100 T 175,85 T 205,95 T 240,80 L 246,114 L 118,114 Z" fill="#14b8a6" opacity="0.15" />
      <path d="M 118,110 Q 130,90 145,100 T 175,85 T 205,95 T 240,80" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="175" cy="85" r="2" fill="#ffffff" stroke="#14b8a6" strokeWidth="0.8" />
      <circle cx="205" cy="95" r="1.5" fill="#38bdf8" />
      <circle cx="145" cy="100" r="1.5" fill="#38bdf8" />

      {/* Widget Rows Bottom */}
      <rect x="48" y="125" width="204" height="50" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
      <text x="52" y="132" fill="#94a3b8" fontFamily="sans-serif" fontSize="4.5" fontWeight="bold">SECURE TRANSACTION METRIC LOGS</text>
      <line x1="52" y1="138" x2="246" y2="138" stroke="#1e293b" strokeWidth="0.5" />
      {/* Code logs simulator representation */}
      <text x="52" y="146" fill="#4ade80" fontFamily="monospace" fontSize="4" opacity="0.85">{`> GET /api/transactions 200 OK - 15.4ms`}</text>
      <text x="52" y="154" fill="#4ade80" fontFamily="monospace" fontSize="4" opacity="0.85">{`> Webhook received: Daraja ResultCode 0 'Success'`}</text>
      <text x="52" y="162" fill="#64748b" fontFamily="monospace" fontSize="4" opacity="0.6">{`> Database MongoDB write complete. Saved standard JSON`}</text>
      <text x="52" y="170" fill="#64748b" fontFamily="monospace" fontSize="4" opacity="0.6">{`> Service layer heartbeat active. Port :3000 online`}</text>

      {/* Subtle Screen reflection highlights */}
      <path d="M 50,60 L 180,180" stroke="#ffffff" strokeWidth="15" opacity="0.04" />
      
      {/* Bottom aluminum bezel strip decoration */}
      <rect x="40" y="177" width="220" height="13" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
      <circle cx="150" cy="183.5" r="2.5" fill="#475569" /> {/* Elegant Center branding dot representing logo */}
    </svg>
  );
}

// Master wrapper to get accurate illustration component based on image keyword
export function ProductImageRender({ name, colorSpecs, className, imageUrl }: { name: string; colorSpecs?: any; className?: string; imageUrl?: string }) {
  if (imageUrl && imageUrl.trim()) {
    return (
      <img 
        src={imageUrl} 
        alt={name} 
        referrerPolicy="no-referrer" 
        className="w-full h-full max-w-full max-h-full object-contain rounded-xl"
        id={`product-custom-img-${name.replace(/\s+/g, '-').toLowerCase()}`}
      />
    );
  }
  const norm = name.toLowerCase();
  
  if (norm.includes("earbuds") || norm.includes("airsync")) {
    return <EarbudsIllustration className={className} />;
  }
  if (norm.includes("tablet") || norm.includes("novapad") || norm.includes("pad")) {
    return <TabletIllustration className={className} />;
  }
  if (norm.includes("keyboard") || norm.includes("clickmaster")) {
    return <KeyboardIllustration className={className} />;
  }
  if (norm.includes("display") || norm.includes("monitor") || norm.includes("visioncore") || norm.includes("screen")) {
    return <MonitorIllustration className={className} />;
  }
  if (norm.includes("watch") || norm.includes("smartwatch") || norm.includes("coretime")) {
    return <WatchIllustration className={className} />;
  }
  if (norm.includes("headphones") || norm.includes("sonicmaster") || norm.includes("swiftsound")) {
    return <HeadphonesIllustration className={className} />;
  }
  if (norm.includes("camera") || norm.includes("retro-shot")) {
    return <CameraIllustration className={className} />;
  }
  // Otherwise default to the sneaker with color spec styling!
  return <SneakerIllustration className={className} colorSpecs={colorSpecs} />;
}

