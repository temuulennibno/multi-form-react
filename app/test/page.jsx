"use client";

import { useEffect, useEffectEvent, useState } from "react";

export default function Page() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  console.log("ZADGAI");

  useEffect(() => {
    console.log("EFFECT");
  }, []);

  useEffect(() => {
    console.log("Value");
  }, [value, counter]);

  return (
    <div className="w-full h-screen flex scale-200 justify-center items-center">
      <div>
        <input
          className="border"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className="border p-4"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <input
          className="border p-4"
          type="number"
          value={counter}
          onChange={(e) => {
            setCounter(e.target.value);
          }}
        />
        <button
          className="border p-4"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
