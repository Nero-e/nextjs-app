import React from "react";

interface buttonProps {
  onClick: () => void;
  change: boolean;
  mainColor: string;
  shadowColor: string;
  secondColor: string;
}

const Button = (props: buttonProps) => {
  const { mainColor, shadowColor, secondColor, onClick, change } = props;
  return (
    <>
      <button
        onClick={onClick}
        className={`py-4 px-16 text-white font-bold uppercase tracking-[.20em] font-gotham rounded-full shadow-xl hover:-translate-y-1 ease-in duration-300 ${mainColor} ${secondColor} ${shadowColor}`}
      >
        {!change ? "Start" : "Stop"}
      </button>
    </>
  );
};

export default Button;
