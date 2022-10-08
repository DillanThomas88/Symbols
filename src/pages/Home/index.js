import { useEffect, useState } from "react";
export function Home() {
  const numbers = "0123456789".split("");
  const symbols = ["-", "+", "÷", "×", "(", ")", "mod"];
  const [equation, setEquation] = useState([]);
  const [evalu, setEvalu] = useState("");
  const [answer, setAnswer] = useState(43);
  const [numGrid, setNumGrid] = useState([Grid(numbers), Grid(numbers)]);
  const [symGrid] = useState(Grid(symbols));
  useEffect(() => {
    if (equation.length) {
      setEvalu(evaluate(equation));
    }
  }, [equation]);
  console.log(evaluate(equation));
  return (
    <>
      <div className=" w-full px-5 py-2 mb-5 text-white flex justify-between items-center font-thin border-b-2 border-neutral-700 bg-amber-400 text-neutral-800 font-normal ">
        <div className="flex-col justify-between">
          <div>{equation.length ? evalu : ""}</div>
          <div className="mr-2 flex">
            {equation.length &&
              equation.map((e, i) => (
                <div
                  key={e + i}
                  className={`text-center flex justify-center items-start
                  ${isNaN(e) && "text-white px-[2px]"}
                  ${
                    e.length > 1
                      ? "text-sm px-4 italic font-normal"
                      : "text-2xl"
                  }
                `}
                >
                  {e}
                </div>
              ))}
          </div>
        </div>
        <div className="text-6xl font-light">{answer}</div>
      </div>
      <div className={`grid grid-cols-5 content-center justify-center mb-2`}>
        {numGrid[0]}
      </div>
      <div className={`grid grid-cols-7 content-center justify-center mb-2`}>
        {symGrid}
      </div>
      <div className={`grid grid-cols-5 content-center justify-center mb-6`}>
        {numGrid[1]}
      </div>
      <div className="flex w-full justify-around items-center text-center">
        <button
          onClick={() =>
            setEquation((prev) => [...prev].splice(0, prev.length - 1))
          }
          className="text-yellow-400 border-r border-t border-neutral-700 px-4 pt-2 rounded-tr-sm"
        >
          DELETE
        </button>
        <button
          onClick={() => setEquation([])}
          className="text-white border-l border-t border-neutral-700 px-4 pt-2 rounded-tl-sm"
        >
          CLEAR
        </button>
      </div>
    </>
  );

  function evaluate(arr) {
    if (isNaN(arr[arr.length - 1]) && arr[arr.length - 1] !== ")") return arr;
    let open = arr.map((e) => (e === "(" ? 1 : 0)).reduce((a, b) => a + b);
    let close = arr.map((e) => (e === ")" ? 1 : 0)).reduce((a, b) => a + b);
    console.log({ open, close });
    if (open !== close) return "?";

    let readable = arr.map((e) => {
      switch (e) {
        case !isNaN(e):
          break;
        case "÷":
          e = "/";
          break;
        case "×":
          e = "*";
          break;
        case "mod":
          e = "%";
          break;
        default:
          break;
      }

      return e;
    });

    let result = eval(readable.join(""));

    if (result === "error") return result;

    return result % 1 !== 0 ? result.toFixed(3) : result;
  }

  function Grid(library) {
    const arr = [];
    for (let i = 0; i < library.length; i++) {
      let item = library[i];
      arr.push(
        <button
          onClick={() => setEquation((equation) => [...equation, item])}
          key={i}
          className={` ${
            item.length > 1 ? "text-sm" : "text-xl"
          } h-12 m-[1px] border border-stone-700 flex text-center justify-center items-center rounded-sm ${
            isNaN(item) ? "text-amber-400 w-12" : "text-white w-14"
          }`}
        >
          {item}
        </button>
      );
    }

    return arr;
  }
}
