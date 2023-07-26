"use client";

import { Question } from "@/types/types";
import QuestionBox from "../QuestionBox";

const Questions = ({ questions }: { questions: Question[] }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
      {questions?.map((question: Question) => (
        <QuestionBox key={question.id} question={question} />
      ))}
    </section>
  );
};

export default Questions;
