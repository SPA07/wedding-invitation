import { useState, useEffect } from "react";

// Mueve esto dentro o asegúrate de que se ejecute correctamente
const targetDate = new Date("2026-10-30T18:00:00").getTime();

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(() => targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    // IMPORTANTE: Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    // Si el tiempo se acabó, devolvemos ceros
    if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="text-center border-2 border-[#f8f8f8] rounded-lg p-5 mt-5 max-w-md mx-auto">
      <h2 className="">Faltan</h2>

      <div className="flex justify-center items-center gap-4 text-2xl">
        <div className="flex flex-col items-center">
          <span>{days}</span>
          <p className="text-sm">Días</p>
        </div>

        <span>|</span>

        <div className="flex flex-col items-center">
          <span>{hours}</span>
          <p className="text-sm">Horas</p>
        </div>

        <span>|</span>

        <div className="flex flex-col items-center">
          <span>{minutes}</span>
          <p className="text-sm">Minutos</p>
        </div>

        <span>|</span>

        <div className="flex flex-col items-center">
          <span>{seconds}</span>
          <p className="text-sm">Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;