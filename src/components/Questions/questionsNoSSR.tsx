import { Question } from "@/types/types";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./questions"), { ssr: false });

export default function QuestionsMapper({ questions }: { questions: Question[] }) {
  return (
    <div>
      <NoSSR questions={questions} />
    </div>
  );
}
