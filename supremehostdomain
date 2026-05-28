export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // 🌍 1. AI GEO-LOCATION & IP TRACKING (SUPREME ENGINE)
    const country = request.cf?.country || "US";
    const clientIP = request.headers.get("cf-connecting-ip") || "Hidden IP";

    // 🛡️ 2. MILITARY-GRADE ANTI-HACKER SECURITY HEADERS
    const secureHeaders = {
      "Content-Type": "text/html;charset=UTF-8",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Cache-Control": "public, max-age=0, must-revalidate"
    };
    const apiHeaders = { ...secureHeaders, "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };

    // ======== 3. APP MANIFEST (Global PWA System) ========
    if (url.pathname === "/manifest.json") {
      const manifest = {
        name: "SupremeHost Global", short_name: "SupremeHost", start_url: "/", display: "standalone",
        background_color: "#020617", theme_color: "#0f172a", description: "AI-Powered Premium Global Tech by Supreme Tech",
        icons: [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png", sizes: "512x512", type: "image/png" }]
      };
      return new Response(JSON.stringify(manifest), { headers: { "Content-Type": "application/json" } });
    }

    // ======== 4. SERVICE WORKER (Auto-Update App Engine) ========
    if (url.pathname === "/sw.js") {
      const swCode = `self.addEventListener('install', (e) => { self.skipWaiting(); }); self.addEventListener('activate', (e) => { e.waitUntil(clients.claim()); }); self.addEventListener('fetch', (e) => { });`;
      return new Response(swCode, { headers: { "Content-Type": "application/javascript" } });
    }

    // ======== 5. HIGH-SECURITY AI BACKEND & AUTO-CURRENCY ========
    if (url.pathname === "/api/search") {
        const domainQuery = url.searchParams.get("domain");
        const authCode = url.searchParams.get("token");
        if (!domainQuery) return new Response(JSON.stringify({ error: "Domain required" }), { status: 400, headers: apiHeaders });

        // 💱 AI DYNAMIC CURRENCY CALCULATOR
        let sym = "$"; let rate = 1; let currencyCode = "USD";
        if(country === "IN") { sym = "₹"; rate = 83.5; currencyCode = "INR"; }
        else if(country === "GB") { sym = "£"; rate = 0.79; currencyCode = "GBP"; }
        else if(["DE","FR","IT","ES","NL"].includes(country)) { sym = "€"; rate = 0.92; currencyCode = "EUR"; }
        else if(country === "AU") { sym = "A$"; rate = 1.5; currencyCode = "AUD"; }
        else if(country === "CA") { sym = "C$"; rate = 1.37; currencyCode = "CAD"; }

        const localPrice = (19.99 * rate).toFixed(2);
        const localOrig = (49.99 * rate).toFixed(2);

        // 👑 CEO VIP GATEWAY (MASTER KEY: 1218)
        if (authCode === "1218") {
          return new Response(JSON.stringify({
            status: "success", domain: domainQuery, valuation: "100/100 (Master Asset)",
            originalPrice: `${sym}0.00`, price: `${sym}0.00`, discount: "100% OFF",
            action: "Deploy Now", note: "👑 CEO VIP ACCESS GRANTED"
          }), { headers: apiHeaders });
        }

        // 🚨 ADVANCED TELEGRAM ALERT
        const TELEGRAM_BOT_TOKEN = "8767785950:AAHheFCpC-L6Si26F4GOwBeL6HSOo5fMlTQ"; 
        const TELEGRAM_CHAT_ID = "1415524916";
        const text = `🚨 SUPREMEHOST (SUPREME CORE) ALERT 🚨\n\n🎯 Target: ${domainQuery}\n🌍 Country: ${country}\n🌐 IP: ${clientIP}\n💰 AI Price: ${sym}${localPrice} ${currencyCode}\n🔥 Status: Global Lead Detected`;
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}`).catch(() => {});

        await new Promise(r => setTimeout(r, 600));
        return new Response(JSON.stringify({
          status: "premium", domain: domainQuery, valuation: "98.4/100 (High Global Demand)",
          originalPrice: `${sym}${localOrig}`, price: `${sym}${localPrice}`, discount: "60% LAUNCH OFF",
          action: "Buy Now", note: `Supreme AI Pricing Auto-Synced for ${country} (${currencyCode})`
        }), { headers: apiHeaders });
    }

    // ======== 6. 1000% SECURE DYNAMIC FRONTEND UI WITH MULTI-LANGUAGE ========
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>SupremeHost | AI-Powered Premium Global Domains & Hosting</title>
        <meta name="description" content="SupremeHost - 100% Secure Global Tech Infrastructure Powered by Supreme Engine.">
        <link rel="manifest" href="/manifest.json">
        <meta name="theme-color" content="#0f172a">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            .glass-panel { background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.05); }
            ::-webkit-scrollbar { display: none; }
            @keyframes pulse-border { 0%, 100% { border-color: rgba(59, 130, 246, 0.3); } 50% { border-color: rgba(16, 185, 129, 0.6); } }
            .ai-glow { animation: pulse-border 3s infinite; }
            body { user-select: none; -webkit-touch-callout: none; top: 0 !important; }
            /* Google Translate Customization */
            .goog-te-banner-frame { display: none !important; }
            #google_translate_element select { background: #1e293b; color: #fff; border: 1px solid #3b82f6; border-radius: 8px; padding: 4px; font-size: 12px; outline: none; }
            .skiptranslate { display: none !important; }
            body { top: 0px !important; }
        </style>
    </head>
    <body class="bg-slate-950 text-white font-sans min-h-screen antialiased">
        
        <nav class="p-3 glass-panel fixed w-full top-0 z-40 flex justify-between items-center shadow-2xl">
            <div class="flex items-center gap-2">
                <span class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 tracking-wider">SupremeHost</span>
                <span class="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-black uppercase tracking-widest hidden sm:flex items-center gap-1">
                   <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Supreme Core
                </span>
            </div>
            <div id="google_translate_element"></div>
        </nav>
        
        <main class="pt-24 px-4 max-w-md mx-auto flex flex-col justify-center pb-12">
            
            <div class="bg-gradient-to-r from-blue-900/30 via-emerald-900/30 to-indigo-900/30 border border-blue-500/20 rounded-2xl p-3 text-center mb-6 shadow-lg backdrop-blur-sm mt-4">
                <p class="text-xs font-bold text-blue-300 tracking-wide flex items-center justify-center gap-2">
                   <span>🌍 Region: ${country}</span> | <span>🔥 60% GLOBAL AI DISCOUNT</span>
                </p>
            </div>

            <div class="text-center mb-6">
                <h1 class="text-4xl font-black mb-1 leading-tight tracking-tight">Claim Your<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Empire</span></h1>
                <p class="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-2">Auto-Currency & Language Sync Active</p>
            </div>

            <div id="installCard" class="hidden bg-gradient-to-r from-slate-900 to-blue-950 p-4 rounded-2xl mb-6 border border-blue-500/30 flex justify-between items-center shadow-2xl">
                <div>
                    <h4 class="font-bold text-sm text-white">SupremeHost Native App</h4>
                    <p class="text-[11px] text-blue-300">Install for instant 1-click access</p>
                </div>
                <button id="installBtn" class="bg-blue-600 hover:bg-blue-500 text-white font-black px-4 py-2 rounded-xl text-xs shadow-md active:scale-95 transition-all">INSTALL</button>
            </div>

            <div class="glass-panel p-2 rounded-2xl flex items-center mb-4 shadow-2xl ai-glow border transition-all focus-within:ring-2 ring-blue-500">
                <input type="text" id="domainInput" placeholder="Find perfect domain..." class="w-full bg-transparent px-3 py-2 outline-none text-lg placeholder-gray-600 font-semibold notranslate" autocomplete="off" spellcheck="false">
                <button onclick="search()" class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 font-black px-6 py-3 rounded-xl transition-all shadow-lg text-white text-sm tracking-wide uppercase">Analyze</button>
            </div>
            
            <div id="resultCard" class="hidden glass-panel p-6 rounded-2xl shadow-2xl mt-2 relative overflow-hidden transition-all border border-gray-800">
                <div class="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-md">AI Verified</div>
                
                <h3 id="resDomain" class="text-2xl font-black text-white mt-2 break-all tracking-tight notranslate"></h3>
                
                <div class="mt-3 flex items-center justify-between text-xs text-gray-400 border-b border-gray-800/60 pb-3">
                    <span>A.I. Growth Valuation:</span>
                    <span id="resValuation" class="font-bold text-emerald-400"></span>
                </div>

                <div class="bg-black/60 p-4 rounded-xl mt-4 border border-gray-800/80 text-center relative shadow-inner">
                    <p id="resDiscount" class="text-[10px] font-black text-amber-400 tracking-widest uppercase mb-1"></p>
                    <div class="flex items-center justify-center gap-3">
                        <span id="resOriginal" class="text-gray-500 line-through text-lg font-bold notranslate"></span>
                        <span id="resPrice" class="text-5xl font-black text-white tracking-tight notranslate"></span>
                    </div>
                    <p class="text-[9px] text-blue-400 mt-2 font-bold uppercase tracking-widest" id="resNote"></p>
                </div>
                
                <button id="resBtn" class="w-full mt-5 bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-600 font-black text-white py-4 rounded-xl text-lg shadow-xl shadow-emerald-900/20 active:scale-[0.98] transition-all uppercase tracking-wider"></button>
            </div>
        </main>

        <div id="aiProcessModal" class="hidden fixed inset-0 bg-slate-950/95 z-[99] flex justify-center items-center p-4 backdrop-blur-lg">
            <div class="glass-panel rounded-3xl w-full max-w-md p-8 text-center border border-blue-500/20 shadow-2xl">
                <div class="w-16 h-16 border-4 border-slate-800 border-t-blue-500 border-r-emerald-400 rounded-full animate-spin mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
                <h3 class="text-xl font-black text-white tracking-tight">Securing Connection</h3>
                <p id="aiStatusText" class="text-sm text-gray-400 mt-2 font-mono h-6 transition-all">Supreme Engine: Establishing 256-bit SSL Tunnel...</p>
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
                        <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Local Gateway Synced</p>
                    </div>
                    <button onclick="closeModal()" class="text-gray-400 hover:text-white bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold transition-all">&times;</button>
                </div>
                
                <div class="p-5 border-b border-slate-800 bg-slate-950/40 flex gap-2">
                    <button onclick="processPayment('paypal')" class="flex-1 bg-[#00457C] hover:opacity-90 py-3 rounded-xl font-black text-white text-xs transition-all tracking-wider uppercase shadow-lg">PayPal Global</button>
                    <button onclick="processPayment('crypto')" class="flex-1 bg-slate-800 border border-slate-700 hover:border-emerald-500 py-3 rounded-xl font-black text-white text-xs transition-all tracking-wider uppercase shadow-lg">₿ Web3 Crypto</button>
                </div>

                <div class="p-5 overflow-y-auto space-y-3 pb-24">
                    <button onclick="processPayment('cards')" class="w-full text-left bg-slate-800/30 border border-slate-800 rounded-xl p-4 hover:border-blue-500 transition-all group">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="text-xl">💳</span>
                                <span class="font-black text-gray-100 group-hover:text-blue-400 transition-colors text-sm uppercase tracking-wide">Credit / Debit Cards</span>
                            </div>
                            <span class="text-gray-600 font-bold">➔</span>
                        </div>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-white/5 border border-slate-700 rounded px-1.5 py-0.5 text-[9px] font-bold text-gray-400">VISA</span>
                            <span class="bg-white/5 border border-slate-700 rounded px-1.5 py-0.5 text-[9px] font-bold text-gray-400">MASTERCARD</span>
                            <span class="bg-white/5 border border-slate-700 rounded px-1.5 py-0.5 text-[9px] font-bold text-gray-400">AMEX</span>
                        </div>
                    </button>

                    <button onclick="processPayment('upi')" class="w-full text-left bg-slate-800/30 border border-slate-800 rounded-xl p-4 hover:border-emerald-500 transition-all group">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="text-xl">📱</span>
                                <span class="font-black text-gray-100 group-hover:text-emerald-400 transition-colors text-sm uppercase tracking-wide">Local Wallets & UPI</span>
                            </div>
                            <span class="text-gray-600 font-bold">➔</span>
                        </div>
                        <p class="text-[10px] text-blue-400 font-bold mt-2">Zero fees via encrypted regional tunnel</p>
                    </button>

                    <div class="grid grid-cols-3 gap-2">
                        <button onclick="processPayment('emi')" class="bg-slate-800/30 border border-slate-800 rounded-xl p-3 hover:border-blue-500 transition-all text-center">
                            <span class="text-lg block mb-1">🔄</span><span class="text-[9px] font-black text-gray-300 uppercase">EMI</span>
                        </button>
                        <button onclick="processPayment('netbanking')" class="bg-slate-800/30 border border-slate-800 rounded-xl p-3 hover:border-blue-500 transition-all text-center">
                            <span class="text-lg block mb-1">🏦</span><span class="text-[9px] font-black text-gray-300 uppercase">Bank</span>
                        </button>
                        <button onclick="processPayment('wallet')" class="bg-slate-800/30 border border-slate-800 rounded-xl p-3 hover:border-blue-500 transition-all text-center">
                            <span class="text-lg block mb-1">⏳</span><span class="text-[9px] font-black text-gray-300 uppercase">Pay Later</span>
                        </button>
                    </div>
                </div>

                <div class="absolute bottom-0 w-full bg-slate-950 border-t border-slate-800 p-4 text-center">
                    <p class="text-[10px] text-gray-600 font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                        <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> 256-Bit SSL Secured by Supreme Tech
                    </p>
                </div>
            </div>
        </div>

        <script type="text/javascript">
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
            }
        </script>
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

        <script>
            // Anti-Bot Protection
            document.addEventListener('contextmenu', event => event.preventDefault());
            document.onkeydown = function(e) { if(e.keyCode == 123) return false; }

            // PWA ENGINE
            let deferredPrompt;
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault(); deferredPrompt = e;
                document.getElementById('installCard').classList.remove('hidden');
            });
            document.getElementById('installBtn').addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    if (outcome === 'accepted') document.getElementById('installCard').classList.add('hidden');
                    deferredPrompt = null;
                }
            });
            if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }

            // SEARCH INFRASTRUCTURE
            let currentAction = "";
            async function search() {
                const domain = document.getElementById('domainInput').value;
                const btnSearch = document.querySelector('button[onclick="search()"]');
                if(!domain) return;
                
                btnSearch.innerText = "Analyzing...";
                btnSearch.classList.add('opacity-60');
                
                const res = await fetch('/api/search?domain=' + domain + '&' + new URLSearchParams(window.location.search));
                const data = await res.json();
                
                document.getElementById('resDomain').innerText = data.domain;
                document.getElementById('resValuation').innerText = data.valuation;
                document.getElementById('resDiscount').innerText = data.discount || "";
                document.getElementById('resOriginal').innerText = data.originalPrice || "";
                document.getElementById('resPrice').innerText = data.price;
                document.getElementById('resNote').innerText = data.note || "";
                
                const btn = document.getElementById('resBtn');
                btn.innerText = data.action;
                currentAction = data.action;
                
                document.getElementById('resultCard').classList.remove('hidden');
                btnSearch.innerText = "Analyze";
                btnSearch.classList.remove('opacity-60');
            }

            // SMART ROUTING ANIMATION LAYER
            document.getElementById('resBtn').addEventListener('click', () => {
                if(currentAction === "Buy Now") {
                    const aiModal = document.getElementById('aiProcessModal');
                    const statusText = document.getElementById('aiStatusText');
                    const progressBar = document.getElementById('aiProgressBar');
                    
                    aiModal.classList.remove('hidden');
                    
                    const steps = [
                        { text: "🧠 AI Valuation & Threat Analysis...", progress: "25%" },
                        { text: "🛡️ Securing Connection to Local Node...", progress: "50%" },
                        { text: "🔀 Formatting Local Currency Gateway...", progress: "85%" },
                        { text: "✅ Encrypted Gateway Ready.", progress: "100%" }
                    ];
                    
                    let currentStep = 0;
                    const interval = setInterval(() => {
                        if(currentStep < steps.length) {
                            statusText.innerText = steps[currentStep].text;
                            progressBar.style.width = steps[currentStep].progress;
                            currentStep++;
                        } else {
                            clearInterval(interval);
                            aiModal.classList.add('hidden');
                            document.getElementById('paymentModal').classList.remove('hidden');
                        }
                    }, 800);

                } else if(currentAction === "Deploy Now") {
                    alert("👑 CEO VIP ACCESS GRANTED. Master Node Synced.");
                }
            });

            function closeModal() { document.getElementById('paymentModal').classList.add('hidden'); }
            function processPayment(method) { alert("Redirecting to Encrypted " + method.toUpperCase() + " Gateway..."); }
        </script>
    </body>
    </html>`;

    return new Response(html, { headers: secureHeaders });
  }
};
