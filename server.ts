import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());


// Health check route
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", center: "Glims Imaging Center" });
});

// AI Chatbot Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const lower = message.toLowerCase();
    let reply = "";

    if (lower.includes("hour") || lower.includes("open") || lower.includes("time") || lower.includes("sunday") || lower.includes("saturday")) {
      reply = "Glims Imaging Center is open Monday–Friday 9AM-5PM, Saturday 1PM-8PM, and Sunday 10AM-4PM. We also provide 24/7 emergency scan support. Call (301) 615-2877 for urgent inquiries.";
    } else if (lower.includes("address") || lower.includes("location") || lower.includes("where") || lower.includes("directions") || lower.includes("laurel")) {
      reply = "We are located at 14504 Greenview Drive #207, Laurel, Maryland 20708. Ample free parking is available right in front of Suite 207.";
    } else if (lower.includes("phone") || lower.includes("contact") || lower.includes("call") || lower.includes("email") || lower.includes("whatsapp")) {
      reply = "You can reach us at (301) 615-2877 or 202-571-2210. Email: glimsimagingcenter@gmail.com. You can also message our WhatsApp directly at +1 (301) 615-2877!";
    } else if (lower.includes("gender") || lower.includes("boy") || lower.includes("girl") || lower.includes("reveal")) {
      reply = "Our Gender Reveal Ultrasound can determine your baby's gender as early as 14 weeks! It includes high-definition prints and digital photo memories in a comfortable family viewing room.";
    } else if (lower.includes("3d") || lower.includes("4d") || lower.includes("hd live")) {
      reply = "Our 3D/4D HD Live ultrasound provides crisp, realistic motion images of your baby. Best viewed between 24 and 32 weeks of pregnancy. You can book an appointment online or call (301) 615-2877.";
    } else if (lower.includes("prep") || lower.includes("water") || lower.includes("fast") || lower.includes("eat") || lower.includes("drink")) {
      reply = "Scan Preparation Guidelines:\n- Abdomen Ultrasound: Fasting for 6-8 hours before test.\n- Pelvic / OB / Gender Reveal: Drink 32-40 oz of water 1 hour prior to scan without emptying your bladder.\n- Vascular Scans: Loose comfortable clothing, no fasting required.";
    } else if (lower.includes("mobile") || lower.includes("home") || lower.includes("bedside")) {
      reply = "Yes! Glims Imaging Center offers Mobile Ultrasound services directly at your home, assisted living, or doctor's office for patients with mobility needs or tight schedules.";
    } else if (lower.includes("emergency") || lower.includes("urgent") || lower.includes("stat")) {
      reply = "Glims Imaging Center provides 24/7 Emergency Care scan availability. Please call our direct hotline immediately at (301) 615-2877 or 202-571-2210 for emergency imaging dispatch.";
    } else if (lower.includes("price") || lower.includes("cost") || lower.includes("insurance") || lower.includes("pay")) {
      reply = "We accept major health insurance plans with a physician order and offer discounted self-pay packages for elective 3D/4D and Gender Reveal scans. HSA/FSA payments are fully supported!";
    } else {
      reply = "Welcome to Glims Imaging Center in Laurel, MD. We offer 3D/4D, Mobile, OB/GYN, Gender Reveal, Vascular, and Abdominal Ultrasound scans. Would you like to schedule an appointment or speak with our team at (301) 615-2877?";
    }

    return res.json({ reply });
  } catch (err: any) {
    console.error("Chat route error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Serve frontend
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const listenHost = process.env.HOST || "127.0.0.1";
  const displayHost = listenHost === "0.0.0.0" ? "localhost" : listenHost;
  app.listen(PORT, listenHost, () => {
    console.log(`Glims Imaging Center server running on http://${displayHost}:${PORT}`);
  });
}

startServer();
