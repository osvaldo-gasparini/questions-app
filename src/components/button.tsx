"use client";

import { Question } from "@/types/types";

const Questions = ({ questions }: { questions: Question[] }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 mx-4">
      {questions?.map((question: Question) => {
        return (
          <div key={question.id} className="bg-white rounded-2xl p-4">
            <p className="text-xl text-black font-semibold">{question.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Questions;
