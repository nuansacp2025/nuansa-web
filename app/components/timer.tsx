"use client";

import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const NumberDisplay = ({ value, label }: { value: string; label: string }) => {
  return (
    <>
      <span
        className="flex flex-col justify-center items-center text-orange-200 text-2xl lg:text-4xl w-16 sm:w-24 lg:w-32"
        suppressHydrationWarning
      >
        {value}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white pt-1">
          {label}
        </small>
      </span>
    </>
  );
}

const Timer = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
  }, [launchDate]);

  return (
    <div className="flex justify-center lg:justify-start mt-10 gap-1">
      <NumberDisplay value={timeLeft.days} label="Days" />
      <NumberDisplay value={timeLeft.hours} label="Hours" />
      <NumberDisplay value={timeLeft.minutes} label="Minutes" />
      <NumberDisplay value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Timer;