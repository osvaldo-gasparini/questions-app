import { Question } from "@/types/types";

const QuestionBox = ({ question }: { question: Question }) => {
  const diff =
    (new Date().getTime() - new Date(question.created_at).getTime()) /
    (1000 * 60 * 60);
  const timeAgo = () => {
    if (diff / 24 >= 1) {
      return `${Math.floor(diff / 24)} days ago`;
    }
    if (diff % 24 >= 1) {
      return `${Math.floor(diff % 24)} hours ago`;
    }
    return `Just a moment ago`;
  };

  return (
    <div className="rounded-2xl p-4 h-full flex flex-col justify-between bg-white">
      <p className="text-xl text-black font-semibold">{question.text}</p>
      <div className="flex flex-row justify-between items-center">
        <p className="text-gray-400 font-medium">{timeAgo()}</p>
      </div>
    </div>
  );
};

export default QuestionBox;
