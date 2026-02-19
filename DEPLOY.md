# Deploy WhosWillWeb online

## Option 1: Vercel (recommended)

Vercel runs Next.js very well and has a generous free tier.

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
   - **Value:** your live URL, e.g. `https://whoswill.vercel.app` (you can change this after you add a custom domain).
6. Click **Deploy**.

### 3. After deploy

- Vercel gives you a URL like `https://whoswill-xxx.vercel.app`.
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
| `NEXT_PUBLIC_SITE_URL` | Full public URL of the site (e.g. `https://whoswill.dev`). Used for sitemap, robots.txt, and JSON-LD. Set this in your hosting dashboard. |

For local development you can create a `.env.local` (never commit it):

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Then run `npm run dev` and open http://localhost:3000.
