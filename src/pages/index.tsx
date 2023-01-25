import { useState } from "react";
import Head from "next/head";

// Components
import Button from "@/components/Button";
import Clock from "@/components/Clock";
import List from "@/components/List";

// Hooks
import { useTimer } from "@/hooks/useTimer";

// const inter = Inter({ subsets: ["latin"] });
// const lobster = Lobster({ weight: "400", style: ["normal"] });

export default function Home() {
  const mainColor = `bg-sunset-orange`;
  const textColor = `text-sunset-orange`;
  const secondColor = `hover:bg-sunset-orange-800`;
  const shadowColor = `hover:shadow-[0_15px_20px_rgba(249,65,68,0.4)]`;
  const [change, setChange] = useState(false);

  const timer = useTimer({
    change,
    initialTime: 900,
  });

  const handleClick = () => {
    setChange(!change);
  };

  return (
    <>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`flex flex-col w-full h-screen ${mainColor}`}>
        <header
          className={`w-full h-1/6 shadow-md flex items-center font-bold font-gotham p-3`}
        >
          <h1 className="text-white text-4xl">Pomodoro</h1>
        </header>
        <main
          className={`flex flex-col w-full h-screen px-3 justify-center items-center`}
        >
          <div
            className={`flex flex-col w-full h-4/5 bg-white shadow-lg rounded-md items-center md:w-2/3 lg:w-2/5 ease-in-out duration-300`}
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
}
