import { useState } from "react";

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {
  const [count, setCount] = useState(quantity);

  const handleSubstract = () => {
    if (count === 1) return;
    setCount((prevCount) => prevCount - 1);
  };
  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <section className="flex flex-col gap-4 items-center p-4 ">
      <p>{name}</p>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={handleSubstract}
          className="p-1 aspect-square w-8 cursor-pointer bg-white rounded-md text-black"
        >
          -1
        </button>
        <span className="p-1 w-16 bg-gray-200 rounded-md text-black">
          {count}
        </span>
        <button
          onClick={handleAdd}
          className="p-1 aspect-square w-8 cursor-pointer bg-white rounded-md text-black "
        >
          +1
        </button>
      </div>
    </section>
  );
};
