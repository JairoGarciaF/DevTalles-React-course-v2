import { useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mundo");
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoAPP</h1>
      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} />
      <button
        className="bg-blue-500  text-white py-2 px-4 rounded-md cursor-pointer"
        onClick={() => setTitle(title === "Hola" ? "Adiós" : "Hola")}
      >
        Cambiar Título
      </button>
      <button className="bg-blue-500  text-white py-2 px-4 rounded-md cursor-pointer">
        Cambiar Subtítulo
      </button>
    </div>
  );
};
