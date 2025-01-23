import { useDispatch } from "react-redux";
import { addAnswer } from "../slices/anwerSlice";

function QuestionCard({ question }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option) => {
        return (
          <div className="flex gap-4" key={option.optionId}>
            <input
              type="radio"
              name={question.questionId}
              id={question.question}
              value={option.optionId}
              onChange={(e) =>
                dispatch(
                  addAnswer({
                    questionId: question.questionId,
                    optionId: e.target.value,
                  })
                )
              }
            />
            <label htmlFor={question.question}>{option.answer}</label>
          </div>
        );
      })}
    </div>
  );
}

export default QuestionCard;
