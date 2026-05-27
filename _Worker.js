export default {
  async fetch(request) {
    const url = new URL(request.url);

    // ======== 1. API BACKEND & TELEGRAM ALERT ========
    if (url.pathname === "/api/search") {
        const domainQuery = url.searchParams.get("domain");
        const authCode = url.searchParams.get("token");

        const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };
        if (!domainQuery) return new Response(JSON.stringify({ error: "Domain required" }), { status: 400, headers });

        // 👑 CEO VIP GATE (Code: 1218)
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

    // ======== 2. FRONTEND WEBSITE (UI) ========
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Supreme Tech | VORTEX</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 text-white font-sans">
        <nav class="p-4 border-b border-gray-800 bg-gray-900/90 fixed w-full top-0 z-50 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">VORTEX</nav>
        <main class="pt-24 px-4 max-w-md mx-auto min-h-screen flex flex-col justify-center">
            <div class="bg-gray-800 p-2 rounded-2xl flex items-center mb-6 shadow-xl border border-gray-700">
                <input type="text" id="domainInput" placeholder="Enter domain..." class="w-full bg-transparent px-4 outline-none text-lg">
                <button onclick="search()" class="bg-blue-600 active:bg-blue-500 font-bold px-6 py-3 rounded-xl transition-all">Search</button>
            </div>
            <div id="resultCard" class="hidden bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl mt-4">
                <h3 id="resDomain" class="text-xl font-bold text-gray-200"></h3>
                <div class="bg-gray-900 p-4 rounded-xl mt-4 border border-gray-700 text-center">
                    <div id="resPrice" class="text-4xl font-extrabold text-white"></div>
                </div>
                <button id="resBtn" class="w-full mt-6 bg-gradient-to-r from-blue-600 to-emerald-500 font-bold text-white py-4 rounded-xl text-lg active:scale-95 transition-all"></button>
            </div>
        </main>
        <script>
            async function search() {
                const domain = document.getElementById('domainInput').value;
                if(!domain) return;
                const res = await fetch('/api/search?domain=' + domain + '&' + new URLSearchParams(window.location.search));
                const data = await res.json();
                document.getElementById('resDomain').innerText = data.domain;
                document.getElementById('resPrice').innerText = data.price;
                document.getElementById('resBtn').innerText = data.action;
                document.getElementById('resultCard').classList.remove('hidden');
            }
        </script>
    </body>
    </html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  }
};
