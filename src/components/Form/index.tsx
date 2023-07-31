"use client";

import { useState } from "react";
import { postQuestion } from "@/services/questions";

const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [buttonMsg, setButtonMsg] = useState<string>("Send");

  const onSubmit = async () => {
    if (inputValue.length > 0) {
      postQuestion(inputValue);
      return;
    }
    setButtonMsg("You need to write something before!");
  };

  return (
    <div className="flex flex-row items-center justify-center w-full h-14 px-2 mb-4 max-w-md">
      <div className="flex flex-row rounded-l-3xl h-full bg-white shadow-inner justify-between items-center relative">
        <input
          value={inputValue}
          name="question"
          type="text"
          placeholder="Say it"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="w-full ml-2 border-none placeholder:flex placeholder:pl-2 placeholder:leading-[3rem] resize-none placeholder:text-gray-400 focus:placeholder:text-black-oil focus:outline-none"
        />
        <button
          className={`${
            inputValue.length > 0 ? "visible" : "invisible"
          } text-lg right-0 transition-all px-4`}
          onClick={() => {
            setInputValue("");
          }}
        >
          ✕
        </button>
      </div>
      <button
        className="bg-black-oil text-white-steam shadow-inner w-10 h-full rounded-r-3xl"
        type="submit"
        onClick={onSubmit}
      >
        <p className="rotate-90">▲</p>
      </button>
    </div>
  );
};

export default Form;
