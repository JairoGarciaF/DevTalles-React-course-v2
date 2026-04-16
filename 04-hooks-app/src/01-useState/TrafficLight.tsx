import { useState } from "react";

type TrafficLightColors = "red" | "yellow" | "green";

export const TrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColors>("red");
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div
          className={
            light === "red"
              ? "w-32 h-32 bg-red-500 rounded-full"
              : "w-32 h-32 bg-gray-500 rounded-full"
          }
        ></div>
        <div
          className={
            light === "yellow"
              ? "w-32 h-32 bg-yellow-500 rounded-full"
              : "w-32 h-32 bg-gray-500 rounded-full"
          }
        ></div>
        <div
          className={
            light === "green"
              ? "w-32 h-32 bg-green-500 rounded-full"
              : "w-32 h-32 bg-gray-500 rounded-full"
          }
        ></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setLight("red")}
          >
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setLight("yellow")}
          >
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setLight("green")}
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
