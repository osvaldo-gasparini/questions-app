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
    <div className="flex flex-col items-center w-full mb-4 max-w-md gap-2">
      <div className="flex flex-row justify-between w-full relative">
        <input
          value={inputValue}
          name="question"
          type="text"
          placeholder="Say it"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="w-full bg-white shadow-inner px-4 py-2 rounded-3xl border-none placeholder:text-gray-400 placeholder:text-center focus:placeholder:text-black-oil focus:outline-none"
        />
        <button
          className={`${
            inputValue.length > 0 ? "block" : "hidden"
          } text-lg absolute right-0 transition-all px-4`}
          onClick={() => {
            setInputValue("");
          }}
        >
          ✕
        </button>
      </div>
      <button
        className="bg-black-oil text-white-steam shadow-inner rounded-3xl w-fit px-6 py-2"
        type="submit"
        onClick={onSubmit}
      >
        Send
      </button>
    </div>
  );
};

export default Form;
