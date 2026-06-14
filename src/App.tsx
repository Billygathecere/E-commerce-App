import React, { useState } from "react";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Smartphone, 
  CheckCircle, 
  Lock, 
  ChevronRight, 
  ArrowLeft, 
  Search, 
  BookOpen, 
  Code, 
  ShieldCheck, 
  Database, 
  Flame, 
  Cpu, 
  Check, 
  Users, 
  RefreshCw,
  Info,
  HelpCircle,
  Eye,
  Settings,
  Sparkles,
  Award
} from "lucide-react";

// Interactive High-Fidelity Sneaker vector illustration with configurable cosmetic states
function HighFidelityShoeIllustration({ mainColor, accentColor, accentDark, isActionView }) {
  if (isActionView) {
    // Action / lifestyle shot mockup vector (athlete running representation)
    return (
      <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-2xl transition-all duration-700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="groundGrad" x1="0" y1="280" x2="400" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0"/>
            <stop offset="50%" stopColor="#334155" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="legGrad" x1="160" y1="0" x2="220" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e293b"/>
            <stop offset="100%" stopColor="#475569"/>
          </linearGradient>
          <linearGradient id="actionShoeGrad" x1="180" y1="120" x2="310" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={mainColor}/>
            <stop offset="100%" stopColor={accentDark}/>
          </linearGradient>
          <radialGradient id="sunSpot" cx="200" cy="160" r="140" fx="200" fy="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#020617" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Ambient background rays */}
        <circle cx="200" cy="160" r="140" fill="url(#sunSpot)" />
        <path d="M 120,270 L 280,270" stroke="url(#groundGrad)" strokeWidth="6" strokeLinecap="round" />

        {/* Dynamic Running Athlete Leg (Inclinatory Angle) */}
        <path d="M 152,10 L 195,115 C 205,125 215,135 210,145 L 255,178 L 220,185 L 182,142 L 140,25 Z" fill="url(#legGrad)" opacity="0.85"/>
        {/* Sock band */}
        <path d="M 210,145 L 223,155 L 214,162 L 202,152 Z" fill="#94a3b8" />

        {/* Floating sneaker graphic at running lift-off angle */}
        <g transform="translate(45, 12) rotate(18, 200, 160)">
          {/* Main Body */}
          <path 
            d="M 100,180 C 95,160 88,110 110,95 C 130,80 170,75 200,90 C 220,100 230,135 260,130 C 295,125 335,115 380,145 C 395,155 401,170 390,180 L 360,190 L 160,190 Z" 
            fill="url(#actionShoeGrad)" 
            stroke={accentDark} 
            strokeWidth="1"
          />
          {/* Accents & Stripes */}
          <path d="M 160,105 Q 220,110 260,140 Q 300,170 360,180" stroke={accentColor} strokeWidth="3" opacity="0.8" />
          <path d="M 130,115 Q 190,120 230,150" stroke={accentColor} strokeWidth="1.5" opacity="0.5" />
          <path d="M 190,175 Q 250,125 300,135 Q 280,160 230,180 Z" fill={accentColor} opacity="0.4" />
          
          {/* Responsive White Sole */}
          <path 
            d="M 90,182 C 88,198 100,207 130,209 C 180,212 305,210 355,201 C 385,196 398,189 392,179 L 365,188 L 95,188 Z" 
            fill="#ffffff" 
            stroke="#cbd5e1" 
            strokeWidth="1" 
          />
          {/* Lacing lines */}
          <path d="M 205,90 Q 225,110 245,125" fill="none" stroke="#f8fafc" strokeWidth="2.5" />
          <path d="M 220,87 Q 232,105 252,120" fill="none" stroke="#f8fafc" strokeWidth="2.5" />
        </g>
      </svg>
    );
  }

  // Classic side studio view (Default state display)
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full drop-shadow-3xl transition-all duration-700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Dynamic drop shadow matching footwear profiles */}
        <ellipse cx="200" cy="214" rx="145" ry="11" fill="black" opacity="0.35" />
        
        {/* Dynamic gradients configurable by properties */}
        <linearGradient id="bodyGradColor" x1="0" y1="0" x2="350" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor={accentDark} />
        </linearGradient>
        
        <linearGradient id="soleGradColor" x1="50" y1="180" x2="350" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        <linearGradient id="brandAccentGrad" x1="120" y1="120" x2="280" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={accentColor} />
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Modern Aero Knit Upper Chassis */}
      <path 
        d="M 60,180 
           C 55,165 48,125 70,110 
           C 90,95 130,80 160,95 
           C 180,105 190,140 220,135 
           C 255,130 295,120 340,150 
           C 355,160 361,175 350,185 
           L 320,195 L 120,195 Z" 
        fill="url(#bodyGradColor)" 
        stroke={accentDark} 
        strokeWidth="1.2"
      />

      {/* Aerodynamics sports stripes matching performance aesthetics */}
      <path 
        d="M 120,110 Q 180,115 220,145 Q 260,175 320,185" 
        stroke={accentColor} 
        strokeWidth="4" 
        strokeLinecap="round" 
        opacity="0.85" 
      />
      <path 
        d="M 90,120 Q 150,125 190,155 Q 230,185 290,192" 
        stroke={accentColor} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        opacity="0.5" 
      />

      {/* Structural Logo Panel overlay */}
      <path 
        d="M 152,180 Q 212,130 262,140 Q 242,165 192,185 Z" 
        fill="url(#brandAccentGrad)" 
        stroke={accentColor} 
        strokeWidth="1.5" 
        opacity="0.9"
      />
      <path 
        d="M 177,183 Q 222,145 252,152 Z" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="1" 
        opacity="0.5"
      />

      {/* Sneaker Tongue structure */}
      <path 
        d="M 140,90 Q 155,75 170,85 Q 165,110 160,120" 
        fill={accentDark} 
        stroke={mainColor} 
        strokeWidth="1.2"
      />

      {/* Back Heel Support Cup */}
      <path 
        d="M 60,180 C 58,162 64,135 80,129 C 85,145 81,180 60,180 Z" 
        fill="#1e293b" 
        opacity="0.35"
      />

      {/* High-Fidelity Knit Mesh details */}
      <path d="M 285,150 Q 305,158 325,170" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M 275,158 Q 295,166 315,178" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

      {/* Sports Lacing Eyelet systems & laces */}
      <g opacity="0.95">
        <path d="M 158,103 L 208,138" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" opacity="0.15" />
        <path d="M 163,98 Q 183,118 203,133" fill="none" stroke="#f8fafc" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 178,94 Q 190,112 210,127" fill="none" stroke="#f8fafc" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 193,91 Q 200,105 218,118" fill="none" stroke="#f8fafc" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      
      {/* Front Foot Protective Wrap overlay */}
      <path 
        d="M 320,195 C 335,190 355,185 350,175 C 342,170 330,182 315,188 Z" 
        fill="#1e293b" 
        opacity="0.2"
      />

      {/* Soles Integrated Kinetic Air cushioning pads */}
      <rect x="75" y="196" width="35" height="11" rx="4.5" fill="#38bdf8" stroke={accentColor} strokeWidth="1.2" opacity="0.7" />
      <circle cx="89" cy="201.5" r="2.5" fill="#ffffff" />
      <circle cx="98" cy="201.5" r="2.5" fill="#ffffff" />

      {/* Ergonomic Curved Sports Midsole */}
      <path 
        d="M 50,182 
           C 48,198 60,212 90,214 
           C 140,217 265,215 315,206 
           C 345,201 358,194 352,184 
           L 325,193 L 55,193 Z" 
        fill="url(#soleGradColor)" 
        stroke="#cbd5e1" 
        strokeWidth="1.2" 
      />
      
      {/* Dynamic Traction Sole treads */}
      <path d="M 70,214 L 80,210 M 110,215 L 120,211 M 150,215 L 160,211 M 210,215 L 220,211 M 270,213 L 280,209" stroke="#cbd5e1" strokeWidth="2" opacity="0.8" />
    </svg>
  );
}

export default function App() {
  // --- STATE LAYER (Crucial for React Learning!) ---
  const [selectedColor, setSelectedColor] = useState("Crimson Red");
  const [selectedSize, setSelectedSize] = useState(9); // Default recommended size 9
  const [activeThumbnail, setActiveThumbnail] = useState(0); // Index tracking of visual carousel
  const [cartCount, setCartCount] = useState(0); // Cart badge counter
  const [isFavorited, setIsFavorited] = useState(false); // Heart toggle state
  const [feedbackToast, setFeedbackToast] = useState(""); // Notifications on screen
  
  // Custom Reviews Dynamic Registry
  const [userReviews, setUserReviews] = useState([
    {
      id: 1,
      author: "James Kamau",
      date: "2 days ago",
      rating: 5,
      comment: "Incredibly fast delivery and the shoes feel amazing. The M-Pesa integration made the checkout so smooth!",
      tag: "Verified Buyer"
    },
    {
      id: 2,
      author: "Sarah W.",
      date: "1 week ago",
      rating: 5,
      comment: "Perfect fit. I used the size guide and it was spot on. Highly recommend for daily training.",
      tag: "Verified Buyer"
    },
    {
      id: 3,
      author: "Ondiek M.",
      date: "2 weeks ago",
      rating: 5,
      comment: "The build quality is professional-grade. Best sneakers I've bought this year.",
      tag: "Verified Buyer"
    }
  ]);

  // Review Form state variables
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  // Safaricom Lipa Na M-Pesa Simulator Flow states
  const [mpesaPaymentState, setMpesaPaymentState] = useState("idle"); // idle, entering_pin, processing, success
  const mpesaShortCode = "174379"; // Paybill number for Lipa Na M-Pesa sandbox
  const [phoneNumber, setPhoneNumber] = useState("0712345678");
  const [simPin, setSimPin] = useState("");
  const [simTerminalLogs, setSimTerminalLogs] = useState<string[]>([]);

  // Right-Panel Academy Tracker Tab
  const [academyTab, setAcademyTab] = useState("welcome"); // welcome, states_explained, mpesa_handshake, review_component

  // Custom Color Spec Definitions - matches styling & visualization colors
  const catalogStyleSpecs = {
    "Crimson Red": {
      name: "Crimson Red",
      hex: "#E74C3C", // Standard HEX color code
      main: "#E74C3C",
      accent: "#ff6c5c",
      accentDark: "#a82012",
      class: "bg-[#E74C3C]"
    },
    "Lime Green": {
      name: "Lime Green",
      hex: "#8FE31C",
      main: "#8FE31C",
      accent: "#adff3d",
      accentDark: "#5c9c04",
      class: "bg-[#8FE31C]"
    },
    "Obsidian Navy": {
      name: "Obsidian Navy",
      hex: "#1E2D3D",
      main: "#1c2e42",
      accent: "#3a5675",
      accentDark: "#0c1521",
      class: "bg-[#1E2D3D]"
    },
    "Pearl White": {
      name: "Pearl White",
      hex: "#FAFAFC",
      main: "#f8fafc",
      accent: "#94a3b8",
      accentDark: "#475569",
      class: "bg-white border border-slate-300"
    }
  };

  const activeSpecs = catalogStyleSpecs[selectedColor] || catalogStyleSpecs["Crimson Red"];

  // Carousel Thumbnails
  const phoneThumbnails = [
    { title: "Red Studio View", isShoe: true, matchColor: "Crimson Red" },
    { title: "Lime Reflex View", isShoe: true, matchColor: "Lime Green" },
    { title: "Pearl White Angle", isShoe: true, matchColor: "Pearl White" },
    { title: "Lifestyle Closeup", isShoe: false, label: "+2" }
  ];

  // Action: Simple Cart Trigger
  const triggerAddToCart = () => {
    setCartCount(prev => prev + 1);
    triggerAlertToast(`Added 1 x SwiftFlow Trainer (${selectedColor}, UK Size ${selectedSize}) to Cart!`);
  };

  // Helper helper to show user action status toasts
  const triggerAlertToast = (message) => {
    setFeedbackToast(message);
    setTimeout(() => {
      setFeedbackToast("");
    }, 4000);
  };

  // Submit verified review handler
  const handleReviewSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) {
      alert("Please enter both Name and Comment to proceed.");
      return;
    }
    const submittedNode = {
      id: userReviews.length + 1,
      author: reviewName,
      date: "Just now",
      rating: reviewRating,
      comment: reviewText,
      tag: "Verified-Local"
    };
    setUserReviews([submittedNode, ...userReviews]);
    setReviewName("");
    setReviewText("");
    setShowReviewForm(false);
    triggerAlertToast("Verified Review posted successfully and added to dynamic state!");
  };

  // Simulated Lipa Na M-Pesa STK Push initiator
  const initiateSTKPushSimulation = () => {
    setMpesaPaymentState("entering_pin");
    setSimPin("");
    setSimTerminalLogs(["Initializing premium M-Pesa sandbox handshakes..."]);
  };

  // Submit SIM PIN trigger simulated Daraja hook callbacks
  const completeMpesaPaymentSim = () => {
    if (simPin.length < 4) {
      alert("SIM prompt requires a 4-digit mobile validation PIN.");
      return;
    }

    setMpesaPaymentState("processing");

    // Micro-delay simulation representation for log rendering & education
    const simSteps = [
      { msg: "🔑 Client secure handshake: Loading Daraja Credentials...", delay: 250 },
      { msg: "🔑 Generating Base64 token using Consumer Secret & Client Keys...", delay: 800 },
      { msg: "🎫 OAuth Bearer Token obtained: Token active for 3600 seconds.", delay: 1400 },
      { msg: "📡 Dispatched STK Push envelope to Safaricom network gateway: https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", delay: 2000 },
      { msg: `📱 Request status: Dispatched Lipa Na M-Pesa Prompt to +254${phoneNumber.substring(1)}...`, delay: 2600 },
      { msg: "🎯 Subscriber entered 4-digit SIM PIN inside custom dialogue frame.", delay: 3200 },
      { msg: "⚡ ASYNC WEBHOOK RECEIVED: Payload Callback Response 'ResultCode: 0' (Payment Successful)", delay: 3800 },
      { msg: "🔔 Safaricom Receipt payload successfully verified with SSL handshake.", delay: 4400 },
      { msg: "💾 Connected local MongoDB schema collection. Order 'WS_2026_PREM' marked as PAID.", delay: 5100 },
      { msg: "🛍️ State updated! Rendering green mobile receipt screen...", delay: 5600 }
    ];

    simSteps.forEach(step => {
      setTimeout(() => {
        setSimTerminalLogs(p => [...p, step.msg]);
        if (step.msg.includes("Rendering green mobile receipt")) {
          setMpesaPaymentState("success");
          triggerAlertToast("Lipa Na M-Pesa transaction confirmed successfully!");
        }
      }, step.delay);
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col justify-between selection:bg-indigo-600 selection:text-white">
      
      {/* Dynamic Screen Action Toaster notification */}
      {feedbackToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-bounce bg-emerald-500 text-slate-950 border border-emerald-300 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full flex items-center space-x-2.5 shadow-2xl">
          <CheckCircle size={16} />
          <span>{feedbackToast}</span>
        </div>
      )}

      {/* Academy Main Header Bar */}
      <header className="border-b border-slate-200 bg-white shadow-xs px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xl tracking-wider">
            SS
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-1.5">
                ShopSwift
                <span className="text-2xs bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full px-2.5 py-0.5 font-normal">
                  Interactive UI & Payment Academy
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-500">Learn React state management and Safaricom Daraja integration step-by-step.</p>
          </div>
        </div>

        {/* Global Cart status indicator for state tracking */}
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline-flex items-center text-xs text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 animate-ping" />
            Sandbox Environment Active
          </span>

          <div 
            onClick={() => triggerAddToCart()}
            className="h-10 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center space-x-2.5 cursor-pointer select-none transition-all duration-150 active:scale-95"
          >
            <ShoppingCart size={16} />
            <span className="text-xs font-bold">Shopping Cart</span>
            <span className="bg-indigo-600 text-white font-extrabold text-[11px] h-5 w-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </header>

      {/* Interactive Play Space */}
      <main className="flex-grow max-w-[1450px] w-full mx-auto px-4 py-8 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ==================== LEFT COLUMN: PHONE MOCKUP VIEWPORT (5 Columns) ==================== */}
        {/* Handcrafted exactly matching the mobile design screenshot layout provided by user */}
        <section className="col-span-1 lg:col-span-5 flex flex-col items-center">
          
          <div className="w-full max-w-[420px] bg-white border-[6px] border-slate-800 rounded-[48px] shadow-2xl overflow-hidden relative flex flex-col justify-between min-h-[860px]">
            
            {/* Elegant Smartphone Screen Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-42 bg-slate-800 rounded-b-2xl z-50 flex items-center justify-center select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-950 mr-2" />
              <span className="h-1.5 w-8 rounded-full bg-slate-950" />
            </div>

            {/* Simulated Mobile Top Navigation Header */}
            <header className="px-5 pt-8 pb-3 bg-white flex items-center justify-between border-b border-slate-100 select-none text-slate-900">
              <div className="flex items-center space-x-2 cursor-pointer hover:opacity-70 transition-opacity">
                <ArrowLeft size={18} className="stroke-[2.5]" />
                <span className="text-base font-bold tracking-tight">ShopSwift</span>
              </div>
              <div className="flex items-center space-x-4">
                <Search size={18} className="text-slate-600 hover:text-indigo-600 cursor-pointer" />
                <div onClick={() => triggerAddToCart()} className="relative cursor-pointer">
                  <ShoppingCart size={18} className="text-slate-600 hover:text-indigo-600" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </div>
            </header>

            {/* Main Scrollable View */}
            <div className="flex-1 overflow-y-auto no-scrollbar bg-[#F8FAFC] flex flex-col pb-24 max-h-[710px]">
              
              {/* Image Carousel Spotlight Area - Styled with professional lighting backdrop */}
              <div className="relative bg-[#0F172A] aspect-square flex items-center justify-center p-6 overflow-hidden select-none">
                {/* Visual Glow Spotlight */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/85 pointer-events-none" />
                <div 
                  className="absolute inset-0 opacity-20 blur-2xl transition-all duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${activeSpecs.main} 0%, transparent 70%)` }} 
                />

                {/* Sneaker Graphic Illustration */}
                <div className="w-full h-full transform hover:scale-105 transition-transform duration-500">
                  <HighFidelityShoeIllustration 
                    mainColor={activeSpecs.main} 
                    accentColor={activeSpecs.accent} 
                    accentDark={activeSpecs.accentDark} 
                    isActionView={activeThumbnail === 3}
                  />
                </div>
              </div>

              {/* Multi Thumbnails Beneath (Direct Layout Alignment) */}
              <div className="px-4 py-3 bg-white grid grid-cols-4 gap-2 border-b border-slate-100">
                {phoneThumbnails.map((thumb, idx) => {
                  const isActive = idx === activeThumbnail;
                  return (
                    <div 
                      key={idx}
                      onClick={() => {
                        setActiveThumbnail(idx);
                        // Update active color dynamically if matched
                        if (thumb.isShoe && thumb.matchColor) {
                          setSelectedColor(thumb.matchColor);
                        }
                      }}
                      className={`relative aspect-square rounded-xl cursor-pointer overflow-hidden p-1.5 transition-all duration-200 flex items-center justify-center ${
                        isActive 
                          ? "border-2 border-slate-900 bg-slate-50 ring-2 ring-slate-900/10 scale-102" 
                          : "border border-slate-200 bg-slate-50/50 hover:border-slate-300"
                      }`}
                    >
                      {thumb.isShoe && thumb.matchColor ? (
                        <div className="w-full h-full transform scale-110">
                          <HighFidelityShoeIllustration 
                            mainColor={catalogStyleSpecs[thumb.matchColor].main}
                            accentColor={catalogStyleSpecs[thumb.matchColor].accent}
                            accentDark={catalogStyleSpecs[thumb.matchColor].accentDark}
                            isActionView={false}
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                          {/* Real action lifestyle backdrop preview */}
                          <div className="absolute inset-0 opacity-40">
                            <HighFidelityShoeIllustration 
                              mainColor="#E74C3C" 
                              accentColor="#E74C3C" 
                              accentDark="#a82012" 
                              isActionView={true} 
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/50 rounded flex items-center justify-center">
                            <span className="font-extrabold text-sm text-white font-mono">{thumb.label}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Product Info, Badges, & Actions Section */}
              <div className="p-4 space-y-4 bg-white">
                
                {/* Header Badge, Stars Rating, and Review Tallies */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-[9px] uppercase font-bold bg-[#D4F6D4] text-[#1E5D1E] rounded-full tracking-wider">
                      NEW ARRIVAL
                    </span>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map(starIdx => (
                        <Star key={starIdx} size={11} className="fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-[10px] text-slate-500 font-semibold pl-1">(128 Reviews)</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    SwiftFlow Kinetic Trainer
                  </h2>
                  <div className="text-base font-extrabold text-[#003441] font-sans">
                    KES 12,499.00
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Description Text block from picture */}
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    Description
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Engineered for elite performance and everyday comfort. The SwiftFlow Kinetic Trainer features our proprietary M-Tech cushioning and a breathable aero-knit upper for maximum reliability on any surface. Perfect for urban runners and gym enthusiasts alike.
                  </p>
                </div>

                {/* SELECT COLOR interactive picker layout */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      Select Color
                    </h4>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full uppercase">
                      {selectedColor}
                    </span>
                  </div>

                  {/* Circular buttons mapping catalog specs */}
                  <div className="flex items-center space-x-3.5 pt-1 select-none">
                    {Object.keys(catalogStyleSpecs).map(color => {
                      const isActive = selectedColor === color;
                      return (
                        <button
                          key={color}
                          onClick={() => {
                            setSelectedColor(color);
                            triggerAlertToast(`Switched active canvas to: ${color}`);
                          }}
                          className={`h-8 w-8 rounded-full transition-all duration-250 relative flex items-center justify-center shadow-xs ${
                            isActive 
                              ? "ring-4 ring-slate-900/15 border-2 border-slate-900 scale-108" 
                              : "border border-slate-200 hover:scale-105 active:scale-95"
                          } ${catalogStyleSpecs[color].class}`}
                          title={color}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* SELECT SIZE interactive grid */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      Select Size (UK)
                    </h4>
                    <button className="text-[10px] font-bold text-indigo-600 hover:underline">
                      Size Guide
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[7, 8, 9, 10, 11, 12].map(sizeNum => {
                      const isSelected = selectedSize === sizeNum;
                      const isOutOfStock = sizeNum === 12; // Out of stock setting matching picture screenshot
                      return (
                        <button
                          key={sizeNum}
                          disabled={isOutOfStock}
                          onClick={() => {
                            setSelectedSize(sizeNum);
                            triggerAlertToast(`Selected Shoe Size: UK ${sizeNum}`);
                          }}
                          className={`py-2 text-xs font-extrabold font-mono transition-all duration-150 rounded-xl border relative ${
                            isSelected 
                              ? "bg-white text-slate-900 border-slate-900 ring-2 ring-slate-900/10" 
                              : isOutOfStock 
                                ? "bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed opacity-50 line-through"
                                : "bg-[#F8FAFC] text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                          }`}
                        >
                          {sizeNum}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Lipa Na M-Pesa Interactive Secure checkout Card */}
                <div 
                  onClick={() => initiateSTKPushSimulation()}
                  className="bg-[#EDFBF2] hover:bg-[#E2FBEB] border border-[#C6F2D5] rounded-2xl p-4 flex items-center justify-between cursor-pointer group transition-all duration-200 active:scale-98 shadow-sm"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-[#49B249] flex items-center justify-center text-white ring-4 ring-[#49B249]/10">
                      <Smartphone size={20} className="fill-white/10" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1E5D1E] group-hover:text-indigo-600 transition-colors">
                        Secure Checkout with M-Pesa
                      </h4>
                      <p className="text-[10px] text-[#2C6F2C] leading-snug">
                        Instant confirmation & real-time tracking.
                      </p>
                    </div>
                  </div>
                  <ShieldCheck size={16} className="text-[#49B249]" />
                </div>

                <hr className="border-slate-100" />

                {/* Customer Reviews UI Container */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div>
                      <h3 className="text-xl font-black text-slate-900">4.8</h3>
                      <div className="flex mt-0.5">
                        {[1,2,3,4,5].map(starIdx => (
                          <Star key={starIdx} size={10} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-[9px] text-slate-500 font-semibold mt-1">
                        Based on 128 verified purchases
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => {
                        setShowReviewForm(!showReviewForm);
                        setAcademyTab("review_component"); // Teach them about how this action triggers UI state
                      }}
                      className="px-4 py-2 border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 rounded-xl text-xs font-bold transition-all active:scale-95"
                    >
                      {showReviewForm ? "Close Form" : "Write a Review"}
                    </button>
                  </div>

                  {/* Create verified Review micro form (Active visual UI state) */}
                  {showReviewForm && (
                    <form onSubmit={handleReviewSubmission} className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4 animate-fadeIn shadow-lg">
                      <div className="bg-slate-50 px-3 py-2 rounded-lg text-[10px] text-slate-500 leading-normal flex items-start space-x-2">
                        <Info size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                        <span>This form appends directly to the React <code className="text-indigo-600">userReviews</code> array in state, instantly re-rendering below!</span>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block">Reviewer Name</label>
                        <input 
                          type="text"
                          required
                          value={reviewName}
                          onChange={(e) => setReviewName(e.target.value)}
                          placeholder="e.g. James Kamau"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block">Rating Stars</label>
                        <select
                          value={reviewRating}
                          onChange={(e) => setReviewRating(Number(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        >
                          <option value="5">⭐⭐⭐⭐⭐ Excellent Fit (5 Stars)</option>
                          <option value="4">⭐⭐⭐⭐ Great Comfort (4 Stars)</option>
                          <option value="3">⭐⭐⭐ Standard Build (3 Stars)</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block">Your Comments</label>
                        <textarea
                          required
                          rows={3}
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                          placeholder="Describe cushioning, M-Pesa experience, delivery speed..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 h-18 resize-none focus:bg-white"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-2 rounded-xl text-xs uppercase tracking-wider transition-colors"
                      >
                        Submit Locally Verified Review
                      </button>
                    </form>
                  )}

                  {/* Testimonials list - rendered exactly from dynamic State representation */}
                  <div className="space-y-3">
                    {userReviews.map(reviewNode => (
                      <div key={reviewNode.id} className="bg-white border border-slate-100 rounded-2xl p-4 space-y-2.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">{reviewNode.author}</h4>
                            <p className="text-[9px] text-slate-400 font-semibold tracking-tight">
                              <span className="text-[#1E5D1E] mr-1.5 font-bold">{reviewNode.tag}</span> • {reviewNode.date}
                            </p>
                          </div>
                          <div className="flex">
                            {Array.from({ length: reviewNode.rating }).map((_, i) => (
                              <Star key={i} size={8} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                          "{reviewNode.comment}"
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-2">
                    <button className="text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-indigo-600 transition-colors">
                      View All Reviews
                    </button>
                  </div>

                </div>

              </div>

            </div>

            {/* HIGH-FIDELITY SIMULATED SMARTPHONE SIM TOOLKIT INTERFACE OVERLAY */}
            {mpesaPaymentState !== "idle" && (
              <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-6 select-none font-sans">
                
                {mpesaPaymentState === "entering_pin" && (
                  <div className="bg-[#E4EBD3] text-slate-950 rounded-2xl w-full max-w-[280px] p-5 shadow-2xl border-4 border-slate-700 animate-scaleUp">
                    {/* Retro SIM prompt bar typical of safaricom mobile OS screens */}
                    <div className="border-b border-stone-400 pb-2 mb-3">
                      <h4 className="text-[9px] font-extrabold tracking-tight uppercase text-stone-600">Safaricom Menu</h4>
                      <p className="text-[11px] font-bold text-stone-900">Lipa Na M-Pesa Online</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[11px] font-bold leading-normal text-stone-800">
                        Do you want to pay KES 12,499.00 to SHOPSWIFT MERCH for order ref #WS2026? Enter M-Pesa PIN:
                      </p>

                      {/* Display Dots representing PIN masking */}
                      <div className="bg-[#f5f5f3] border border-stone-400 text-center py-2.5 rounded font-black text-sm font-mono tracking-widest min-h-[38px] text-stone-900">
                        {"* ".repeat(simPin.length) || "Enter 4-Digit PIN"}
                      </div>

                      {/* Manual input keypad buttons to make simulated UI deeply interactive */}
                      <div className="grid grid-cols-3 gap-1.5 pt-1.5 select-none">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "Clear", 0, "⌫"].map((key) => {
                          const isSpecial = typeof key === "string";
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => {
                                if (key === "Clear") setSimPin("");
                                else if (key === "⌫") setSimPin(prev => prev.slice(0, -1));
                                else if (simPin.length < 4) setSimPin(prev => prev + key);
                              }}
                              className={`py-2 rounded font-extrabold text-xs select-none active:bg-stone-300 transition-all ${
                                isSpecial 
                                  ? "bg-stone-300/80 text-stone-800 text-[10px]" 
                                  : "bg-white border border-stone-300 shadow-3xs text-stone-950"
                              }`}
                            >
                              {key}
                            </button>
                          );
                        })}
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2 pt-2 border-t border-stone-400/50">
                        <button 
                          onClick={() => setMpesaPaymentState("idle")}
                          className="flex-1 py-2 rounded-xl font-bold text-2xs bg-stone-300 text-stone-700 hover:bg-stone-400 transition-all"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={() => completeMpesaPaymentSim()}
                          className="flex-1 py-2 rounded-xl font-bold text-2xs bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
                        >
                          Send
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* Simulated Daraja Gateway Processing & logger trace terminal */}
                {mpesaPaymentState === "processing" && (
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 w-full max-w-[320px] text-center space-y-4 animate-fadeIn shadow-2xl">
                    <RefreshCw size={36} className="text-[#49B249] animate-spin mx-auto" />
                    
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-white">Daraja API Gateway Trace</h4>
                      <p className="text-[10px] text-slate-400">Exposing secure webhook handshakes in real time:</p>
                    </div>

                    {/* Active API Logs viewer */}
                    <div className="bg-slate-950 rounded-xl p-3 text-left font-mono text-[9px] text-emerald-400 border border-slate-800 space-y-1.5 max-h-[160px] overflow-y-auto no-scrollbar">
                      {simTerminalLogs.map((logStr, idx) => (
                        <div key={idx} className="leading-relaxed border-b border-slate-900 pb-1">
                          {logStr}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Successful Payment Receipt details overlay */}
                {mpesaPaymentState === "success" && (
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-[320px] text-center space-y-4 animate-scaleUp shadow-2xl text-slate-900 relative">
                    <div className="absolute top-0 right-0 h-20 w-20 bg-emerald-500/10 rounded-full blur-xl -mr-3 -mt-3" />
                    
                    <div className="h-11 w-11 bg-emerald-100 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle size={24} />
                    </div>
                    
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-bold text-slate-900">Transaction Confirmed</h3>
                      <p className="text-[10px] text-slate-500">Secure digital receipt verified</p>
                    </div>

                    {/* Receipt Details Box */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>LIPA NA M-PESA</span>
                        <span className="text-emerald-600 text-[9px] uppercase font-bold pr-1">SUCCESS</span>
                      </div>
                      <hr className="border-slate-100" />
                      <div className="grid grid-cols-2 gap-y-1.5 text-[10px] font-mono leading-relaxed">
                        <span className="text-slate-500">Receipt Code:</span>
                        <span className="text-slate-900 text-right font-extrabold text-xs">KF21M30X9Z</span>

                        <span className="text-slate-500">Amount Paid:</span>
                        <span className="text-emerald-600 text-right font-bold">KES 12,499.00</span>

                        <span className="text-slate-500">Paybill Account:</span>
                        <span className="text-slate-900 text-right font-bold">{mpesaShortCode}</span>

                        <span className="text-slate-500">Local MongoDB order_id:</span>
                        <span className="text-[#003441] text-right font-bold">col_ord_41a98</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setMpesaPaymentState("idle")}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-2 rounded-xl text-xs uppercase tracking-wider transition-colors"
                    >
                      Return to Product Detail
                    </button>
                  </div>
                )}

              </div>
            )}

            {/* Simulated Bottom sticky navigation layout */}
            <footer className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 px-5 py-3.5 flex items-center space-x-3.5 z-30 select-none">
              <button 
                onClick={() => {
                  setIsFavorited(!isFavorited);
                  triggerAlertToast(isFavorited ? "Removed from Favorites." : "Saved SwiftFlow Kinetic series to your Favorites!");
                }}
                className={`h-11 w-11 shrink-0 rounded-2xl border flex items-center justify-center transition-all ${
                  isFavorited 
                    ? "bg-pink-50 border-pink-200 text-pink-500 scale-102"
                    : "bg-[#F8FAFC] border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300"
                }`}
              >
                <Heart size={20} className={isFavorited ? "fill-pink-500 stroke-pink-500" : "stroke-slate-400"} />
              </button>

              <button 
                onClick={() => triggerAddToCart()}
                className="flex-1 h-11 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-2xl flex items-center justify-center space-x-2 transition-all duration-150 active:scale-97 shadow-lg shadow-slate-900/10"
              >
                <ShoppingCart size={16} />
                <span>Add to Cart</span>
              </button>
            </footer>

          </div>
        </section>

        {/* ==================== RIGHT COLUMN: EDUCATIONAL DEVELOPMENT ACADEMY PORTAL (7 Columns) ==================== */}
        {/* Deep pedagogical interface displaying real code structures, reactive states, & callbacks as they click! */}
        <section className="col-span-1 lg:col-span-7 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[860px]">
          
          <div>
            {/* Header controls for Academy Tabs */}
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/55 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-2.5">
                <BookOpen size={18} className="text-slate-900" />
                <h2 className="text-sm font-extrabold tracking-wider text-slate-900 uppercase">
                  ShopSwift E-Commerce Development Academy
                </h2>
              </div>
              <span className="text-[10px] text-slate-500 bg-slate-100 border border-slate-200 rounded px-2.5 py-0.5 font-mono">
                Interactive Learning Portal
              </span>
            </div>

            {/* Tab select strip */}
            <div className="bg-slate-50/40 px-4 py-2 flex items-center space-x-1.5 overflow-x-auto no-scrollbar border-b border-slate-100 select-none">
              {[
                { key: "welcome", label: "Overview & Stack" },
                { key: "states_explained", label: "1. State Variables (React)" },
                { key: "mpesa_handshake", label: "2. Lipa Na M-Pesa Code" },
                { key: "review_component", label: "3. Interactive Reviews" }
              ].map(academy => (
                <button
                  key={academy.key}
                  onClick={() => setAcademyTab(academy.key)}
                  className={`px-3 py-1.5 rounded-xl text-3xs font-extrabold uppercase tracking-widest whitespace-nowrap transition-all border ${
                    academyTab === academy.key 
                      ? "bg-slate-910 text-white border-slate-950 bg-slate-900 shadow-sm"
                      : "text-slate-500 bg-white border-slate-200 hover:text-slate-800 hover:border-slate-300"
                  }`}
                >
                  {academy.label}
                </button>
              ))}
            </div>

            {/* Dynamic Educational Content Container */}
            <div className="p-6 space-y-6">
              
              {/* Tab: Welcome & Arch Stack */}
              {academyTab === "welcome" && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center">
                      <Sparkles size={16} className="text-indigo-600 mr-2 shrink-0" />
                      Premium Interactive Learning Sandbox
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Welcome to the ShopSwift sandbox. This workspace has been designed to teach you how to write modern React components and how transactions operate in production backends.
                    </p>
                  </div>

                  {/* Aesthetic visual components showcase */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="bg-[#FAF9F6]/80 p-4 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#003441] flex items-center">
                        <Award size={14} className="text-[#006d37] mr-1.5" /> Core UI Design Intentions
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                        We mapped the product catalog from your provided image. Notice parameters such as <strong>UK Size 12 being greyed out (out of stock)</strong>, the <strong>"NEW ARRIVAL" green pill badge</strong>, the detailed rating rows, and color palettes that update the display dynamically.
                      </p>
                    </div>

                    <div className="bg-[#FAF9F6]/80 p-4 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#003441] flex items-center">
                        <Smartphone size={14} className="text-indigo-600 mr-1.5" /> High Fidelity SVG Shoe
                      </h4>
                      <p className="text-[11px] text-[#2c3e50] leading-relaxed font-sans">
                        Rather than using static external images, we coded a <strong>vector path rendering</strong> in pure inline React. This lets us inject real-time state values into the shoe silhouette so clicking the color palettes switches the model color!
                      </p>
                    </div>

                  </div>

                  {/* ASCII Diagram showing the Lipa Na M-Pesa workflow */}
                  <div className="space-y-2.5">
                    <h4 className="text-3xs uppercase font-extrabold text-slate-400 tracking-wider">M-Pesa cashflow transaction sequence:</h4>
                    <div className="bg-slate-900 rounded-xl p-4 font-mono text-[10px] text-emerald-400 leading-relaxed overflow-x-auto shadow-inner select-all">
                      {"1. User Clicks 'Pay with M-Pesa' on Phone Mockup → Launches React SIM Prompter."}<br />
                      {"2. Frontend collects customer standard mobile parameter (0712345678)."}<br />
                      {"3. Secure Next.js endpoint fetches Token from Safaricom with API credentials."}<br />
                      {"4. Daraja platform triggers SSL Lipa Na M-Pesa Online STK Push to client cell phone."}<br />
                      {"5. User inputs PIN validation → Safaricom notifies App asynchronously (Webhook)."}<br />
                      {"6. Orders inside MongoDB update status to PAID ──→ Client UI displays success receipt!"}
                    </div>
                  </div>

                  {/* Call to action guidance */}
                  <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex items-start space-x-3.5">
                    <Eye size={18} className="text-indigo-600 shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <h4 className="text-xs font-bold text-indigo-900">Get Started with State Hooks!</h4>
                      <p className="text-[11px] text-indigo-700 leading-relaxed">
                        Interact with the visual phone showcase. Watch the shoe recolor, add elements to your Cart, toggle your Favorites, or enter mock SIM codes to understand how active hooks respond! Select the tabs above to explore the code.
                      </p>
                    </div>
                  </div>

                </div>
              )}

              {/* Tab: React State variables dynamic inspector */}
              {academyTab === "states_explained" && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-black text-slate-900 flex items-center">
                      <Cpu size={14} className="text-indigo-600 mr-1.5" /> Real-time React Hooks Inspector
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      React manages user interactions utilizing state variables created with the <code className="text-indigo-600 bg-slate-100 p-0.5 rounded font-mono font-bold text-3xs">useState</code> hook. Here are the active values currently running inside the phone's engine:
                    </p>
                  </div>

                  {/* Interactive tabular debugger showcasing local hook parameters changing as they click! */}
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                    <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      <span>Variable Name</span>
                      <span>Current State Value</span>
                      <span>Code Role / Purpose</span>
                    </div>

                    <div className="divide-y divide-slate-100 text-xs font-mono">
                      
                      <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                        <span className="text-indigo-600 font-bold">selectedColor</span>
                        <span className="font-extrabold text-slate-900 bg-indigo-50 px-2 py-0.5 rounded w-fit">{selectedColor}</span>
                        <span className="text-slate-500 text-[10px] leading-snug">Decides shoe fill color & thumbnail styles</span>
                      </div>

                      <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                        <span className="text-indigo-600 font-bold">selectedSize</span>
                        <span className="font-extrabold text-slate-900 bg-indigo-50 px-2 py-0.5 rounded w-fit">UK {selectedSize}</span>
                        <span className="text-slate-500 text-[10px] leading-snug">Maintains currently selected shoe dimension</span>
                      </div>

                      <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                        <span className="text-indigo-600 font-bold">cartCount</span>
                        <span className="font-extrabold text-slate-900 bg-indigo-50 px-2 py-0.5 rounded w-fit">{cartCount} items</span>
                        <span className="text-slate-500 text-[10px] leading-snug">Controls badge tally on smartphone cart icons</span>
                      </div>

                      <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                        <span className="text-indigo-600 font-bold">isFavorited</span>
                        <span className="font-extrabold text-slate-900 bg-indigo-50 px-2 py-0.5 rounded w-fit">{isFavorited ? "TRUE (Liked)" : "FALSE"}</span>
                        <span className="text-slate-500 text-[10px] leading-snug">Controls heart background active filling</span>
                      </div>

                      <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                        <span className="text-indigo-600 font-bold">mpesaPaymentState</span>
                        <span className="font-extrabold text-[#1E5D1E] bg-emerald-50 px-2 py-0.5 rounded w-fit uppercase">{mpesaPaymentState}</span>
                        <span className="text-slate-500 text-[10px] leading-snug">Tracks simulator overlays for PIN prompted handshakes</span>
                      </div>

                    </div>
                  </div>

                  {/* Learn Code snippet container */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 flex items-center">
                      <Code size={12} className="text-indigo-600 mr-1" /> How to declare state variables inside components:
                    </h4>
                    <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-[11px] leading-normal select-all">
{`// Declarations inside App.jsx
import React, { useState } from 'react';

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("Crimson Red");
  const [selectedSize, setSelectedSize] = useState(9);
  
  return (
    <button onClick={() => setSelectedColor("Lime Green")}>
      Recolor Active Model
    </button>
  );
}`}
                    </pre>
                  </div>

                </div>
              )}

              {/* Tab: Lipa Na M-Pesa API integration steps */}
              {academyTab === "mpesa_handshake" && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center">
                      <Smartphone size={14} className="text-emerald-500 mr-1.5" />
                      Safaricom Daraja API (STK Push) Handshake Code Block
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Lipa Na M-Pesa online operates using three simple, vital components. Let's study how the background endpoints calculate configurations:
                    </p>
                  </div>

                  {/* Sub-steps of Daraja SDK development */}
                  <div className="space-y-4">
                    
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-800 font-sans">1. Standardizing timestamp variables:</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        To sign request requests safely, you generate a timestamp in standard Safaricom formatting: <code className="text-indigo-600 bg-slate-100 p-0.5 rounded font-mono">YYYYMMDDHHmmss</code> (e.g., 20260614004520).
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-800 font-sans">2. Generation of the Base64 Header Passwords:</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        You composite your shortcode and private merchant key. Placing this calculation server-side prevents client exposure.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 font-sans">3. Dispatch of the STK Push payload:</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        This shows the exact structure of the JSON dispatched to Safaricom inside the Node.js or Next.js route:
                      </p>
                      <pre className="bg-slate-900 text-teal-400 rounded-xl p-4 font-mono text-[10px] leading-normal select-all">
{`// Next.js Route POST payload dispatched to safaricom
const stkPushPayload = {
  BusinessShortCode: "174379",
  Password: "M2QyZjg4YjYyYTZjYzgxODNiNWNlNDc...",
  Timestamp: "20260614004520",
  TransactionType: "CustomerPayBillOnline",
  Amount: 12499,
  PartyA: "254712345678", // Subscriber Number
  PartyB: "174379",       // Business paybill code
  PhoneNumber: "254712345678",
  CallBackURL: "https://shopswift.com/api/payments/callback",
  AccountReference: "SwiftFlow Kinetic",
  TransactionDesc: "Payment for sports gear"
};`}
                      </pre>
                    </div>

                  </div>

                </div>
              )}

              {/* Tab: Review Component Code, Local persistence */}
              {academyTab === "review_component" && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center">
                      <Users size={14} className="text-indigo-600 mr-1.5" />
                      Dynamically mapping collections securely
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      In the mockup app, click <span className="font-bold text-indigo-600">"Write a Review"</span>. As you type and submit the local form, JavaScript appends the item to the React array.
                    </p>
                  </div>

                  {/* Component design breakdowns for learning */}
                  <div className="space-y-3 font-sans">
                    <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-800">Dynamic Key Array Rendering</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                        We map the review objects array dynamically using JavaScript's native map iterator inside the JSX. React requires active child loops to contain unique <code className="text-indigo-600 font-mono">key</code> properties to render updates.
                      </p>
                    </div>

                    <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-800">Form Submission Handlers</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                        When capturing submissions: we bind values securely utilizing the <code className="text-indigo-600 font-mono">onChange</code> handlers, run <code className="text-indigo-600 font-mono">e.preventDefault()</code> to eliminate default page reloads, and copy old states securely utilizing destructured spread symbols (<code className="text-indigo-600 font-mono">[newNode, ...oldNode]</code>).
                      </p>
                    </div>
                  </div>

                  {/* JSX implementation review code */}
                  <pre className="bg-slate-900 text-indigo-300 rounded-xl p-4 font-mono text-[10px] leading-normal select-all">
{`{/* JSX review looping template */}
<div className="space-y-2">
  {userReviews.map(review => (
    <div key={review.id} className="border p-4 rounded-xl">
      <h4>{review.author}</h4>
      <p>{review.comment}</p>
    </div>
  ))}
</div>`}
                  </pre>

                </div>
              )}

            </div>
          </div>

          {/* Elegant Footer Details for Education */}
          <footer className="border-t border-slate-100 bg-slate-50 p-4 shrink-0 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
            <span>ShopSwift Premium Learning Toolkit</span>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0 font-medium text-slate-500">
              <span>Frontend Sandbox</span>
              <span>•</span>
              <span>100% Client-Side Interactive</span>
            </div>
          </footer>

        </section>

      </main>

      {/* Main outer Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 px-6 text-center text-xs text-slate-400">
        <p>© 2026 ShopSwift Premium Showcase. Crafted for learning & architectural planning.</p>
      </footer>
    </div>
  );
}
