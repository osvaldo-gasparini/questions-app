import { Question } from "@/types/types";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!,
  {
    auth: { persistSession: false },
  }
);

export const fetchQuestions = async () => {
  try {
    const { data } = await supabase.from("questions").select("*");
    return data as Question[];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const postQuestion = async (formData: FormData) => {
  "use server";

  const question = formData.get("question");
  await supabase.from("questions").insert({ text: question });

  revalidatePath("/");
};
