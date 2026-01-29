export default async function handler(req, res) {
  const challenge = req.query.challenge;

  if (req.method === "GET" && challenge) {
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(JSON.stringify({ challenge }));
  }

  if (req.method === "POST") {
    return res.status(200).send("ok");
  }

  return res.status(405).send("Method not allowed");
}
