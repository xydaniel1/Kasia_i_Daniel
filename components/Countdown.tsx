"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const weddingDate = new Date("2026-09-05T15:00:00");
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${days} dni, ${hours} godzin, ${minutes} minut`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="bg-pink-100 text-pink-800 py-2 px-4 rounded mb-4 text-sm">
      ⏳ Do ślubu zostało: <span className="font-semibold">{timeLeft}</span>
    </div>
  );
}
