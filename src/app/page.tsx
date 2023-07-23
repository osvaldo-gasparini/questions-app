import QuestionsMapper from "@/components/Questions/questionsNoSSR";
import { Question } from "@/types/types";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pxqlqhtlvomqqbcbnjmx.supabase.co";
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY!, {
  auth: { persistSession: false },
});

const fetchQuestions = async () => {
  try {
    const { data } = await supabase.from("questions").select("*");
    return data as Question[];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export default async function Home() {
  const questions = await fetchQuestions();

  const handleSubmit = async (formData: FormData) => {
    "use server";

    const question = formData.get("question");
    await supabase.from("question").insert({ text: question });
  };

  return (
    <main className="flex flex-col items-center justify-center w-full px-10">
      <form action={handleSubmit} className="flex flex-col items-center gap-2">
        <input
          name="question"
          type="text"
          placeholder="Type your question"
          className="rounded-full px-4 py-3 w-full bg-gray-700/75 text-white placeholder:text-gray-300 placeholder:text-center"
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
