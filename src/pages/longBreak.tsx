// React
import { useState } from "react";
import Head from "next/head";

// Components
import Button from "@/components/Button";
import Clock from "@/components/Clock";
import List from "@/components/List";

// Hooks
import { useTimer } from "@/hooks/useTimer";
const LongBreak = () => {
  const mainColor = ` bg-electric-violet`;
  const textColor = ` text-electric-violet`;
  const secondColor = ` hover:bg-electric-violet-800`;
  const shadowColor = `hover:shadow-[0_15px_20px_rgba(146,93,245,0.4)]`;
  const [change, setChange] = useState(false);

  const timer = useTimer({
    change,
    initialTime: 1200,
  });

  const handleClick = () => {
    setChange(!change);
  };

  return (
    <>
      <Head>
        <title>Long Break</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`flex flex-col w-full h-screen ${mainColor}`}>
        <main
          className={`flex flex-col w-full h-screen px-3 justify-center items-center`}
        >
          <div
            className={`flex flex-col w-5/6 h-2/5 bg-electric-violet-300 shadow-lg rounded-md items-center justify-between p-6 max-w-[650px]`}
          >
            <List textColor={textColor} />
            <div
              className={`flex flex-col w-full h-full justify-center items-center`}
            >
              <Clock textColor={textColor} time={timer} />
            </div>
            <div className={`flex flex-row w-full h-1/3 justify-center p-4`}>
              <Button
                onClick={handleClick}
                change={change}
                mainColor={mainColor}
                shadowColor={shadowColor}
                secondColor={secondColor}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LongBreak;
