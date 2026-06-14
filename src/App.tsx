import React, { useState, useEffect } from "react";
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
  Plus, 
  Minus, 
  HelpCircle, 
  Eye, 
  Cpu, 
  Sparkles,
  Award,
  Users,
  Check,
  Percent,
  TrendingUp,
  Mail,
  Home,
  Grid,
  ShoppingBag,
  User,
  ExternalLink
} from "lucide-react";

import { Product, Review, CartItem } from "./types";
import { productsData } from "./data/products";
import { ProductImageRender } from "./components/ProductIllustrations";
import { AcademyPortal } from "./components/AcademyPortal";

export default function App() {
  // --- CORE VIEW STATE ---
  const [phoneScreen, setPhoneScreen] = useState<"home" | "catalog" | "detail" | "cart" | "profile">("home");
  
  // --- CATALOG SCREEN INTERACTION STATES ---
  const [catalogSearch, setCatalogSearch] = useState("");
  const [catalogSort, setCatalogSort] = useState<"none" | "low-to-high" | "high-to-low">("none");
  const [catalogCategory, setCatalogCategory] = useState<string>("All");
  
  // --- CURRENT ACTIVE PRODUCT DETAIL STATE ---
  const [selectedProduct, setSelectedProduct] = useState<Product>(productsData[2]); // Hyper-dash as default
  const [selectedColor, setSelectedColor] = useState<string>("Crimson Red");
  const [selectedSize, setSelectedSize] = useState<number>(9);
  
  // --- DYNAMIC STATE ENGINES ---
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  
  // --- SEARCH & FILTERS ---
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<"All" | "New" | "Sale">("All");
  
  // --- FEEDBACK SYSTEM ---
  const [feedbackToast, setFeedbackToast] = useState("");
  const [emailInput, setEmailInput] = useState("");
  
  // --- DYNAMIC REVIEWS REGISTRY (Mapped dynamically!) ---
  const [productReviews, setProductReviews] = useState<Record<string, Review[]>>({
    "pro-smartwatch": [
      { id: 1, author: "Otieno O.", date: "1 day ago", rating: 5, comment: "The biometric tracking on this Watch XT is exceptionally precise. Connected M-Pesa immediately.", tag: "Verified Buyer" },
      { id: 2, author: "Aminah J.", date: "4 days ago", rating: 4, comment: "Build quality is stellar. Metal watch ring looks brilliant.", tag: "Verified Buyer" }
    ],
    "sonicmaster-headphones": [
      { id: 1, author: "Wanjiku N.", date: "2 days ago", rating: 5, comment: "Unbelievable noise isolation. Ideal for workouts and focus blocks.", tag: "Verified Buyer" }
    ],
    "hyper-dash-sneaker": [
      { id: 1, author: "James Kamau", date: "2 days ago", rating: 5, comment: "Incredibly fast delivery and the shoes feel amazing. The M-Pesa integration made checkout so smooth!", tag: "Verified Buyer" },
      { id: 2, author: "Sarah W.", date: "1 week ago", rating: 5, comment: "Perfect fit. Used the recommended UK size 9 and it was spot on. Highly recommend for daily training.", tag: "Verified Buyer" },
      { id: 3, author: "Ondiek M.", date: "2 weeks ago", rating: 5, comment: "Build quality is professional-grade. Best sneakers I've bought this year.", tag: "Verified Buyer" }
    ],
    "retro-shot-camera": [
      { id: 1, author: "Njoroge G.", date: "3 days ago", rating: 5, comment: "A masterpiece rangefinder camera model. Exceptional optics resolution.", tag: "Verified Buyer" }
    ]
  });

  // Review Form state variables
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  // Safaricom Lipa Na M-Pesa SIM STK Push Simulator Flow states
  const [mpesaPaymentState, setMpesaPaymentState] = useState("idle"); // idle, entering_pin, processing, success
  const mpesaShortCode = "174379"; // Safaricom Lipa Na M-Pesa standard sandbox shortcode
  const [phoneNumber, setPhoneNumber] = useState("0712345678");
  const [simPin, setSimPin] = useState("");
  const [simTerminalLogs, setSimTerminalLogs] = useState<string[]>([]);
  const [orderReceiptId, setOrderReceiptId] = useState("KF21M30X9Z");

  // Right-Panel Academy Tracker Tab State
  const [academyTab, setAcademyTab] = useState("welcome");

  // --- DERIVED CART COUNT TALLIES ---
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Trigger feedback toasts safely
  const triggerAlertToast = (message: string) => {
    setFeedbackToast(message);
    setTimeout(() => {
      setFeedbackToast("");
    }, 4000);
  };

  // Sync color & size when product changes
  useEffect(() => {
    if (selectedProduct) {
      setSelectedColor(selectedProduct.colors[0]?.name || "");
      setSelectedSize(selectedProduct.sizes[0] || 9);
      setShowReviewForm(false);
    }
  }, [selectedProduct]);

  // Action: Add directly to state card basket
  const handleAddToCart = (product: Product, color: string, size: number) => {
    const existingIndex = cart.findIndex(
      item => item.product.id === product.id && 
              item.selectedColor === color && 
              item.selectedSize === size
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      setCart(updated);
    } else {
      setCart([...cart, { product, quantity: 1, selectedColor: color, selectedSize: size }]);
    }
    triggerAlertToast(`Added 1 x ${product.name} (${color}, Size ${size}) to your Cart!`);
  };

  // Quick purchase add from products catalog grid (uses default specs)
  const handleFeaturedQuickCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering full screen details navigation
    handleAddToCart(product, product.colors[0].name, product.sizes[0]);
  };

  // Toggle Favorite
  const handleToggleFavorite = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
      triggerAlertToast("Removed item from your saved watch list.");
    } else {
      setFavorites([...favorites, productId]);
      triggerAlertToast("Saved item to your permanent Favorites! ❤️");
    }
  };

  // Cart quantity actions
  const adjustCartQty = (itemIndex: number, delta: number) => {
    const updated = [...cart];
    if (updated[itemIndex].quantity + delta <= 0) {
      updated.splice(itemIndex, 1);
      triggerAlertToast("Removed item from dynamic cart listing.");
    } else {
      updated[itemIndex].quantity += delta;
    }
    setCart(updated);
  };

  // Submit verified product reviews from details container
  const handleReviewSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) {
      alert("Please supply both your Name and Comment structure to post.");
      return;
    }
    const newRev: Review = {
      id: Date.now(),
      author: reviewName,
      date: "Just now",
      rating: reviewRating,
      comment: reviewText,
      tag: "Verified Local Buyer"
    };

    const targetKey = selectedProduct.id;
    const existingRevList = productReviews[targetKey] || [];
    setProductReviews({
      ...productReviews,
      [targetKey]: [newRev, ...existingRevList]
    });

    setReviewName("");
    setReviewText("");
    setShowReviewForm(false);
    triggerAlertToast("Verified Review updated and appended inside local state engine!");
  };

  // Calculate cart cost in USD and conversion to Safaricom KES equivalent
  const getCartTotalUSD = () => {
    return cart.reduce((acc, item) => acc + (item.product.priceUSD * item.quantity), 0);
  };
  const getCartTotalKES = () => {
    return Math.round(getCartTotalUSD() * 130); // 1 USD = 130 KES exchange rate proxy
  };

  // Simulated Lipa Na M-Pesa STK Push sequence initiator
  const handleInitiateMpesaCheckout = () => {
    if (cart.length === 0 && phoneScreen === "cart") {
      alert("Your cart is currently empty! Fill-up in the catalog first.");
      return;
    }
    setMpesaPaymentState("entering_pin");
    setSimPin("");
    setSimTerminalLogs(["Initializing Daraja client-routing handshakes..."]);
  };

  // Complete Simulated PIN entry
  const handleExecuteMpesaTelemetry = () => {
    if (simPin.length < 4) {
      alert("Simulation standard requires entry of standard 4-digit security PIN.");
      return;
    }
    setMpesaPaymentState("processing");

    // Micro stages simulation logs to educate standard workspace users
    const checkoutValueKES = phoneScreen === "detail" ? Math.round(selectedProduct.priceUSD * 130) : getCartTotalKES();
    const mockOrderNum = "ORD_" + Math.random().toString(36).substring(3, 8).toUpperCase();
    const logs = [
      { text: "🔑 Authenticating client credential nodes on Daraja sandbox gateway...", interval: 200 },
      { text: "🔑 Generating HMAC Base64 request payloads with client private key passkeys...", interval: 700 },
      { text: "🎫 Secure token validated: Bearer connection configured successfully.", interval: 1300 },
      { text: `📡 Dispatched network STK Push envelope: Paybill 174379, Amount KES ${checkoutValueKES.toLocaleString()}`, interval: 1900 },
      { text: `📱 Simulating pop-up prompt output displayed on subscriber node: +254${phoneNumber.substring(1)}`, interval: 2400 },
      { text: "🎯 Handset validation approved: Secret SIM PIN confirmed correct.", interval: 3100 },
      { text: "⚡ Webhook received: ResultCode: 0, status payload validated 'Transaction Success'", interval: 3700 },
      { text: "💾 Relational catalog updated: Saved standard transaction to MongoDB schema.", interval: 4300 },
      { text: "🎉 Sequence finished! Rendering payment confirmation screen...", interval: 4900 }
    ];

    logs.forEach(log => {
      setTimeout(() => {
        setSimTerminalLogs(old => [...old, log.text]);
        if (log.text.includes("payment confirmation screen")) {
          setMpesaPaymentState("success");
          setOrderReceiptId("KT" + Math.floor(Math.random() * 89999 + 10000) + "M30X");
          triggerAlertToast("Lipa Na M-Pesa transaction confirmed successfully!");
          // Empty cart upon successful overall e-commerce pay
          if (phoneScreen === "cart") {
            setCart([]);
          }
        }
      }, log.interval);
    });
  };

  // Email Newsletter Submission
  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes("@")) {
      alert("Please input a valid customer email address.");
      return;
    }
    triggerAlertToast(`Subscribed ${emailInput} for Weekly Deals! Check active state.`);
    setEmailInput("");
  };

  // Navigating to product detail view
  const handleViewProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setPhoneScreen("detail");
    // Scroll mobile simulation to top
    const deviceWrapper = document.getElementById("mockup-inner-viewport");
    if (deviceWrapper) {
      deviceWrapper.scrollTop = 0;
    }
  };

  // Filter products Data list based on search and filters
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategoryFilter === "All") {
      return matchesSearch;
    } else if (activeCategoryFilter === "New") {
      return matchesSearch && product.id !== "retro-shot-camera" && product.id !== "sonicmaster-headphones"; // Mocking "new" filter items
    } else if (activeCategoryFilter === "Sale") {
      return matchesSearch && !!product.originalPriceUSD;
    }
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col justify-between selection:bg-emerald-600 selection:text-white">
      
      {/* Dynamic Screen Action Toaster notification */}
      {feedbackToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-bounce bg-slate-900 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full flex items-center space-x-2.5 shadow-2xl">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{feedbackToast}</span>
        </div>
      )}

      {/* Academy Main Header Bar */}
      <header className="border-b border-slate-200 bg-white shadow-xs px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xl tracking-wider">
            S
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-extrabold text-[#0D0F12] text-md tracking-tight flex items-center gap-1.5">
                ShopSwift
                <span className="text-2xs bg-emerald-500/10 text-emerald-700 border border-emerald-500/10 rounded-full px-2.5 py-0.5 font-bold">
                  Catalog Sandbox v2.0
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-500">Explore premium catalog screens, layout architecture, and M-Pesa STK simulations.</p>
          </div>
        </div>

        {/* Global Cart status indicator for state tracking */}
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline-flex items-center text-xs text-slate-500 bg-slate-100 border border-slate-100 px-3 py-1.5 rounded-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 animate-ping" />
            Sandbox Gateway Active
          </span>

          <div 
            onClick={() => setPhoneScreen("cart")}
            className="h-10 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center space-x-2.5 cursor-pointer select-none transition-all duration-150 active:scale-95"
          >
            <ShoppingCart size={14} className="text-emerald-400" />
            <span className="text-xs font-bold">Your Cart</span>
            <span className="bg-emerald-500 text-slate-950 font-black text-[10px] h-5 w-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </header>

      {/* Interactive Play Space */}
      <main className="flex-grow max-w-[1450px] w-full mx-auto px-4 py-8 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ==================== LEFT COLUMN: PHONE MOCKUP VIEWPORT (7 Columns) ==================== */}
        {/* Render precise client UI representation with realistic framing dimensions */}
        <section className="col-span-1 lg:col-span-12 xl:col-span-7 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[9/19] min-h-[780px] md:min-h-[850px] bg-slate-950 rounded-[52px] p-3.5 shadow-2xl border-4 border-slate-900 ring-12 ring-slate-900/30 flex flex-col justify-between overflow-hidden">
            
            {/* Top Speaker Screen notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-900 rounded-full" />
              <div className="absolute right-4 w-1.5 h-1.5 bg-indigo-950/40 rounded-full" />
            </div>

            {/* Simulated Glass Reflection */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-white/5 to-transparent skew-x-12 pointer-events-none z-30" />

            {/* ACTIVE SIMULATED PHONE GLASS SCREENPORT */}
            <div 
              id="mockup-inner-viewport"
              className="w-full h-full bg-[#fcfcfd] rounded-[38px] overflow-y-auto no-scrollbar relative flex flex-col justify-between"
            >
              
              {/* --- INNER PHONE NAVIGATION HEADER (Matches customer layout) --- */}
              <header className="bg-white border-b border-slate-100 px-5 pt-8 pb-3.5 flex items-center justify-between sticky top-0 z-30 select-none">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => {
                      if (phoneScreen !== "home" && phoneScreen !== "catalog") {
                        setPhoneScreen("home");
                      } else {
                        triggerAlertToast("ShopSwift Main Navigation Menu Triggered 🍔");
                      }
                    }} 
                    className="p-1.5 text-slate-800 hover:bg-slate-50 rounded-lg cursor-pointer"
                  >
                    {(phoneScreen !== "home" && phoneScreen !== "catalog") ? <ArrowLeft size={18} /> : (
                      <div className="space-y-1 w-5">
                        <div className="h-0.5 w-5 bg-slate-900" />
                        <div className="h-0.5 w-4 bg-slate-900" />
                        <div className="h-0.5 w-5 bg-slate-900" />
                      </div>
                    )}
                  </button>
                </div>
                
                <span className="font-extrabold text-slate-950 tracking-wide text-base font-sans">
                  ShopSwift
                </span>

                <div className="relative">
                  <button 
                    onClick={() => setPhoneScreen("cart")}
                    className="p-2 text-slate-800 hover:bg-slate-50 rounded-full relative"
                  >
                    <ShoppingCart size={18} />
                    {cartCount > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-emerald-500 text-slate-950 text-[9px] font-black rounded-full flex items-center justify-center shadow-md animate-pulse">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </header>

              {/* --- VIEW SCREEN CONDITIONAL ROUTING SYSTEM --- */}
              <div className="flex-grow pb-24">
                
                {/* SCREEN 1B: HIGH-FIDELITY PRODUCT CATALOG SCREEN (Matching reference screenshot exactly!) */}
                {phoneScreen === "catalog" && (
                  <div className="animate-fadeIn pb-12">
                    
                    {/* Catalog Inner Search Inputs Container */}
                    <div className="px-5 pt-4 pb-1">
                      <div className="relative">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search for products..."
                          value={catalogSearch}
                          onChange={(e) => setCatalogSearch(e.target.value)}
                          className="w-full text-xs bg-slate-100 hover:bg-slate-200/50 border border-transparent rounded-xl pl-10 pr-4 py-2.5 focus:outline-hidden focus:bg-white focus:border-slate-300 transition-all font-semibold text-slate-800 placeholder:text-slate-400"
                        />
                        {catalogSearch && (
                          <button 
                            onClick={() => setCatalogSearch("")}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold hover:text-slate-600 cursor-pointer"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Horizontal Filters Scroll Rack Bar */}
                    <div className="flex items-center space-x-2.5 overflow-x-auto no-scrollbar px-5 py-3 select-none">
                      
                      {/* All Filters Button Pills with dynamic outline indicator */}
                      <button
                        onClick={() => {
                          setCatalogCategory("All");
                          setCatalogSearch("");
                          setCatalogSort("none");
                          triggerAlertToast("All filters reset successfully! 🔍");
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-black flex items-center space-x-1.5 shrink-0 transition-transform duration-100 active:scale-95 cursor-pointer ${
                          catalogCategory === "All" && catalogSearch === "" && catalogSort === "none"
                            ? "bg-[#0C1E26] text-white shadow-md shadow-[#0C1E26]/10"
                            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {/* Sliders layout icon representer */}
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="4" y1="21" x2="4" y2="14" />
                          <line x1="4" y1="10" x2="4" y2="3" />
                          <line x1="12" y1="21" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12" y2="3" />
                          <line x1="20" y1="21" x2="20" y2="16" />
                          <line x1="20" y1="12" x2="20" y2="3" />
                          <line x1="1" y1="14" x2="7" y2="14" />
                          <line x1="9" y1="8" x2="15" y2="8" />
                          <line x1="17" y1="16" x2="23" y2="16" />
                        </svg>
                        <span>All Filters</span>
                      </button>

                      {/* Sorting Price Toggle Pill (Low to High vs High to Low) */}
                      <button
                        onClick={() => {
                          if (catalogSort === "none") {
                            setCatalogSort("low-to-high");
                            triggerAlertToast("Price sorted: Low to High 📈");
                          } else if (catalogSort === "low-to-high") {
                            setCatalogSort("high-to-low");
                            triggerAlertToast("Price sorted: High to Low 📉");
                          } else {
                            setCatalogSort("none");
                            triggerAlertToast("Sorting filter cleared");
                          }
                        }}
                        className={`px-4.5 py-2 rounded-xl text-xs font-bold border shrink-0 transition-all duration-150 cursor-pointer ${
                          catalogSort !== "none"
                            ? "bg-[#0C1E26] text-white border-transparent"
                            : "bg-white border-slate-200 hover:border-slate-300 text-slate-800"
                        }`}
                      >
                        {catalogSort === "none" && "Price: Default"}
                        {catalogSort === "low-to-high" && "Price: Low to High"}
                        {catalogSort === "high-to-low" && "Price: High to Low"}
                      </button>

                      {/* Category specific horizontal filter items (displays live indicators) */}
                      {["Wearables", "Audio", "Computers", "Accessories", "Displays"].map(catName => (
                        <button
                          key={catName}
                          onClick={() => {
                            if (catalogCategory === catName) {
                              setCatalogCategory("All");
                              triggerAlertToast("Viewing all departments 📦");
                            } else {
                              setCatalogCategory(catName);
                              triggerAlertToast(`Department selected: ${catName} 🎯`);
                            }
                          }}
                          className={`px-4.5 py-2 rounded-xl text-xs font-bold border shrink-0 transition-colors duration-150 cursor-pointer ${
                            catalogCategory === catName
                              ? "bg-emerald-500 border-emerald-500 text-slate-950 font-black"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-700"
                          }`}
                        >
                          Cat: {catName}
                        </button>
                      ))}

                    </div>

                    {/* Results Counter Title Row */}
                    <div className="px-5 mt-3 mb-4 flex items-center justify-between font-sans select-none">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        {catalogCategory === "All" ? "Discover Tech" : `Discover ${catalogCategory}`}
                      </h3>
                      <span className="text-[11px] font-extrabold text-slate-400">
                        {/* Display real results tally, but scales to look professional with that 128 marker when unfiltered */}
                        {catalogSearch === "" && catalogCategory === "All" && catalogSort === "none" 
                          ? "128 Results" 
                          : `${Math.round(128 * (productsData.filter(p => {
                              const matchesSearch = p.name.toLowerCase().includes(catalogSearch.toLowerCase()) || p.category.toLowerCase().includes(catalogSearch.toLowerCase());
                              const matchesCat = catalogCategory === "All" || p.category.toLowerCase() === catalogCategory.toLowerCase();
                              return matchesSearch && matchesCat;
                            }).length / 6))} Results`
                        }
                      </span>
                    </div>

                    {/* Two Column Beautiful Products Grid */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5 px-5 pb-12">
                      {productsData
                        .filter(product => {
                          const matchesSearch = product.name.toLowerCase().includes(catalogSearch.toLowerCase()) || 
                                                product.category.toLowerCase().includes(catalogSearch.toLowerCase());
                          const matchesCategory = catalogCategory === "All" || 
                                                  product.category.toLowerCase() === catalogCategory.toLowerCase();
                          return matchesSearch && matchesCategory;
                        })
                        .sort((a, b) => {
                          if (catalogSort === "low-to-high") {
                            return a.priceUSD - b.priceUSD;
                          }
                          if (catalogSort === "high-to-low") {
                            return b.priceUSD - a.priceUSD;
                          }
                          return 0; // maintain original listing
                        })
                        .map(product => {
                          const hasSale = !!product.originalPriceUSD;
                          const isFav = favorites.includes(product.id);
                          
                          // Convert active display pricing sums into safe matching KES
                          const KESPrice = Math.round(product.priceUSD * 130);
                          const KESOriginal = product.originalPriceUSD ? Math.round(product.originalPriceUSD * 130) : undefined;

                          return (
                            <div
                              key={product.id}
                              onClick={() => handleViewProductDetail(product)}
                              className="bg-white border border-slate-200/60 rounded-[28px] overflow-hidden flex flex-col justify-between cursor-pointer group hover:shadow-xl hover:border-slate-300/80 transition-all duration-300 ease-out"
                            >
                              {/* Vector Illustration & Badge Cover */}
                              <div className="aspect-[10/9] bg-slate-50 relative flex items-center justify-center p-3.5 select-none overflow-hidden border-b border-slate-50">
                                
                                {/* Dynamic Badge like Discount percent or Best Seller */}
                                {product.badge && (
                                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black tracking-tight ${
                                    product.badgeType === "sale" || product.badge.includes("%")
                                      ? "bg-emerald-400 text-slate-950"
                                      : "bg-emerald-800 text-white"
                                  }`}>
                                    {product.badge}
                                  </span>
                                )}

                                {/* Favorite heart toggler */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggleFavorite(product.id);
                                  }}
                                  className={`absolute top-2.5 right-2.5 h-7.5 w-7.5 rounded-full bg-white/90 backdrop-blur-md shadow-xs flex items-center justify-center transition-all ${
                                    isFav ? "text-pink-500 bg-pink-50" : "text-slate-400 hover:text-slate-600"
                                  }`}
                                >
                                  <Heart size={13} className={isFav ? "fill-pink-500 stroke-pink-500" : ""} />
                                </button>

                                {/* High-Fidelity SVG Graphic with subtle bounce trigger on hover */}
                                <div className="w-full h-full max-w-[130px] max-h-[110px] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ease-out">
                                  <ProductImageRender name={product.name} />
                                </div>
                              </div>

                              {/* Product Information Body */}
                              <div className="p-3.5 space-y-1 relative bg-white">
                                <span className="text-[9px] font-black text-slate-400 tracking-wider uppercase block">
                                  {product.category}
                                </span>
                                
                                <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-tight truncate">
                                  {product.name}
                                </h4>

                                {/* Dynamic Rating block exact with screenshot styles */}
                                <div className="flex items-center space-x-1 pl-0.5">
                                  <Star size={11} className="fill-emerald-500 stroke-emerald-500 text-emerald-500" />
                                  <span className="text-[11px] font-bold text-slate-900">{product.rating.toFixed(1)}</span>
                                  <span className="text-[9.5px] text-slate-400 font-medium">
                                    ({product.reviewsCount >= 1000 ? `${(product.reviewsCount / 1000).toFixed(1)}k` : product.reviewsCount})
                                  </span>
                                </div>

                                {/* Dynamic Price & Cart Row */}
                                <div className="flex items-center justify-between pt-1.5 gap-2">
                                  <div className="space-y-0.2 shrink-0">
                                    {hasSale && KESOriginal && (
                                      <span className="text-[10px] line-through text-slate-400 block font-bold leading-none animate-fadeIn">
                                        KES {KESOriginal.toLocaleString()}
                                      </span>
                                    )}
                                    <span className="text-[12px] font-black text-slate-950 block leading-tight">
                                      KES {KESPrice.toLocaleString()}
                                    </span>
                                  </div>

                                  {/* Dynamic Basket push button container */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleAddToCart(product, product.colors[0].name, product.sizes[0]);
                                    }}
                                    className="p-2.5 bg-[#0C1E26] hover:bg-emerald-500 text-white hover:text-slate-950 rounded-xl transition-all duration-200 shadow-sm active:scale-95 cursor-pointer shrink-0"
                                  >
                                    <ShoppingBag size={13} />
                                  </button>
                                </div>

                              </div>

                            </div>
                          );
                        })}
                    </div>

                    {/* Empty search catalog notification state */}
                    {productsData.filter(product => {
                      const matchesSearch = product.name.toLowerCase().includes(catalogSearch.toLowerCase()) || 
                                            product.category.toLowerCase().includes(catalogSearch.toLowerCase());
                      const matchesCategory = catalogCategory === "All" || 
                                              product.category.toLowerCase() === catalogCategory.toLowerCase();
                      return matchesSearch && matchesCategory;
                    }).length === 0 && (
                      <div className="text-center py-16 px-5 space-y-3.5 animate-fadeIn">
                        <HelpCircle className="mx-auto text-slate-300 animate-bounce" size={38} />
                        <h4 className="text-sm font-black text-slate-800">No Catalog Matches Found</h4>
                        <p className="text-xs text-slate-400 max-w-[80%] mx-auto leading-relaxed">
                          We didn't find any products matching "{catalogSearch}" inside our {catalogCategory} department.
                        </p>
                        <button
                          onClick={() => {
                            setCatalogSearch("");
                            setCatalogCategory("All");
                          }}
                          className="px-4.5 py-2 bg-[#0C1E26] text-white text-xs font-bold rounded-xl active:scale-95 transition-all cursor-pointer"
                        >
                          Clear Filters
                        </button>
                      </div>
                    )}

                  </div>
                )}

                {/* SCREEN 1: THE PRODUCTS LANDING CATALOG (Exactly styled to matching screenshot) */}
                {phoneScreen === "home" && (
                  <div className="animate-fadeIn">
                    
                    {/* GIANT CURATED SEASONAL BANNER */}
                    <div className="bg-[#0b1b1b] text-white relative h-[360px] overflow-hidden flex flex-col justify-between">
                      {/* Dark Atmospheric Background image/gradient simulation */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#051111] via-[#0b2424] to-[#123838] opacity-95" />
                      
                      {/* Curated Silhouette Backdrop Simulation inside Canvas */}
                      <div className="absolute inset-y-0 right-0 w-2/3 opacity-30 pointer-events-none mix-blend-screen">
                        <svg viewBox="0 0 200 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 120,50 C 90,110 80,180 140,240" stroke="#22c55e" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
                          <circle cx="120" cy="90" r="30" fill="#22c55e" opacity="0.1" />
                          <ellipse cx="140" cy="220" rx="30" ry="80" fill="#22c55e" opacity="0.3" transform="rotate(-15, 140, 220)" />
                        </svg>
                      </div>

                      {/* Header Badge */}
                      <div className="pt-8 px-6 relative z-10">
                        <span className="bg-[#22c55e] text-[#051111] text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block">
                          SEASONAL ARRIVALS
                        </span>
                      </div>

                      {/* Copy Block */}
                      <div className="px-6 py-4 relative z-10 space-y-2">
                        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight leading-snug">
                          Modern Essentials for a Dynamic Life.
                        </h2>
                        <p className="text-[11px] text-slate-300 leading-relaxed max-w-[90%] font-medium">
                          Secure, seamless, and sophisticated. Discover our curated collection of high-performance gear and fashion-forward essentials.
                        </p>
                      </div>

                      {/* Button Controls */}
                      <div className="pb-8 px-6 relative z-10 flex items-center space-x-3">
                        <button 
                          onClick={() => handleViewProductDetail(productsData[2])} // Sneaker
                          className="px-5 py-2.5 bg-[#22c55e] hover:bg-[#1eb053] text-[#051111] font-extrabold text-xs rounded-lg transition-all duration-150 transform active:scale-95 cursor-pointer shadow-md"
                        >
                          Shop Now
                        </button>
                        <button 
                          onClick={() => {
                            setSelectedProduct(productsData[0]); // Smartwatch
                            setPhoneScreen("detail");
                          }}
                          className="px-5 py-2.5 border border-white/60 hover:bg-white/10 text-white font-extrabold text-xs rounded-lg transition-all duration-150 cursor-pointer"
                        >
                          View Lookbook
                        </button>
                      </div>
                    </div>


                    {/* FEATURED CATEGORIES SECTION */}
                    <div className="mt-8 px-5 space-y-3 font-sans">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                            Featured Categories
                          </h3>
                          <p className="text-[10px] text-slate-400">
                            Explore our wide range of premium collections
                          </p>
                        </div>
                        <button 
                          onClick={() => {
                            setActiveCategoryFilter("All");
                            setFeedbackToast("Loaded complete warehouse directory.");
                          }}
                          className="text-[11px] font-bold text-slate-800 flex items-center space-x-1"
                        >
                          <span>View All</span>
                          <ChevronRight size={12} />
                        </button>
                      </div>

                      {/* Horizontal Category Cards container */}
                      <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-2 select-none">
                        
                        {/* Electronics Category Card */}
                        <div 
                          onClick={() => setActiveCategoryFilter("All")}
                          className="min-w-[145px] w-[145px] h-[100px] rounded-2xl bg-slate-900 overflow-hidden relative group cursor-pointer border border-slate-800 shadow-xs"
                        >
                          <div className="absolute inset-0 bg-radial-to-br from-indigo-950/40 via-slate-950 to-slate-950" />
                          
                          {/* Inner technology laptop visual svg representation */}
                          <div className="absolute top-2 right-2 w-16 h-12 opacity-85 group-hover:scale-105 transition-transform duration-300">
                            <svg viewBox="0 0 60 40" fill="none" className="w-full h-full">
                              <rect x="12" y="8" width="36" height="20" rx="2" fill="#334155" stroke="#cbd5e1" strokeWidth="1" />
                              <rect x="15" y="11" width="30" height="14" fill="#0f172a" />
                              <path d="M 6,28 L 54,28 C 56,28 56,30 54,30 L 6,30 C 4,30 4,28 6,28 Z" fill="#cbd5e1" />
                            </svg>
                          </div>

                          <span className="absolute bottom-3 left-4 font-extrabold text-[12px] text-white tracking-wide">
                            Electronics
                          </span>
                        </div>

                        {/* Fashion Category Card */}
                        <div 
                          onClick={() => setActiveCategoryFilter("Sale")}
                          className="min-w-[145px] w-[145px] h-[100px] rounded-2xl bg-[#5c626e] overflow-hidden relative group cursor-pointer border border-slate-200 shadow-xs"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#acb1bb] to-[#484f5c] opacity-90" />
                          
                          {/* Inner apparel SVG visual stand */}
                          <div className="absolute top-1 right-2 w-14 h-16 opacity-85 group-hover:translate-y-0.5 transition-transform duration-300">
                            <svg viewBox="0 0 40 50" fill="none" className="w-full h-full">
                              <path d="M 8,45 L 32,45" stroke="#475569" strokeWidth="1.5" />
                              <path d="M 20,45 L 20,10" stroke="#475569" strokeWidth="1.5" />
                              <path d="M 12,18 L 28,18" stroke="#475569" strokeWidth="1.5" />
                              <path d="M 20,10 Q 20,6 23,8" stroke="#475569" strokeWidth="1" fill="none" />
                              {/* Hanger and dress clothes */}
                              <path d="M 14,18 L 11,35 L 29,35 L 26,18 Z" fill="#e2e8f0" stroke="#475569" opacity="0.9" />
                            </svg>
                          </div>

                          <span className="absolute bottom-3 left-4 font-extrabold text-[12px] text-white tracking-wide">
                            Fashion
                          </span>
                        </div>

                      </div>
                    </div>


                    {/* TRENDING NOW SECTION & FEED LIST */}
                    <div className="mt-8 px-5 space-y-4">
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                            Trending Now
                          </h3>
                          <p className="text-[10px] text-slate-400">
                            Top picks for you this week
                          </p>
                        </div>
                      </div>

                      {/* Interactive Filter Pills */}
                      <div className="flex items-center space-x-2 pb-1 bg-transparent select-none">
                        {[
                          { key: "All", label: "All" },
                          { key: "New", label: "New" },
                          { key: "Sale", label: "Sale" }
                        ].map(pill => (
                          <button
                            key={pill.key}
                            onClick={() => {
                              setActiveCategoryFilter(pill.key as any);
                              triggerAlertToast(`Filtered view directory by: ${pill.label}`);
                            }}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                              activeCategoryFilter === pill.key
                                ? "bg-slate-900 text-white shadow-md font-black"
                                : "bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300"
                            }`}
                          >
                            {pill.label}
                          </button>
                        ))}
                      </div>

                      {/* Search bar helper inside inner catalog */}
                      <div className="relative">
                        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search products..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full text-xs bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 focus:outline-hidden focus:border-slate-400 transition-all font-medium"
                        />
                        {searchQuery && (
                          <button 
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold"
                          >
                            Clear
                          </button>
                        )}
                      </div>

                      {/* Two Column Grid of Products Mapped elegantly */}
                      <div className="grid grid-cols-2 gap-4">
                        {filteredProducts.map(product => {
                          const hasSale = !!product.originalPriceUSD;
                          const isFav = favorites.includes(product.id);
                          
                          return (
                            <div 
                              key={product.id}
                              onClick={() => handleViewProductDetail(product)}
                              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden group hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                            >
                              {/* Thumbnail & Badging Container */}
                              <div className="aspect-square bg-slate-50 relative flex items-center justify-center p-3 select-none">
                                
                                {/* Sale Badge tag top left */}
                                {hasSale && (
                                  <span className="absolute top-2.5 left-2.5 bg-[#22c55e] text-[#051111] font-extrabold text-[8px] tracking-wider px-2 py-1 rounded">
                                    {product.badge || "SALE"}
                                  </span>
                                )}

                                {/* Favorite button top right */}
                                <button
                                  onClick={(e) => handleToggleFavorite(product.id, e)}
                                  className={`absolute top-2.5 right-2.5 h-7 w-7 rounded-full bg-white shadow-xs border flex items-center justify-center transition-all duration-150 z-20 ${
                                    isFav ? "text-pink-500 border-pink-100 bg-pink-50" : "text-slate-400 border-slate-100 hover:text-slate-600"
                                  }`}
                                >
                                  <Heart size={13} className={isFav ? "fill-pink-500 stroke-pink-500" : ""} />
                                </button>

                                {/* Dynamic Vector Render */}
                                <div className="w-full h-full max-w-[110px] max-h-[110px] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                  <ProductImageRender name={product.name} />
                                </div>
                              </div>

                              {/* Catalog item text data block */}
                              <div className="p-3.5 bg-white border-t border-slate-50 space-y-1 relative">
                                <span className="text-[8px] font-black text-rose-500 tracking-wider uppercase block">
                                  {product.tagline}
                                </span>
                                
                                <h4 className="text-xs font-bold text-slate-900 leading-tight tracking-tight truncate">
                                  {product.name}
                                </h4>

                                <div className="flex items-center justify-between pt-1">
                                  <div className="space-y-0.5">
                                    <span className="text-xs font-black text-slate-900 block">
                                      ${product.priceUSD.toFixed(2)}
                                    </span>
                                    {hasSale && (
                                      <span className="text-[9px] line-through text-slate-400 block font-medium">
                                        ${product.originalPriceUSD?.toFixed(2)}
                                      </span>
                                    )}
                                  </div>

                                  {/* Add to small blue cart launcher button */}
                                  <button
                                    onClick={(e) => handleFeaturedQuickCart(product, e)}
                                    className="p-2 bg-[#0C1E26] hover:bg-[#163644] text-white rounded-lg transition-colors cursor-pointer select-none"
                                  >
                                    <ShoppingCart size={12} className="text-emerald-400" />
                                  </button>
                                </div>
                              </div>

                            </div>
                          );
                        })}
                      </div>

                      {filteredProducts.length === 0 && (
                        <div className="text-center py-8 space-y-2">
                          <HelpCircle className="mx-auto text-slate-300" size={32} />
                          <p className="text-xs font-bold text-slate-500">No products found matching "{searchQuery}"</p>
                          <button 
                            onClick={() => { setSearchQuery(""); setActiveCategoryFilter("All"); }}
                            className="text-xs text-emerald-600 font-extrabold"
                          >
                            Reset filters
                          </button>
                        </div>
                      )}

                    </div>

                    {/* TRUSTED PAYMENTS VIA M-PESA LOGO COMPONENT */}
                    <div className="mt-8 mx-5 bg-[#0C1E26] text-white rounded-2xl p-5 border border-slate-700 space-y-3 shadow-md relative overflow-hidden">
                      <div className="absolute -right-8 -bottom-8 opacity-5">
                        <ShieldCheck size={96} />
                      </div>

                      <div className="flex items-center space-x-2.5 relative z-10">
                        <div className="h-6 w-6 rounded-md bg-emerald-500 flex items-center justify-center text-slate-950">
                          <ShieldCheck size={16} />
                        </div>
                        <h4 className="text-xs font-black tracking-normal uppercase text-emerald-400 font-sans">
                          Trusted Payments via M-Pesa
                        </h4>
                      </div>

                      <p className="text-[10px] text-slate-300 leading-relaxed font-sans relative z-10">
                        Experience lightning-fast checkout with our integrated mobile payment systems. Your transactions are secure, encrypted, and instantaneous.
                      </p>
                    </div>

                    {/* NEWSLETTER FORM */}
                    <div className="mt-8 px-5">
                      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3.5">
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-slate-900 flex items-center">
                            <Mail size={12} className="text-slate-800 mr-1.5" /> Newsletter
                          </h4>
                          <p className="text-[10px] text-slate-400">Subscribe for custom deals and sandbox guides.</p>
                        </div>

                        <form onSubmit={handleSubscribeNewsletter} className="flex flex-col gap-2">
                          <input
                            type="email"
                            placeholder="Enter email for weekly deals"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-[11px] focus:outline-hidden focus:border-slate-400 font-medium"
                          />
                          <button 
                            type="submit"
                            className="w-full bg-[#1aa254] hover:bg-[#158243] text-white text-[11px] font-extrabold py-2.5 rounded-xl uppercase tracking-wider transition-colors cursor-pointer text-center"
                          >
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>

                  </div>
                )}


                {/* SCREEN 2: HIGH-FIDELITY INTERACTIVE PRODUCT DETAILS PRESET */}
                {phoneScreen === "detail" && (
                  <div className="animate-fadeIn p-5 space-y-6">
                    
                    {/* Header back & favorites layout link */}
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => setPhoneScreen("home")}
                        className="flex items-center space-x-1 p-2 text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <ArrowLeft size={16} />
                        <span className="text-xs font-extrabold font-sans">Store Catalog</span>
                      </button>

                      <button
                        onClick={() => handleToggleFavorite(selectedProduct.id)}
                        className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all ${
                          favorites.includes(selectedProduct.id)
                            ? "bg-pink-50 border-pink-100 text-pink-500"
                            : "bg-white border-slate-200 text-slate-400 hover:text-slate-600"
                        }`}
                      >
                        <Heart size={14} className={favorites.includes(selectedProduct.id) ? "fill-pink-500" : ""} />
                      </button>
                    </div>

                    {/* Product visual information core display */}
                    <div className="space-y-2">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-100 rounded px-2 py-0.5 text-[8px] uppercase tracking-wider font-extrabold inline-block">
                        {selectedProduct.category} • {selectedProduct.tag}
                      </span>
                      <h2 className="text-lg font-extrabold text-[#0D0F12] tracking-tight">{selectedProduct.name}</h2>
                      
                      {/* Rating details display */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-amber-500">
                          <Star size={11} className="fill-amber-500" />
                          <Star size={11} className="fill-amber-500" />
                          <Star size={11} className="fill-amber-500" />
                          <Star size={11} className="fill-amber-500" />
                          <Star size={11} className="fill-amber-500" />
                        </div>
                        <span className="text-[11px] font-black text-slate-900">{selectedProduct.rating.toFixed(1)}</span>
                        <span className="text-[10px] text-slate-400">({selectedProduct.reviewsCount} verified reviews)</span>
                      </div>
                    </div>

                    {/* Large high contrast vector presentation studio viewport */}
                    <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-4 min-h-[180px] flex items-center justify-center relative shadow-inner overflow-hidden">
                      <div className="absolute inset-0 bg-radial-to-b from-white to-transparent opacity-60" />
                      <div className="w-full max-w-[180px] aspect-square flex items-center justify-center">
                        <ProductImageRender 
                          name={selectedProduct.name} 
                          colorSpecs={selectedProduct.colors.find(c => c.name === selectedColor)} 
                        />
                      </div>
                    </div>

                    {/* Color selection dots picker */}
                    <div className="space-y-2.5">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                        Select active dynamic Shade: <span className="text-slate-800 font-extrabold normal-case font-sans ml-1 text-xs">{selectedColor}</span>
                      </h4>
                      <div className="flex items-center space-x-3 select-none">
                        {selectedProduct.colors.map(color => (
                          <div 
                            key={color.name}
                            onClick={() => {
                              setSelectedColor(color.name);
                              triggerAlertToast(`Product painted shade config: ${color.name}`);
                            }}
                            className={`h-8 w-8 rounded-full border flex items-center justify-center cursor-pointer transition-all dynamic-ring ${
                              selectedColor === color.name 
                                ? "border-slate-800 scale-110 shadow-sm"
                                : "border-slate-150 hover:border-slate-300"
                            }`}
                          >
                            <span 
                              className="h-5.5 w-5.5 rounded-full inline-block"
                              style={{ backgroundColor: color.hex }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sizing guides layout buttons */}
                    <div className="space-y-2.5 font-sans">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                        Select Standard Dimensions: <span className="text-slate-800 font-extrabold font-sans ml-1 text-xs">UK {selectedSize}</span>
                      </h4>
                      <div className="flex flex-wrap gap-2 select-none">
                        {selectedProduct.sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => {
                              setSelectedSize(size);
                              triggerAlertToast(`Configured UK size metric: ${size}`);
                            }}
                            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              selectedSize === size
                                ? "bg-slate-900 border-slate-950 text-white"
                                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            Size {size}
                          </button>
                        ))}
                        {/* Greyed out helper display option to represent actual stock limit simulation */}
                        <button 
                          disabled 
                          className="px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed cursor-pointer"
                        >
                          Size 12 (Out Of Stock)
                        </button>
                      </div>
                    </div>

                    {/* Description Write-up block */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Specifications & Description</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">{selectedProduct.description}</p>
                    </div>

                    {/* Safaricom instant M-Pesa pay sandbox trigger */}
                    <div className="bg-emerald-50 rounded-2xl p-4.5 border border-emerald-100 space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold text-[#113d11] tracking-wider uppercase font-sans">INSTANT checkout sandbox</span>
                        <span className="text-2xs bg-emerald-100 text-[#144f14] font-black tracking-normal px-2.5 py-0.5 rounded-full uppercase">LIPA NA M-PESA</span>
                      </div>
                      <p className="text-[11px] text-emerald-800 leading-relaxed font-sans">
                        Skip shopping cart aggregation and authorize checkout telemetry direct with Safaricom.
                      </p>
                      
                      <div className="flex items-center justify-between bg-white border border-emerald-200 rounded-xl p-3">
                        <span className="text-xs font-bold text-slate-600">Sim price:</span>
                        <div className="text-right">
                          <span className="text-xs line-through text-slate-400 font-bold block">${(selectedProduct.priceUSD * 1.2).toFixed(2)}</span>
                          <span className="text-xs text-slate-900 font-extrabold mr-1 block">${selectedProduct.priceUSD.toFixed(2)}</span>
                          <span className="text-[10px] font-black text-emerald-700 block bg-emerald-50 px-1.5 py-0.5 rounded mt-0.5">
                            KES {(selectedProduct.priceUSD * 130).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={handleInitiateMpesaCheckout}
                        className="w-full bg-[#1AA254] hover:bg-[#158243] text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-150 transform active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer text-center"
                      >
                        ⚡ Checkout via M-Pesa
                      </button>
                    </div>

                    {/* REVIEWS SEGMENT INDEX LOOP */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-extrabold text-slate-900 tracking-tight flex items-center">
                          <Users size={14} className="text-slate-500 mr-1" /> Customer Experiences
                        </h4>
                        <button 
                          onClick={() => setShowReviewForm(!showReviewForm)}
                          className="text-2xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                        >
                          {showReviewForm ? "Collapse Form" : "Write a Review"}
                        </button>
                      </div>

                      {/* Add reviews dynamic local form */}
                      {showReviewForm && (
                        <form onSubmit={handleReviewSubmission} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3.5 animate-fadeIn">
                          <h5 className="text-xs font-black text-slate-800 font-sans">Append Test Verified valuation entry:</h5>
                          
                          <div className="space-y-1">
                            <label className="text-2xs text-slate-400 block font-bold">YOUR NAME</label>
                            <input
                              type="text"
                              value={reviewName}
                              onChange={(e) => setReviewName(e.target.value)}
                              placeholder="e.g. Mary Wanjiru"
                              required
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-hidden font-medium"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-2xs text-slate-400 block font-bold">SCORE CARD RATING</label>
                            <select
                              value={reviewRating}
                              onChange={(e) => setReviewRating(Number(e.target.value))}
                              className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-2 text-xs focus:outline-hidden font-bold"
                            >
                              <option value="5">⭐⭐⭐⭐⭐ Excellent (5 Stars)</option>
                              <option value="4">⭐⭐⭐⭐ Great (4 Stars)</option>
                              <option value="3">⭐⭐⭐ Standard (3 Stars)</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-2xs text-slate-400 block font-bold font-sans">REVIEW CONTENT COMMENT</label>
                            <textarea
                              rows={3}
                              value={reviewText}
                              onChange={(e) => setReviewText(e.target.value)}
                              placeholder="Type performance feedback..."
                              required
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-hidden font-medium"
                            />
                          </div>

                          <button 
                            type="submit"
                            className="bg-slate-900 text-white font-extrabold text-[10px] uppercase px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            Submit Verified review
                          </button>
                        </form>
                      )}

                      {/* Map reviews dynamic registry collection lists */}
                      <div className="space-y-3 animate-fadeIn">
                        {(productReviews[selectedProduct.id] || []).map(review => (
                          <div key={review.id} className="bg-[#FAF9F6]/80 p-3.5 rounded-xl border border-slate-200/60 text-left space-y-1 font-sans">
                            <div className="flex items-center justify-between">
                              <span className="font-extrabold text-slate-800 text-xs">{review.author}</span>
                              <span className="text-[9px] text-slate-400 font-mono font-medium">{review.date}</span>
                            </div>

                            <div className="flex items-center justify-between text-[10px]">
                              <div className="flex items-center text-amber-500">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} size={8} className="fill-amber-500 stroke-amber-500" />
                                ))}
                              </div>
                              <span className="bg-emerald-500/10 text-emerald-800 font-black px-1.5 py-0.5 rounded text-[8px]">
                                {review.tag}
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-600 leading-relaxed font-sans mt-1">
                              {review.comment}
                            </p>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Absolute panel trigger cart at foot */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                      <button 
                        onClick={() => handleAddToCart(selectedProduct, selectedColor, selectedSize)}
                        className="flex-1 h-11 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl flex items-center justify-center space-x-2 transition-all duration-150 transform active:scale-95 shadow-lg shadow-slate-900/10 cursor-pointer"
                      >
                        <ShoppingCart size={13} className="text-emerald-400" />
                        <span>Add into Cart basket</span>
                      </button>
                    </div>

                  </div>
                )}


                {/* SCREEN 3: SHOPPING CART SCREEN SECTION */}
                {phoneScreen === "cart" && (
                  <div className="animate-fadeIn p-5 space-y-6">
                    
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => setPhoneScreen("home")}
                        className="flex items-center space-x-1 p-2 text-slate-500 hover:text-slate-900"
                      >
                        <ArrowLeft size={16} />
                        <span className="text-xs font-bold font-sans">Catalog</span>
                      </button>
                      <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-sans">
                        Dynamic Cart Assembly
                      </h3>
                    </div>

                    {cart.length === 0 ? (
                      <div className="text-center py-16 space-y-3">
                        <ShoppingBag size={42} className="mx-auto text-slate-300 animate-bounce" />
                        <h4 className="text-sm font-extrabold text-slate-900">Your Basket is Empty</h4>
                        <p className="text-2xs text-slate-500 leading-relaxed font-sans max-w-[80%] mx-auto">
                          Browse our trending tech & design collections on the homepage to register items!
                        </p>
                        <button 
                          onClick={() => setPhoneScreen("home")}
                          className="px-4 py-2.5 bg-slate-900 text-white font-extrabold text-xs rounded-xl hover:bg-slate-800 cursor-pointer"
                        >
                          Discover Products
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 animate-fadeIn">
                        
                        {/* Selected items column */}
                        <div className="space-y-3.5 max-h-[300px] overflow-y-auto no-scrollbar pr-1">
                          {cart.map((item, idx) => (
                            <div 
                              key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                              className="flex items-center justify-between bg-white border border-slate-200/80 p-3 rounded-2xl gap-3 shadow-xs"
                            >
                              {/* Vector thumbnail */}
                              <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center p-1.5 shrink-0">
                                <ProductImageRender name={item.product.name} />
                              </div>

                              {/* Text info block */}
                              <div className="flex-grow min-w-0">
                                <h4 className="text-xs font-bold text-slate-900 truncate tracking-tight">{item.product.name}</h4>
                                <span className="text-[9px] font-bold text-slate-400 block leading-none font-sans mt-0.5">
                                  Size {item.selectedSize} | {item.selectedColor}
                                </span>
                                <span className="text-[11px] font-black text-slate-900 block mt-1">
                                  ${(item.product.priceUSD * item.quantity).toFixed(2)}
                                </span>
                              </div>

                              {/* Count Adjusters */}
                              <div className="flex items-center space-x-1.5 border border-slate-200 rounded-xl p-1 bg-slate-50 select-none">
                                <button 
                                  onClick={() => adjustCartQty(idx, -1)}
                                  className="h-6 w-6 rounded-lg hover:bg-white text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer font-bold"
                                >
                                  <Minus size={11} strokeWidth={3} />
                                </button>
                                <span className="text-xs font-black px-1 text-slate-800">{item.quantity}</span>
                                <button 
                                  onClick={() => adjustCartQty(idx, 1)}
                                  className="h-6 w-6 rounded-lg hover:bg-white text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer font-bold"
                                >
                                  <Plus size={11} strokeWidth={3} />
                                </button>
                              </div>

                            </div>
                          ))}
                        </div>

                        {/* Order Sum block */}
                        <div className="bg-slate-50 rounded-2xl p-4.5 border border-slate-200/80 space-y-3 font-sans">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Basket Summary</h4>
                          <div className="divide-y divide-slate-200/50 space-y-2 text-xs">
                            <div className="flex justify-between font-bold pt-1.5">
                              <span className="text-slate-500">Subtotal value:</span>
                              <span className="text-slate-900">${getCartTotalUSD().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold pt-1.5">
                              <span className="text-slate-500">Sim Shipping:</span>
                              <span className="text-emerald-600 uppercase">FREE SHIPPING</span>
                            </div>
                            <div className="flex justify-between font-extrabold pt-2 text-sm text-slate-950">
                              <span className="font-extrabold">Total KES Conversion:</span>
                              <span className="text-slate-950 font-black">KES {getCartTotalKES().toLocaleString()}</span>
                            </div>
                          </div>
                        </div>

                        {/* Safaricom phone checkout triggers */}
                        <div className="bg-emerald-50 rounded-2xl p-4.5 border border-emerald-100 space-y-3.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-[#113d11] tracking-wider uppercase font-sans">LIPA NA M-PESA GATEWAY</span>
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          </div>

                          <div className="space-y-1.5 font-sans">
                            <label className="text-2xs text-[#144f14] font-black uppercase tracking-wider block">Customer Mobile account number:</label>
                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="e.g. 0712345678"
                              className="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2 text-xs tracking-wider focus:outline-hidden font-bold"
                            />
                            <p className="text-[9px] text-[#1e5d1e] font-sans">
                              Safaricom Daraja API will initiate an STK push connection payload directed to this account number.
                            </p>
                          </div>

                          <button
                            onClick={handleInitiateMpesaCheckout}
                            className="w-full bg-[#1AA254] hover:bg-[#158243] text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-150 transform active:scale-95 shadow-lg shadow-emerald-500/15 cursor-pointer text-center"
                          >
                            ⚡ Secure Checkout via M-Pesa
                          </button>
                        </div>

                      </div>
                    )}

                  </div>
                )}


                {/* SCREEN 4: SANDBOX PROFILE & RECEIPT SUMMARY LOGS */}
                {phoneScreen === "profile" && (
                  <div className="animate-fadeIn p-5 space-y-6">
                    <h3 className="text-sm font-extrabold text-slate-900 tracking-tight font-sans">
                      Your Sandbox Profile & Receipts
                    </h3>
                    
                    {/* Simulator configurations info card */}
                    <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200/80 space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                        <h4 className="text-xs font-extrabold text-slate-800">Mockup Sandbox Configs</h4>
                      </div>
                      
                      <div className="space-y-1.5 text-2xs font-mono text-slate-500 leading-relaxed">
                        <div className="flex justify-between">
                          <span>Paybill Shortcode:</span>
                          <span className="font-extrabold text-slate-900">{mpesaShortCode}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Default Phone:</span>
                          <span className="font-extrabold text-slate-900">{phoneNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Verified Orders Count:</span>
                          <span className="font-extrabold text-slate-900">1 (col_ord_41a98)</span>
                        </div>
                      </div>
                    </div>

                    {/* Standard simulated orders receipt */}
                    <div className="space-y-3 font-sans">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Order Receipts Registry</h4>
                      
                      <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2 text-left relative overflow-hidden shadow-xs">
                        <div className="absolute right-3 top-3 bg-emerald-500/10 text-emerald-800 text-[8px] font-black px-2 py-0.5 rounded-full uppercase">
                          PAID & VERIFIED
                        </div>

                        <span className="text-[9px] font-bold text-slate-400 block uppercase font-mono">receipt code: KF21M30X9Z</span>
                        <h5 className="text-xs font-bold text-slate-950 font-sans">SwiftFlow Sandbox Order</h5>
                        
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-2xs font-mono text-slate-500 leading-none">
                          <span>Price sum: KES 12,499.00</span>
                          <span>Paybill: {mpesaShortCode}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl space-y-1">
                      <h4 className="text-xs font-bold text-indigo-950">Development Tip</h4>
                      <p className="text-[10px] text-indigo-800 leading-relaxed">
                        Real databases require production backend endpoints to store orders. In this client-only simulator, we use local state hooks array storage to display evaluations and transactions instantly.
                      </p>
                    </div>

                  </div>
                )}

              </div>

              {/* --- PORTABLE BOTTOM GRAPHIC ACTION BAR (Saves space & matches layout) --- */}
              <nav 
                className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-3 pb-5 flex items-center justify-around z-30 select-none shadow-xs"
                id="smartphone-bottom-navigation"
              >
                {[
                  { key: "home", label: "Home", icon: Home },
                  { key: "catalog", label: "Catalog", icon: Grid },
                  { key: "cart", label: "Cart", icon: ShoppingBag, badge: cartCount },
                  { key: "profile", label: "Profile", icon: User }
                ].map(tab => {
                  const Icon = tab.icon;
                  const isActive = phoneScreen === tab.key;
                  
                  return (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setPhoneScreen(tab.key as any);
                        // Reset search directory query
                        if (tab.key === "home") {
                          setSearchQuery("");
                          setActiveCategoryFilter("All");
                        }
                      }}
                      className={`flex items-center space-x-1.5 px-3 py-2 rounded-full transition-all duration-200 relative cursor-pointer ${
                        isActive 
                          ? "bg-emerald-500 text-slate-950 font-black scale-102"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <Icon size={15} strokeWidth={isActive ? 3 : 2} />
                      
                      {isActive && (
                        <span className="text-[11px] font-bold tracking-tight">
                          {tab.label}
                        </span>
                      )}

                      {/* Floating dynamic tally status */}
                      {!isActive && tab.badge !== undefined && tab.badge > 0 && (
                        <span className="absolute top-1 right-2 h-3.5 w-3.5 bg-rose-500 border border-white text-white text-[8px] rounded-full flex items-center justify-center font-black">
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

            </div>

            {/* --- SAVARICOM LIPA NA M-PESA SIMULATOR OVERLAYS FOR SECURE HANDSHAKE DESIGN --- */}
            {mpesaPaymentState !== "idle" && (
              <div 
                className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs z-50 flex items-center justify-center p-5 select-none animate-fadeIn"
                id="mpesa-simulation-frame"
              >
                {/* Micro Keypad frame */}
                {mpesaPaymentState === "entering_pin" && (
                  <div className="bg-white rounded-3xl p-5 w-full max-w-[320px] shadow-2xl border border-slate-200 text-center space-y-5">
                    
                    <div className="space-y-1">
                      <span className="text-2xs bg-emerald-500 text-slate-950 font-black px-3 py-1 rounded-full uppercase tracking-wider">LIPA NA M-PESA</span>
                      <h4 className="text-xs font-bold text-slate-600 block pt-1 leading-snug font-mono">
                        Paybill Name: SWIFTSHOP
                      </h4>
                      <h4 className="text-xs font-bold text-slate-500 block leading-snug font-mono">
                        Shortcode Number: {mpesaShortCode}
                      </h4>
                      <h4 className="text-xs font-black text-rose-600 block font-sans">
                        Billing Total: KES {phoneScreen === "detail" ? (selectedProduct.priceUSD * 130).toLocaleString() : getCartTotalKES().toLocaleString()}
                      </h4>
                    </div>

                    <div className="space-y-2">
                      <label className="text-3xs uppercase text-slate-400 font-extrabold tracking-wider block font-mono">Enter 4-Digit Secret mobile Wallet PIN:</label>
                      <input
                        type="password"
                        maxLength={4}
                        readOnly
                        value={simPin}
                        placeholder="••••"
                        className="w-2/3 mx-auto text-lg text-center border-b-2 border-slate-300 focus:outline-hidden tracking-widest font-mono font-black py-1.5 focus:border-emerald-500 block text-slate-900 bg-slate-100 rounded-lg"
                      />
                    </div>

                    {/* Numeric custom keypad for premium interactive experience */}
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => {
                            if (simPin.length < 4) setSimPin(prev => prev + num);
                          }}
                          className="h-10 rounded-xl bg-slate-50 text-slate-800 font-extrabold text-xs active:bg-slate-200 border border-slate-100 transition-colors cursor-pointer"
                        >
                          {num}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setSimPin("")}
                        className="h-10 rounded-xl bg-rose-50 text-rose-600 font-bold text-2xs uppercase tracking-tight flex items-center justify-center active:bg-rose-100 cursor-pointer"
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (simPin.length < 4) setSimPin(prev => prev + "0");
                        }}
                        className="h-10 rounded-xl bg-slate-50 text-slate-800 font-extrabold text-xs active:bg-slate-200 border border-slate-100 cursor-pointer"
                      >
                        0
                      </button>
                      <button
                        type="button"
                        onClick={handleExecuteMpesaTelemetry}
                        className="h-10 rounded-xl bg-emerald-500 text-slate-950 font-black text-2xs uppercase tracking-tight flex items-center justify-center active:bg-emerald-600 hover:scale-102 transition-transform cursor-pointer"
                      >
                        Send
                      </button>
                    </div>

                    <button 
                      onClick={() => setMpesaPaymentState("idle")}
                      className="text-3xs tracking-widest uppercase font-extrabold text-slate-400 hover:text-slate-600 block w-full pt-1 cursor-pointer"
                    >
                      Cancel transaction
                    </button>

                  </div>
                )}

                {/* Processing Sandbox logs screen */}
                {mpesaPaymentState === "processing" && (
                  <div className="bg-slate-950 rounded-3xl p-5 w-full max-w-[340px] shadow-2xl border border-slate-800 text-left space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-[#1e293b] text-emerald-400 font-bold px-2.5 py-0.5 rounded uppercase font-mono tracking-wider">DARAJA API STREAM</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    </div>

                    <p className="text-3xs text-slate-400 leading-normal font-sans">
                      Active tracking of Daraja SDK OAuth queries, SSL handshakes, and webhook logs.
                    </p>

                    {/* Sim Logs console output */}
                    <div className="bg-[#090d16] border border-slate-900 rounded-xl p-3.5 h-[240px] overflow-y-auto no-scrollbar font-mono text-[9px] text-[#4ade80] space-y-2 leading-relaxed">
                      {simTerminalLogs.map((log, i) => (
                        <div key={i} className="animate-fadeIn">
                          <span className="text-slate-500 mr-1.5">{`>`}</span>
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-3xs text-slate-500 animate-pulse font-mono">Executing system operations. Let's study callback payloads...</p>
                    </div>
                  </div>
                )}

                {/* Successful Payment Receipt */}
                {mpesaPaymentState === "success" && (
                  <div className="bg-white rounded-3xl p-5 w-full max-w-[320px] shadow-2xl border border-slate-200 text-center space-y-5 animate-fadeIn">
                    
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle size={26} />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-slate-900 leading-none">Payment Succeeded!</h4>
                      <p className="text-3xs text-slate-400">Transaction authenticated by Safaricom ledger nodes.</p>
                    </div>

                    {/* Receipt breakdown */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-2 font-mono text-3xs">
                      <div className="flex justify-between font-bold text-slate-400">
                        <span>LIPA NA M-PESA RECEIPT</span>
                        <span className="text-emerald-600 font-black">CONFIRMED</span>
                      </div>
                      <hr className="border-slate-200/50" />
                      
                      <div className="grid grid-cols-2 gap-y-1 text-slate-500">
                        <span>Transaction key:</span>
                        <span className="text-slate-950 text-right font-extrabold">{orderReceiptId}</span>

                        <span>Local Mongo status:</span>
                        <span className="text-[#005161] text-right font-black">col_ord_41a98</span>

                        <span>Shortcode Paid:</span>
                        <span className="text-slate-950 text-right">{mpesaShortCode}</span>

                        <span>Total KES sum:</span>
                        <span className="text-emerald-700 font-black text-right">
                          KES {phoneScreen === "detail" ? (selectedProduct.priceUSD * 130).toLocaleString() : getCartTotalKES().toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setMpesaPaymentState("idle")}
                      className="w-full bg-[#1AA254] hover:bg-[#158243] text-white py-2.5 rounded-xl text-3xs font-extrabold uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      Return to Sandbox View
                    </button>

                  </div>
                )}

              </div>
            )}

          </div>
        </section>

        {/* ==================== RIGHT COLUMN: DEVELOPMENT ACADEMY PORTAL (5 Columns) ==================== */}
        {/* Mapped perfectly to state structures to inspect local variables reactively */}
        <AcademyPortal 
          selectedProduct={selectedProduct}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          cartCount={cartCount}
          isFavorited={favorites.includes(selectedProduct.id)}
          mpesaPaymentState={mpesaPaymentState}
          academyTab={academyTab}
          setAcademyTab={setAcademyTab}
          phoneNumber={phoneNumber}
          mpesaShortCode={mpesaShortCode}
        />

      </main>

      {/* Main outer Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 px-6 text-center text-xs text-slate-400 font-sans">
        <p>© 2026 ShopSwift Premium Showcase Sandbox. Designed for structural layout and payment integration tutorials.</p>
      </footer>
    </div>
  );
}
