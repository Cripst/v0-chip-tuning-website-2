# v0-chip-tuning-website-2

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_5O9q0awMd3HDCwLvEx8rCW49Mn9T)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Email Setup (Resend)

The contact and order forms send emails through Resend server routes:

- `POST /api/contact`
- `POST /api/order`

Set these environment variables in Vercel (Project Settings -> Environment Variables):

- `RESEND_API_KEY` (preferred)
- `MAIL_FROM` (must be a verified sender/domain in Resend)
- `MAIL_TO` (where you want to receive form emails)

Supported fallback names:

- API key: `TOKEN`, `EMAIL_TOKEN`, `RESEND_TOKEN`
- sender: `EMAIL_FROM`, `EMAIL`
- recipient: `EMAIL_TO`, `EMAIL`

After updating env vars, redeploy the project so server routes pick up new values.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/Cripst/v0-chip-tuning-website-2" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
