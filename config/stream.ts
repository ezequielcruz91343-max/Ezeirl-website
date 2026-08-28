export type StreamStatus = "planned" | "live" | "ended" | "cancelled";
export type LocationStatus = "pending-approval" | "confirmed" | "not-set";

export const stream = {
  name: "EZE IRL Controlled Test Stream #1",
  date: new Date("2026-09-05T18:00:00-07:00"), // 6:00 PM Pacific
  endTime: new Date("2026-09-05T20:00:00-07:00"), // 8:00 PM Pacific
  status: "planned" as StreamStatus,
  platform: "Twitch",
  platformStatus: "not-configured" as "configured" | "not-configured",
  platformUrl: null as string | null,
  locationStatus: "pending-approval" as LocationStatus,
  locationNote: "Location pending written authorization from facility.",
  concept: "Gym challenge plus real conversations — from the gym to a nearby social area.",
  crewSize: 2,
  budget: 100,
  paidAdsEnabled: false,
} as const;
