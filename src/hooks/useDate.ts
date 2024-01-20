import { useEffect, useState } from "react";

export const useDate = () => {
  const [date, setDate] = useState(new Date());
  const day = date.toLocaleString("en-us", { weekday: "long" });
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  useEffect(() => {
    // Update the current time every minute
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return { date, day, month, year, time };
};
