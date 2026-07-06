const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "").trim();

let visitorDataCache = null;

// Helper to fetch IP and geo info
async function getVisitorInfo() {
  if (visitorDataCache) return visitorDataCache;
  let ipv4 = "UNKNOWN_IP";
  try {
    // Force IPv4 retrieval by querying an IPv4-only DNS record endpoint
    const ipRes = await fetch("https://api4.ipify.org?format=json");
    if (ipRes.ok) {
      const ipData = await ipRes.json();
      ipv4 = ipData.ip;
    }
  } catch (ipError) {
    console.warn("Failed to fetch IPv4 from ipify:", ipError);
  }

  try {
    const url = ipv4 !== "UNKNOWN_IP" 
      ? `https://ipapi.co/${ipv4}/json/` 
      : "https://ipapi.co/json/";
      
    const res = await fetch(url);
    if (!res.ok) throw new Error("IP API failed");
    const data = await res.json();
    visitorDataCache = {
      ip: ipv4 !== "UNKNOWN_IP" ? ipv4 : data.ip,
      city: data.city || "UNKNOWN_CITY",
      region: data.region || "UNKNOWN_REGION",
      country: data.country_name || "UNKNOWN_COUNTRY",
      isp: data.org || "UNKNOWN_ISP",
      latitude: data.latitude || "UNKNOWN_LAT",
      longitude: data.longitude || "UNKNOWN_LON",
      device: navigator.userAgent
    };
    return visitorDataCache;
  } catch (error) {
    // Basic fallback if ipapi.co fails or is blocked
    visitorDataCache = {
      ip: ipv4,
      city: "UNKNOWN_CITY",
      region: "UNKNOWN_REGION",
      country: "UNKNOWN_COUNTRY",
      isp: "UNKNOWN_ISP",
      latitude: "UNKNOWN_LAT",
      longitude: "UNKNOWN_LON",
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
        Coordinates: Latitude: ${details.latitude}, Longitude: ${details.longitude}
        ISP/Org: ${details.isp}
        Browser/Device: ${details.device}
        Time: ${new Date().toLocaleString()}
      `,
      ...details
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(body)
    });
    
    const resData = await response.json();
    if (response.ok && resData.success) {
      console.log("[TRACKER_SUCCESS] Email notification sent successfully via Web3Forms!", resData);
    } else {
      console.error("[TRACKER_API_FAILURE] Web3Forms rejected the notification submission:", resData);
    }
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
