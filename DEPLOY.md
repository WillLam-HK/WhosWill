# Deploy WhosWillWeb online

## Free options

| Method | Cost | Auto-deploy from GitHub? |
|--------|------|---------------------------|
| **Vercel** | Free tier (enough for this portfolio) | Yes — every push to `main` deploys automatically |
| **Netlify** | Free tier | Yes — same as above |
| **Self-host (VPS)** | You pay for the server | No — you run `git pull` and rebuild yourself |

**Recommendation:** Use **Vercel**. It’s free for personal projects, and once your GitHub repo is connected, **the live site updates automatically whenever you push to GitHub** (e.g. `git push origin main`). No need to redeploy by hand.

**This project’s live site:** [https://whos-will.vercel.app](https://whos-will.vercel.app)

---

## Option 1: Vercel (recommended)

Vercel runs Next.js very well and has a generous free tier. Connect your GitHub repo once; after that, every push to the branch you chose (e.g. `main`) triggers a new build and the website updates automatically.

### 1. Push your code to GitHub

If you haven’t already:

```bash
git add .
git commit -m "Ready for deploy"
git push origin main
```

### 2. Sign up and import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (e.g. with GitHub).
2. Click **Add New…** → **Project**.
3. **Import** the repo `WillLam-HK/WhosWill` (or your repo).
4. Leave the defaults (Framework: Next.js, Build Command: `next build`, Output: default).
5. Before deploying, add an **Environment Variable**:
   - **Name:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** your live URL, e.g. `https://whos-will.vercel.app` (you can change this after you add a custom domain).
6. Click **Deploy**.

### 3. After deploy

- Vercel gives you a URL like `https://whoswill-xxx.vercel.app`.
- **Updates:** From now on, whenever you `git push` to `main` (or the branch you connected), Vercel will build and publish the new version automatically. The site stays in sync with GitHub.
- To use your own domain (e.g. `whoswill.dev`): Project → **Settings** → **Domains** → add the domain and follow the DNS steps. Then set `NEXT_PUBLIC_SITE_URL` to that URL (e.g. `https://whoswill.dev`) in **Settings** → **Environment Variables** and redeploy.

### 4. Optional: contact form email

The contact form currently posts to `/api/contact` and does not send email. To send real emails:

- Use an email API (e.g. [Resend](https://resend.com), [SendGrid](https://sendgrid.com)).
- Add the API key as an env var (e.g. `RESEND_API_KEY`) in Vercel **Settings** → **Environment Variables**.
- Update `app/api/contact/route.ts` to call that API. Never commit the key; only set it in Vercel.

---

## Option 2: Netlify

1. Sign up at [netlify.com](https://netlify.com) and connect your GitHub repo.
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (or use the Next.js runtime; Netlify supports it).
3. Add `NEXT_PUBLIC_SITE_URL` = your site URL in **Site settings** → **Environment variables**.
4. Deploy.

---

## Option 3: Self-host (VPS / Node)

1. On the server: install Node.js, clone the repo, run `npm install --production` and `npm run build`.
2. Run with `npm run start` (or use a process manager like PM2).
3. Put a reverse proxy (e.g. Nginx) in front and add SSL (e.g. Let’s Encrypt).
4. Set `NEXT_PUBLIC_SITE_URL` to your public URL.

---

## Environment variable

| Variable | Purpose |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | Full public URL of the site (e.g. `https://whos-will.vercel.app`). Used for sitemap, robots.txt, and JSON-LD. Optional — defaults to the Vercel URL if unset. |

For local development you can create a `.env.local` (never commit it):

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Then run `npm run dev` and open http://localhost:3000.
