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
    <main className="px-10 flex flex-col gap-5">
      {question !== null ? (
        <QuestionBox question={question} />
      ) : (
        <h2>This question does not exist</h2>
      )}
      <Link className="bg-white rounded-full px-5 py-2 mx-auto w-fit" href="/">
        ← Go back
      </Link>
    </main>
  );
}
