"use client";

import { Question } from "@/types/types";
import QuestionBox from "../QuestionBox";
import Link from "next/link";

const Questions = ({ questions }: { questions: Question[] }) => {

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
      {questions?.map((question: Question) => (
        <Link
          className="cursor-pointer"
          href={`/${question.id}`}
          key={question.id}
          prefetch
        >
          <QuestionBox question={question} />
        </Link>
      ))}
    </section>
  );
};

export default Questions;
