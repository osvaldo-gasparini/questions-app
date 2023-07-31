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
    <div
      className={`rounded-2xl p-4 h-full ${
        question ? "bg-white" : "bg-gray-400"
      }`}
    >
      {question ? (
        <>
          <p className="text-xl text-black font-semibold">{question.text}</p>
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-400 font-medium">{timeAgo()}</p>
          </div>
        </>
      ) : (
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
