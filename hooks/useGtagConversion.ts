"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      config?: {
        send_to?: string;
        value?: number;
        currency?: string;
        event_callback?: () => void;
      }
    ) => void;
  }
}

export const useGtagConversion = () => {
  const reportConversion = useCallback((url?: string) => {
    if (typeof window === "undefined" || !window.gtag) {
      console.warn("Google Analytics not loaded");
      return false;
    }

    const callback = () => {
      if (typeof url !== "undefined") {
        window.location.href = url;
      }
    };

    window.gtag("event", "conversion", {
      send_to: "AW-17543322333/2DOfCJ3pkZcbEN21p61B",
      value: 1.0,
      currency: "BRL",
      event_callback: callback,
    });

    return false;
  }, []);

  return { reportConversion };
};

export default useGtagConversion;
