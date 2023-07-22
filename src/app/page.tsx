import Questions from "@/components/button";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pxqlqhtlvomqqbcbnjmx.supabase.co";
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY!);

const fetchQuestions = async () => {
  try {
    const { data } = await supabase.from("questions").select("*");
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export default async function Home() {
  const questions = await fetchQuestions();

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <input
        type="text"
        placeholder="Type your question"
        className="rounded-full px-4 py-3 w-10/12 bg-gray-700/75 text-white placeholder:text-gray-300 placeholder:text-center"
      />
      <Questions questions={questions} />
      
    </main>
  );
}
