import { useState, useEffect } from "react";

const targetDate = new Date("2026-10-30T18:00:00").getTime();

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(() => targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diference = targetDate - now;
      if (diference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(diference);
      }
    }, 1000);
  }, []);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Cuenta regresiva</h2>
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {days}d : {hours}h : {minutes}m : {seconds}s
      </div>
    </div>
  )
}

export default Timer