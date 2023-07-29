"use client";

import { deleteQuestion } from "@/services/questions";
import { useRouter } from "next/navigation";

const ButtonDelete = ({ id }: { id: string }) => {
  const router = useRouter();
  const deleteQuestionFn = async () => {
    const res = await deleteQuestion(id);
    if (res) {
      router.push("/");
    }
  };

  return (
    <button onClick={deleteQuestionFn} className="px-2">
      Delete
    </button>
  );
};

export default ButtonDelete;
