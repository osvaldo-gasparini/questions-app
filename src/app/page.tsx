import { fetchAllQuestions, postQuestion } from "@/services/questions";
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
    <main className="flex flex-col items-center justify-center w-full px-10">
      <form
        action={postQuestion}
        className="flex flex-col items-center gap-2 w-full"
      >
        <input
          name="question"
          type="text"
          placeholder="Type your question"
          className="rounded-full px-4 py-3 w-80 bg-gray-700/75 text-white placeholder:text-gray-300 placeholder:text-center"
        />
        <button className="bg-white rounded-full px-6 py-1" type="submit">
          Send
        </button>
      </form>
      <div className="w-full h-px bg-black my-4" />
      <QuestionsMapper questions={questions} />
    </main>
  );
}
