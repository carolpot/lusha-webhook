export default async function handler(req, res) {
  const challenge = req.query.challenge;

  // Handle verification challenge
  if (req.method === "GET" && challenge) {
    console.log("✅ Challenge received:", challenge);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(JSON.stringify({ challenge }));
  }

  // Handle webhook events
  if (req.method === "POST") {
    console.log("📩 Webhook received!");
    console.log("Headers:", JSON.stringify(req.headers, null, 2));
    console.log("Body:", JSON.stringify(req.body, null, 2));
    return res.status(200).send("ok");
  }

  return res.status(405).send("Method not allowed");
}
