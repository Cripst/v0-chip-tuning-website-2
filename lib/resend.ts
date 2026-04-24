import { Resend } from "resend"

const apiKey =
  process.env.RESEND_API_KEY ||
  process.env.TOKEN ||
  process.env.EMAIL_TOKEN ||
  process.env.RESEND_TOKEN

export const resend = apiKey ? new Resend(apiKey) : null

export function getMailConfig() {
  const from = process.env.MAIL_FROM || process.env.EMAIL_FROM || process.env.EMAIL
  const to = process.env.MAIL_TO || process.env.EMAIL_TO || process.env.EMAIL

  if (!resend || !from || !to) {
    return null
  }

  return { from, to }
}
