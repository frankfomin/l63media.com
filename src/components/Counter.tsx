import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    // Disable scrolling when the component mounts

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
  }

  function padZero(number: number) {
    return number < 10 ? `0${number}` : number;
  }

  return <div>{formatTime(counter)}</div>;
}
