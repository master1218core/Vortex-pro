export default {
  async fetch(request) {
    const url = new URL(request.url);

    // ======== 1. API BACKEND & TELEGRAM ALERT ========
    if (url.pathname === "/api/search") {
        const domainQuery = url.searchParams.get("domain");
        const authCode = url.searchParams.get("token");

        const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };
        if (!domainQuery) return new Response(JSON.stringify({ error: "Domain required" }), { status: 400, headers });

        // 👑 CEO VIP GATE
        if (authCode === "1218") {
          return new Response(JSON.stringify({
            status: "success", domain: domainQuery, availability: "CEO Access Verified",
            price: "$0.00", action: "Deploy Now"
          }), { headers });
        }

        // 🚨 TELEGRAM ALERT
        const TELEGRAM_BOT_TOKEN = "8767785950:AAHheFCpC-L6Si26F4GOwBeL6HSOo5fMlTQ"; 
        const TELEGRAM_CHAT_ID = "1415524916";
        const text = `🚨 VORTEX GLOBAL ALERT 🚨\n\n🎯 Target: ${domainQuery}\n💰 Price: $19.99`;
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}`).catch(() => {});

        await new Promise(r => setTimeout(r, 1000));
        return new Response(JSON.stringify({
          status: "taken", domain: domainQuery, availability: "Premium Reserved",
          price: "$19.99", action: "Buy Now"
        }), { headers });
    }

    // ======== 2. SUPREME HOST GLOBAL SEO & UI (WITH UPI) ========
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        
        <title>SupremeHost | Premium Global Domains & Tech</title>
        <meta name="description" content="SupremeHost - The ultimate AI-powered global domain and technology marketplace. Secure your premium digital assets today with zero hassle.">
        <meta name="keywords" content="SupremeHost, Supreme Tech, premium domains, global technology, AI tools, web3, business domains, tech brand, UPI payments">
        <meta name="author" content="Supreme Tech">
        <meta name="robots" content="index, follow">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            .glass-panel { background: rgba(31, 41, 55, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1); }
        </style>
    </head>
    <body class="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white font-sans min-h-screen">
        
        <nav class="p-4 glass-panel fixed w-full top-0 z-40 text-center flex justify-center items-center gap-2 shadow-2xl">
            <span class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 tracking-wider">SupremeHost</span>
            <span class="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest mt-1 shadow-lg shadow-blue-500/50">Global</span>
        </nav>
        
        <main class="pt-28 px-4 max-w-md mx-auto flex flex-col justify-center">
            
            <div class="text-center mb-8">
                <h1 class="text-4xl font-black mb-2 leading-tight">Secure Your<br><span class="text-blue-400">Digital Empire</span></h1>
                <p class="text-gray-400 text-sm">Powered by Supreme Tech Intelligence</p>
            </div>

            <div class="glass-panel p-2 rounded-2xl flex items-center mb-6 shadow-2xl transition-all focus-within:ring-2 ring-blue-500">
                <input type="text" id="domainInput" placeholder="Enter target domain..." class="w-full bg-transparent px-4 py-2 outline-none text-lg placeholder-gray-500 font-medium">
                <button onclick="search()" class="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 font-bold px-6 py-3 rounded-xl transition-all shadow-lg text-white">Search</button>
            </div>
            
            <div id="resultCard" class="hidden glass-panel p-6 rounded-2xl shadow-2xl mt-4 relative overflow-hidden transform transition-all">
                <div class="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Premium</div>
                <h3 id="resDomain" class="text-2xl font-bold text-white mt-2 break-all"></h3>
                <div class="bg-black/50 p-5 rounded-xl mt-4 border border-gray-700 text-center shadow-inner">
                    <div id="resPrice" class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
                <button id="resBtn" class="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white py-4 rounded-xl text-xl shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all uppercase tracking-wide"></button>
            </div>
        </main>

        <div id="paymentModal" class="hidden fixed inset-0 bg-black/80 z-[100] flex justify-center items-end sm:items-center p-0 sm:p-4 backdrop-blur-md transition-all">
            <div class="bg-gray-900 w-full sm:rounded-3xl rounded-t-3xl max-w-md border border-gray-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh]">
                
                <div class="bg-gray-800 p-5 border-b border-gray-700 flex justify-between items-center sticky top-0 z-10">
                    <div>
                        <h2 class="text-xl font-black text-white">All Payment Options</h2>
                        <p class="text-xs text-gray-400 mt-1">Global & Local Methods Accepted</p>
                    </div>
                    <button onclick="closeModal()" class="text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-all">&times;</button>
                </div>
                
                <div class="p-5 border-b border-gray-800 bg-gray-900/50">
                    <div class="flex gap-2">
                        <button onclick="processPayment('paypal')" class="flex-1 bg-[#00457C] hover:bg-[#003B6A] py-2 rounded-lg font-bold text-white text-sm transition-all flex justify-center items-center gap-1"><i>P</i> PayPal</button>
                        <button onclick="processPayment('crypto')" class="flex-1 bg-gray-800 border border-gray-600 hover:border-emerald-500 py-2 rounded-lg font-bold text-white text-sm transition-all flex justify-center items-center gap-1">₿ Crypto</button>
                    </div>
                </div>

                <div class="p-5 overflow-y-auto space-y-3 pb-24">
                    
                    <button onclick="processPayment('cards')" class="w-full text-left bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-all group">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl drop-shadow-md">💳</span>
                                <span class="font-bold text-gray-100 group-hover:text-blue-400 transition-colors">Cards</span>
                            </div>
                            <span class="text-gray-500 font-bold text-lg">➔</span>
                        </div>
                        <div class="flex gap-2 mt-3">
                            <span class="bg-white/10 border border-gray-600 rounded px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wide">VISA</span>
                            <span class="bg-white/10 border border-gray-600 rounded px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wide">MASTERCARD</span>
                            <span class="bg-white/10 border border-gray-600 rounded px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wide">AMEX</span>
                        </div>
                        <div class="mt-3 bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-lg">
                            <p class="text-xs text-emerald-400 font-semibold leading-tight">Upto 1.5% savings with SupremeCard on EMI/ non EMI trxns</p>
                        </div>
                    </button>

                    <button onclick="processPayment('upi')" class="w-full text-left bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-emerald-500 transition-all group">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl drop-shadow-md">📱</span>
                                <span class="font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">UPI (GPay, PhonePe, Paytm)</span>
                            </div>
                            <span class="text-gray-500 font-bold text-lg">➔</span>
                        </div>
                        <div class="mt-3 bg-blue-500/10 border border-blue-500/20 p-2 rounded-lg">
                            <p class="text-xs text-blue-400 font-semibold leading-tight">Zero convenience fee on all secure UPI transactions</p>
                        </div>
                    </button>

                    <button onclick="processPayment('emi')" class="w-full text-left bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-all group">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl drop-shadow-md">🔄</span>
                                <span class="font-bold text-gray-100 group-hover:text-blue-400 transition-colors">EMI</span>
                            </div>
                            <span class="text-gray-500 font-bold text-lg">➔</span>
                        </div>
                        <div class="mt-3 bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-lg">
                            <p class="text-xs text-emerald-400 font-semibold leading-tight">Upto 1.5% savings with SupremeCard on EMI trxns</p>
                        </div>
                    </button>

                    <button onclick="processPayment('netbanking')" class="w-full text-left bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-all flex justify-between items-center group">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl drop-shadow-md">🏦</span>
                            <span class="font-bold text-gray-100 group-hover:text-blue-400 transition-colors">Netbanking</span>
                        </div>
                        <span class="text-gray-500 font-bold text-lg">➔</span>
                    </button>

                    <button onclick="processPayment('wallet')" class="w-full text-left bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-all flex justify-between items-center group">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl drop-shadow-md">👛</span>
                            <span class="font-bold text-gray-100 group-hover:text-blue-400 transition-colors">Wallet</span>
                        </div>
                        <span class="text-gray-500 font-bold text-lg">➔</span>
                    </button>

                    <button onclick="processPayment('paylater')" class="w-full text-left bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-all flex justify-between items-center group">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl drop-shadow-md">⏳</span>
                            <span class="font-bold text-gray-100 group-hover:text-blue-400 transition-colors">Pay Later</span>
                        </div>
                        <span class="text-gray-500 font-bold text-lg">➔</span>
                    </button>
                </div>

                <div class="absolute bottom-0 w-full bg-gray-900 border-t border-gray-700 p-4 text-center">
                    <p class="text-[11px] text-gray-400 font-bold flex items-center justify-center gap-2">
                        <span class="text-emerald-500">🔒</span> Secured by Supreme Tech • <a href="#" class="underline hover:text-white">Account & Terms</a>
                    </p>
                </div>
            </div>
        </div>

        <script>
            let currentAction = "";
            
            async function search() {
                const domain = document.getElementById('domainInput').value;
                const btnSearch = document.querySelector('button[onclick="search()"]');
                if(!domain) return;
                
                btnSearch.innerText = "Searching...";
                btnSearch.classList.add('opacity-75');
                
                const res = await fetch('/api/search?domain=' + domain + '&' + new URLSearchParams(window.location.search));
                const data = await res.json();
                
                document.getElementById('resDomain').innerText = data.domain;
                document.getElementById('resPrice').innerText = data.price;
                
                const btn = document.getElementById('resBtn');
                btn.innerText = data.action;
                currentAction = data.action;
                
                document.getElementById('resultCard').classList.remove('hidden');
                
                btnSearch.innerText = "Search";
                btnSearch.classList.remove('opacity-75');
            }

            document.getElementById('resBtn').addEventListener('click', () => {
                if(currentAction === "Buy Now") {
                    document.getElementById('paymentModal').classList.remove('hidden');
                } else if(currentAction === "Deploy Now") {
                    alert("👑 CEO VIP Access Granted. System Synced!");
                }
            });

            function closeModal() {
                document.getElementById('paymentModal').classList.add('hidden');
            }

            function processPayment(method) {
                // Backend integration ready
                alert("Redirecting to Secure Global Gateway for: " + method.toUpperCase());
            }
        </script>
    </body>
    </html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  }
};
