const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

let visitorDataCache = null;

// Helper to fetch IP and geo info
async function getVisitorInfo() {
  if (visitorDataCache) return visitorDataCache;
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) throw new Error("IP API failed");
    const data = await res.json();
    visitorDataCache = {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country_name,
      isp: data.org,
      device: navigator.userAgent
    };
    return visitorDataCache;
  } catch (error) {
    // Basic fallback if ipapi.co fails or is blocked
    visitorDataCache = {
      ip: "UNKNOWN_IP",
      city: "UNKNOWN_CITY",
      region: "UNKNOWN_REGION",
      country: "UNKNOWN_COUNTRY",
      isp: "UNKNOWN_ISP",
      device: navigator.userAgent
    };
    return visitorDataCache;
  }
}

// Function to send tracking data to Web3Forms
async function sendToWeb3Forms(subject, details) {
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_KEY_HERE") {
    console.warn(`[TRACKER_WARNING] Configure WEB3FORMS_ACCESS_KEY in /client/src/utils/tracker.js to receive email notifications.`);
    console.log(`[TRACKER_PREVIEW] ${subject}:`, details);
    return;
  }

  try {
    const body = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: subject,
      from_name: "Portfolio Tracker",
      message: `
        Visitor Log Details:
        ------------------------------
        IP Address: ${details.ip}
        Location: ${details.city}, ${details.region}, ${details.country}
        ISP/Org: ${details.isp}
        Browser/Device: ${details.device}
        Time: ${new Date().toLocaleString()}
      `,
      ...details
    };

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(body)
    });
  } catch (e) {
    console.error("[TRACKER_ERROR] Web3Forms submission failed", e);
  }
}

// Track page visit
export async function trackVisit() {
  // Prevent double tracking in React Strict Mode (basic check)
  if (window.sessionStorage.getItem("portfolio_tracked")) return;
  window.sessionStorage.setItem("portfolio_tracked", "true");

  const info = await getVisitorInfo();
  await sendToWeb3Forms(`New Portfolio Visitor: ${info.ip} (${info.city})`, info);
}

// Track heart interaction
export async function trackHeartbeat() {
  const info = await getVisitorInfo();
  await sendToWeb3Forms(`Heart Clicked! Visitor: ${info.ip} (${info.city})`, info);
}
