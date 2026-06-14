import React from "react";
import { Sparkles, Award, Smartphone, Cpu, Code, Users } from "lucide-react";
import { Product } from "../types";

interface AcademyPortalProps {
  selectedProduct: Product;
  selectedColor: string;
  selectedSize: number;
  cartCount: number;
  isFavorited: boolean;
  mpesaPaymentState: string;
  academyTab: string;
  setAcademyTab: (tab: string) => void;
  phoneNumber: string;
  mpesaShortCode: string;
}

export function AcademyPortal({
  selectedProduct,
  selectedColor,
  selectedSize,
  cartCount,
  isFavorited,
  mpesaPaymentState,
  academyTab,
  setAcademyTab,
  phoneNumber,
  mpesaShortCode
}: AcademyPortalProps) {
  return (
    <section className="col-span-1 lg:col-span-12 xl:col-span-5 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[750px] lg:min-h-[850px]" id="academy-portal-section">
      <div>
        {/* Header controls for Academy Tabs */}
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/55 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="p-1 px-2 rounded-lg bg-indigo-600 text-white font-black text-xs">AC</span>
            <h2 className="text-xs font-extrabold tracking-wider text-slate-800 uppercase font-sans">
              ShopSwift E-Commerce Development Academy
            </h2>
          </div>
          <span className="text-[10px] text-slate-500 bg-slate-100 border border-slate-200 rounded px-2.5 py-0.5 font-mono font-bold">
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
              className={`px-3 py-1.5 rounded-xl text-3xs font-extrabold uppercase tracking-widest whitespace-nowrap transition-all border cursor-pointer ${
                academyTab === academy.key 
                  ? "bg-slate-900 text-white border-slate-950 shadow-sm font-black"
                  : "text-slate-500 bg-white border-slate-200 hover:text-slate-800 hover:border-slate-300"
              }`}
            >
              {academy.label}
            </button>
          ))}
        </div>

        {/* Dynamic Educational Content Container */}
        <div className="p-6 space-y-5 lg:space-y-6">
          
          {/* Tab: Welcome & Arch Stack */}
          {academyTab === "welcome" && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center">
                  <Sparkles size={16} className="text-emerald-500 mr-2 shrink-0 animate-pulse" />
                  Premium Interactive Learning Sandbox
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Welcome to the ShopSwift sandbox. This premium simulation environment lets you study code architectures, reactive component lifecycles, and backend integrations like Safaricom's Daraja API in a zero-risk educational space.
                </p>
              </div>

              {/* Aesthetic visual components showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 flex items-center">
                    <Award size={14} className="text-emerald-600 mr-1.5" /> High-Fidelity UI Catalog
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Notice how selecting active item cards on the mobile screen updates state values like <code>selectedColor</code>, <code>priceUSD</code>, and <code>selectedSize</code> dynamically below!
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 flex items-center">
                    <Smartphone size={14} className="text-indigo-600 mr-1.5" /> Vector SVG Rendering
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Rather than relying on stale stock photos, we coded <strong>crisp, scale-invariant SVG vector blueprints</strong> for every item in the catalog. Clicking color rings recalculates paths inside JSX immediately!
                  </p>
                </div>

              </div>

              {/* Sequence flow of Daraja Webhooks */}
              <div className="space-y-2.5">
                <h4 className="text-3xs uppercase font-extrabold text-slate-400 tracking-wider font-sans">Lipa Na M-Pesa API checkout sequence:</h4>
                <div className="bg-slate-950 rounded-xl p-4 font-mono text-[10px] text-emerald-400 leading-relaxed overflow-x-auto shadow-inner select-all">
                  {"1. User clicks Add to Cart → View Cart / STK Trigger on the active device."}<br />
                  {"2. Frontend collects customer's Safaricom phone number (e.g. 0712345678)."}<br />
                  {"3. Secure Node.js server acts as an API proxy to fetch OAuth credentials from Safaricom."}<br />
                  {"4. Daraja platform fires an SSL Lipa Na M-Pesa Online STK Push to the user's handset."}<br />
                  {"5. Customer enters standard secret 4-digit SIM PIN directly inside custom dialogue frame."}<br />
                  {"6. Webhook received on app callback URL ──→ DB marks order state 'col_ord_41a98' as PAID!"}
                </div>
              </div>

              {/* Educational info card */}
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start space-x-3.5">
                <Smartphone size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-950">Interactive Catalog View Ready!</h4>
                  <p className="text-[11px] text-emerald-800 leading-relaxed font-sans">
                    Use the Phone Mockup on the left. You can search products, filter by tags (New, Sale, All), view detailed specifications, add items to your cart, set favorites, and launch payments via M-Pesa. Select the tabs above to explore the code.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* Tab: React State variables dynamic inspector */}
          {academyTab === "states_explained" && (
            <div className="space-y-6 animate-fadeIn font-sans">
              
              <div className="space-y-1.5">
                <h3 className="text-sm font-black text-slate-900 flex items-center">
                  <Cpu size={14} className="text-indigo-600 mr-1.5" /> Real-time React Hooks Inspector
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  React manages user interactions utilizing state variables created with the <code>useState</code> hook. Here are the active values currently running inside the phone's engine:
                </p>
              </div>

              {/* Debug table */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 px-4 py-2.5 text-[9px] font-bold text-slate-500 uppercase tracking-wider font-sans">
                  <span>Variable Name</span>
                  <span>Active State</span>
                  <span>Purpose / Description</span>
                </div>

                <div className="divide-y divide-slate-100 text-[11px] font-mono">
                  
                  <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                    <span className="text-indigo-600 font-bold">selectedProduct</span>
                    <span className="font-extrabold text-slate-900 bg-slate-100 px-2 py-0.5 rounded truncate max-w-[120px]">{selectedProduct.name}</span>
                    <span className="text-slate-500 text-[10px] leading-snug">Identifies the loaded product's schema variables</span>
                  </div>

                  <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                    <span className="text-indigo-600 font-bold">selectedColor</span>
                    <span className="font-extrabold text-slate-900 bg-slate-100 px-2 py-0.5 rounded truncate max-w-[120px]">{selectedColor}</span>
                    <span className="text-slate-500 text-[10px] leading-snug">Instructs SVG paths which hex shades to paint</span>
                  </div>

                  <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                    <span className="text-indigo-600 font-bold">selectedSize</span>
                    <span className="font-extrabold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{selectedSize}</span>
                    <span className="text-slate-500 text-[10px] leading-snug">Stores selected item parameter dimensions</span>
                  </div>

                  <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                    <span className="text-indigo-600 font-bold">cartCount</span>
                    <span className="font-extrabold text-[#1a5f7a] bg-[#eef8fc] px-2 py-0.5 rounded">{cartCount} items</span>
                    <span className="text-slate-500 text-[10px] leading-snug">Drives notifications badges on navigation header</span>
                  </div>

                  <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                    <span className="text-indigo-600 font-bold">isFavorited</span>
                    <span className="font-extrabold text-pink-600 bg-pink-50 px-2 py-0.5 rounded">{isFavorited ? "TRUE (Liked)" : "FALSE"}</span>
                    <span className="text-slate-500 text-[10px] leading-snug">Controls heart icons bounding state</span>
                  </div>

                  <div className="grid grid-cols-3 px-4 py-2.5 items-center">
                    <span className="text-indigo-600 font-bold text-emerald-600">mpesaState</span>
                    <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">{mpesaPaymentState}</span>
                    <span className="text-slate-500 text-[10px] leading-snug font-sans">Tracks the STK Handshake stage simulator overlays</span>
                  </div>

                </div>
              </div>

              {/* Code display */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 flex items-center">
                  <Code size={12} className="text-indigo-600 mr-1" /> Declaring Reactive Hooks:
                </h4>
                <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-[10px] leading-normal select-all">
{`import React, { useState } from 'react';

export default function ShopProduct() {
  const [selectedSize, setSelectedSize] = useState(9);
  const [cartCount, setCartCount] = useState(0);

  return (
    <button onClick={() => setCartCount(c => c + 1)}>
      Increment Cart: {cartCount} items
    </button>
  );
}`}
                </pre>
              </div>

            </div>
          )}

          {/* Tab: Lipa Na M-Pesa API integration steps */}
          {academyTab === "mpesa_handshake" && (
            <div className="space-y-6 animate-fadeIn font-sans">
              
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center">
                  <Smartphone size={14} className="text-emerald-500 mr-1.5" />
                  Safaricom Daraja API (STK Push) Handshake Payload
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  The Safaricom API (Lipa Na M-Pesa Online STK Push) utilizes standard HTTP POST request structures to reach subscriber devices. Let's study how this connects behind the scenes:
                </p>
              </div>

              <div className="space-y-4">
                
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-800">1. Generating the Timestamp:</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Safaricom requires timestamps formatted as <code>YYYYMMDDHHmmss</code> (e.g. 20260614080822).
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-800">2. Header Authorization Passwords:</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    The transaction password is a Base64 encoded hash: <code>base64_encode(Shortcode + Passkey + Timestamp)</code>.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-800">3. Sample Back-End Payload:</h4>
                  <pre className="bg-slate-900 text-teal-400 rounded-xl p-4 font-mono text-[9px] leading-normal overflow-x-auto select-all">
{`const stkPayload = {
  BusinessShortCode: "${mpesaShortCode}",
  Password: "M2QyZjg4YjYyYTZjYzgxOD...", // Base64 composite
  Timestamp: "20260614080822",
  TransactionType: "CustomerPayBillOnline",
  Amount: 15600, // Equivalent value in KES (USD convert)
  PartyA: "${phoneNumber}", // Customer Phone
  PartyB: "${mpesaShortCode}", // Merchant Paybill
  PhoneNumber: "${phoneNumber}",
  CallBackURL: "https://shopswift.com/api/payment/callback",
  AccountReference: "SWIFTSHOP_ORD1",
  TransactionDesc: "ShopSwift Premium Sandbox Checkout"
};`}
                  </pre>
                </div>

              </div>

            </div>
          )}

          {/* Tab: Reviews dynamic list */}
          {academyTab === "review_component" && (
            <div className="space-y-6 animate-fadeIn font-sans">
              
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center">
                  <Users size={14} className="text-indigo-600 mr-1.5" />
                  Dynamically Mapping Lists In React
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  When adding new evaluations in the mobile mockup, the list updates instantly by updating React's array state. Let's inspect the rendering patterns:
                </p>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-800">Array Reactivity & Keys</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    When looping arrays inside JSX, each element must include a unique <code>key</code> parameter (e.g., <code>{"key={review.id}"}</code>) for rendering optimization and tracking.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-800">Spread operator array additions</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    To append reviews cleanly without mutating old state: <code>{"setReviews(prev => [newReview, ...prev])"}</code> copies items safely.
                  </p>
                </div>
              </div>

              <pre className="bg-slate-900 text-slate-300 rounded-xl p-4 font-mono text-[10px] leading-normal overflow-x-auto select-all">
{`<div className="space-y-4">
  {userReviews.map((review) => (
    <div key={review.id} className="border p-4 rounded-2xl">
      <h4 className="font-bold">{review.author}</h4>
      <p className="text-xs">{review.comment}</p>
    </div>
  ))}
</div>`}
              </pre>

            </div>
          )}

        </div>
      </div>

      {/* Elegant Footer Details for Education */}
      <footer className="border-t border-slate-100 bg-slate-50 p-4 shrink-0 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 font-sans">
        <span>ShopSwift Premium Learning Toolkit v2.0 - Catalog Release</span>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0 font-medium text-slate-500">
          <span>Frontend Sandbox</span>
          <span>•</span>
          <span>100% Client-Side Interactive</span>
        </div>
      </footer>
    </section>
  );
}
