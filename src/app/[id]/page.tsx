import QuestionBox from "@/components/QuestionBox";
import { fetchQuestionById } from "@/services/questions";

export default async function Question({
  params: { id },
}: {
  params: { id: string };
}) {
  const question = await fetchQuestionById(id);

  return (
    <main className="px-10">
      {question !== null ? (
        <QuestionBox question={question} />
      ) : (
        <h2>This question does not exist</h2>
      )}
    </main>
  );
}
