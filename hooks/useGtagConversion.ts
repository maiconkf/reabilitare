"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
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
    if (!url) return false;

    let navigated = false;
    const navigate = () => {
      if (navigated) return;
      navigated = true;
      window.open(url, "_blank", "noopener,noreferrer");
    };

    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      navigate();
      return false;
    }

    // Safety timeout in case adblocker or slow connection delays event_callback
    const timeout = setTimeout(navigate, 400);

    const callback = () => {
      clearTimeout(timeout);
      navigate();
    };

    try {
      window.gtag("event", "conversion", {
        send_to: "AW-17543322333/2DOfCJ3pkZcbEN21p61B",
        value: 1.0,
        currency: "BRL",
        event_callback: callback,
      });
    } catch {
      callback();
    }

    return false;
  }, []);

  return { reportConversion };
};

export default useGtagConversion;
