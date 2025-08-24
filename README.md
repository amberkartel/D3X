# D3X VERCEL (Paystack Live)

Vercel-ready project: frontend + serverless backend.

## Setup

1. Push this folder to GitHub.
2. On Vercel, create a new project from the repo.
3. In **Settings → Environment Variables**, add:
   - `PAYSTACK_SECRET` = your **live Paystack secret key**.
4. Deploy.

## Usage

- Frontend (`public/index.html`) loads at `/`.
- Payment uses your **live Paystack public key**.
- After payment, the frontend calls `/api/verify-payment?reference=...`.
- Backend verifies with Paystack using your **secret key**.

⚠️ This is **live mode** — real cards will be charged.