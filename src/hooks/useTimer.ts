import { useEffect, useState } from "react";

interface useTimerProps {
    change: boolean;
    initialTime: number;
}

export const useTimer = (props: useTimerProps) => {
    const {change, initialTime} = props;
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (change && time > 0) {
          const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
          }, 1000);
    
          return () => clearInterval(interval);
        }
      }, [change, time]);

      return time;
}