import Form from "@/components/Form";
import { fetchAllQuestions } from "@/services/questions";
import dynamic from "next/dynamic";

const QuestionsMapper = dynamic(
  () => import("../components/Questions/questions"),
  {
    ssr: false,
  }
);

export default async function Home() {
  const questions = await fetchAllQuestions();

  return (
    <main className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
      <Form />
      <QuestionsMapper questions={questions} />
    </main>
  );
}
