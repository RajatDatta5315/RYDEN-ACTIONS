// scripts/promo.js
const BACKEND_URL = "https://ryden-core.rajatdatta90000.workers.dev";
const RYDEN_KEY = process.env.RYDEN_APP_KEY;
const RYDEN_SECRET = process.env.RYDEN_APP_SECRET;
const CLERK_USER_ID = process.env.CLERK_USER_ID;

async function runPromotion() {
  console.log("🚀 Initializing Ryden Promotion Sequence...");

  const payload = {
    userId: CLERK_USER_ID,
    platform: 'telegram',
    action: 'SEND_MESSAGE', // Humne backend handleTelegramAction mein ise handle kiya hai
    payload: {
      to: "@YourTargetGroup", // Jahan promote karna hai
      text: "🔥 RYDEN OS v2.0 is Live. Automate your social presence like a Ghost. \n\nCheck it out: https://ryden-alpha.vercel.app"
    }
  };

  try {
    const response = await fetch(`${BACKEND_URL}/api/automate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RYDEN-APP-KEY': RYDEN_KEY
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("✅ Bridge Response:", data);
  } catch (error) {
    console.error("❌ Automation Failed:", error);
  }
}

runPromotion();
