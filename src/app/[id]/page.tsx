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
      <Link className="px-1 font-medium w-fit" href="/">
        ← Go back
      </Link>
      {question !== null ? (
        <QuestionBox question={question} />
      ) : (
        <h2>This question does not exist</h2>
      )}
    </main>
  );
}
