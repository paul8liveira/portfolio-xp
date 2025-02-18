"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  if (!date) return null;

  return (
    <span className="clock">{date.toLocaleTimeString()}</span>
  );
}
