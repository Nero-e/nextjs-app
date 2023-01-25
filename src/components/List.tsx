// React
import Link from "next/link";
interface listProps {
  textColor: string;
}

const List = (props: listProps) => {
  const { textColor } = props;
  const options = [
    { id: 1, text: "Pomodoro", url: "/" },
    { id: 2, text: "Short Break", url: "/shortBreak" },
    { id: 3, text: "Long Break", url: "/longBreak" },
  ];
  return (
    <>
      <div className={`flex flex-row-reverse w-full h-1/6 p-3`}>
        <button
          className={`sm:hidden font-gotham font-bold 
              items-center p-2 ml-3 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${textColor}`}
        >
          M
        </button>
        <ul
          className={`w-full h-full sm:flex flex-row justify-between items-center font-bold hidden ${textColor}`}
        >
          {options.map(({ text, id, url }) => (
            <li key={id}>
              <Link href={url}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
