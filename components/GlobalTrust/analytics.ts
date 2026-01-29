// components/GlobalTrust/analytics.ts
export const trackTrustEvent = (action: string) => {
  if (typeof window === "undefined") return;

  // Google Analytics
  if ((window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: "Trust",
    });
  }

  // Add Mixpanel / Segment later if needed
};
