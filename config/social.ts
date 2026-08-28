export type SocialStatus = "active" | "coming-soon" | "not-configured";

export const social = {
  instagram: { url: null as string | null, status: "not-configured" as SocialStatus, label: "Instagram" },
  tiktok: { url: null as string | null, status: "not-configured" as SocialStatus, label: "TikTok" },
  youtube: { url: null as string | null, status: "not-configured" as SocialStatus, label: "YouTube" },
  twitch: { url: null as string | null, status: "not-configured" as SocialStatus, label: "Twitch" },
  x: { url: null as string | null, status: "not-configured" as SocialStatus, label: "X" },
} as const;
