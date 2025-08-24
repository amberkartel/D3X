import fetch from "node-fetch";

export default async function handler(req, res) {
  const { reference } = req.query;
  if (!reference) return res.status(400).json({ status: "error", message: "Missing reference" });

  try {
    const secret = process.env.PAYSTACK_SECRET;
    if (!secret) return res.status(500).json({ status: "error", message: "PAYSTACK_SECRET not set" });

    const resp = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${secret}` }
    });
    const json = await resp.json();

    if (json.status && json.data && json.data.status === "success") {
      return res.status(200).json({ status: "success", data: json.data });
    } else {
      return res.status(200).json({ status: "failed", data: json.data || null });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "error", message: "Server error" });
  }
}