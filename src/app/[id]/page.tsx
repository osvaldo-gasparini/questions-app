import Button from "@/components/Button";
import QuestionBox from "@/components/QuestionBox";
import { fetchQuestionById } from "@/services/questions";
import Link from "next/link";

export default async function Question({
  params: { id },
}: {
  params: { id: string };
}) {
  const question = await fetchQuestionById(id);

  return (
    <main className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <Link className="px-2 w-fit" href="/">
          ← Go back
        </Link>
      </div>
      {question !== null ? (
        <QuestionBox question={question} />
      ) : (
        <h2>This question does not exist</h2>
      )}
    </main>
  );
}
