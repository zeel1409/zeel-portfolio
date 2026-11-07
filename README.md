# Zeel Kadiya — Developer Portfolio

My personal portfolio site. Built from scratch with React on the frontend and a Node.js + Express backend that handles the contact form. Nothing fancy template-wise — I tried to keep it clean and actually reflect how I work.

Live: [zeel-portfolio-gamma.vercel.app](https://zeel-portfolio-gamma.vercel.app/)

---

## What's inside

It's a monorepo with two separate apps:

```
portfolio/
├── Frontend/   → React + Vite + Tailwind CSS
└── Backend/    → Node.js + Express + MongoDB
```

---

## Frontend

**Stack:** React 19, Vite, Tailwind CSS, Framer Motion, Zod + React Hook Form

The site is a single-page app with lazy-loaded sections so the initial bundle stays small. Animations are done with Framer Motion — I kept them intentional, mostly on scroll-reveal and the hero. No glow effects, no gradient text on headings.

Sections in order:
- Hero (photo, role, quick stats)
- Work Experience (internships at Innovexis.in and AnveshnaAI.com)
- Technical Skills (grouped by category — not just a tag cloud)
- Featured Projects (Wanderlust case study with real metrics)
- Education (GTU B.E. IT, Class 12 & 10)
- Contact (form with validation, connects to the backend)

The contact form uses `react-hook-form` for state and `zod` for schema validation on the client before anything hits the API.

**To run locally:**

```bash
cd Frontend
npm install
npm run dev
# → http://localhost:5173
```

Create a `.env` file in `Frontend/`:

```env
VITE_API_URL=http://localhost:5000
```

---

## Backend

**Stack:** Node.js, Express 5, MongoDB + Mongoose, Nodemailer

It's a small Express server — really just one meaningful route (`POST /api/contact`) that validates the form data, saves it to MongoDB, and fires an email notification via Nodemailer.

Security setup I added:
- `helmet` for HTTP headers
- `cors` with an origin allowlist (reads from env)
- Rate limiting globally (100 req / 15 min) and tighter on the contact endpoint (5 req / hour in production)
- `express-validator` for server-side input sanitization

**To run locally:**

```bash
cd Backend
npm install
npm run dev
# → http://localhost:5000
```

Create a `.env` file in `Backend/`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
CLIENT_ORIGIN=http://localhost:5173
```

> For Gmail, you'll need an **App Password** (not your regular password). Go to Google Account → Security → 2-Step Verification → App passwords.

Health check endpoint: `GET /api/health` — handy to verify the server is up.

---

## Running both together

Open two terminals:

```bash
# Terminal 1
cd Backend && npm run dev

# Terminal 2
cd Frontend && npm run dev
```

---

## Project image assets

Screenshots go in `Frontend/public/images/`. If the image isn't there, the project card shows a styled fallback — no broken img tags.

```
Frontend/public/images/
├── zeel.jpg         ← your photo (used in hero card)
├── wanderlust.png   ← Wanderlust screenshot
└── portfolio.png    ← portfolio screenshot (optional)
```

---

## Deployment

Frontend is deployed on Vercel. Backend can go on Railway, Render, or any Node host — just set the env vars and point `VITE_API_URL` in the frontend to wherever the backend lives.

Before building for production:

```bash
cd Frontend
npm run build
# Output → Frontend/dist/
```

---

## What I'd still improve

- Add a resume download button to the hero
- Write proper E2E tests for the contact form flow
- Add Wanderlust video demo (screen recording) instead of a static screenshot

---

## Contact

**Email:** kadiyazeel209@gmail.com  
**LinkedIn:** [linkedin.com/in/zeel-kadiya-5733a7349](https://www.linkedin.com/in/zeel-kadiya-5733a7349/)  
**GitHub:** [github.com/zeel1409](https://github.com/zeel1409)

