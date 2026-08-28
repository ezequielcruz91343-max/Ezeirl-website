// Runtime environment configuration — set via .env.local
// Never commit real values
export const env = {
  // Email provider — leave null until provider is approved and privacy process reviewed
  emailProvider: null as "mailchimp" | "klaviyo" | "convertkit" | "buttondown" | "beehiiv" | null,
  emailApiKey: process.env.NEXT_PUBLIC_EMAIL_API_KEY ?? null,
  emailListId: process.env.NEXT_PUBLIC_EMAIL_LIST_ID ?? null,
  // Analytics — set only after privacy policy is reviewed
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID ?? null,
} as const;
