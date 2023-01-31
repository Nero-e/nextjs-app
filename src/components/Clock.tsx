interface clockProps {
  textColor: string;
  time: number;
}

const Clock = (props: clockProps) => {
    const {time, textColor} = props;
  const millisecondsToMinutes = (milliseconds: number) => {
    const minutes = Math.trunc(milliseconds / 60);
    const seconds = milliseconds % 60;

    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };
  return (
    <>
      <h1 className={`text-8xl font-bold font-gotham ${textColor}`}>
        {millisecondsToMinutes(time)}
      </h1>
    </>
  );
};

export default Clock;
