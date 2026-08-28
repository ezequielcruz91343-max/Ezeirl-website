export type FitmateStatus = "available" | "in-development" | "planned" | "conceptual";

export const fitmate = {
  name: "Fit-Mate",
  tagline: "Your AI fitness companion.",
  status: "in-development" as FitmateStatus,
  betaOpen: false,
  features: [
    { label: "Personalized Programs", status: "in-development" as FitmateStatus },
    { label: "AI Coaching", status: "planned" as FitmateStatus },
    { label: "Progress Tracking", status: "in-development" as FitmateStatus },
    { label: "Muscle Visualization", status: "planned" as FitmateStatus },
    { label: "Challenges & Streaks", status: "conceptual" as FitmateStatus },
  ],
  disclaimer: "Fit-Mate is in development. No medical advice. Consult a professional before starting any fitness program.",
} as const;
