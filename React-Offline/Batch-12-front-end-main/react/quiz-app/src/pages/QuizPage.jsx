import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import QuestionCard from "../components/AnswerCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const QuizPage = () => {
  const { quizId } = useParams();
  const quizData = useSelector((state) => state.quiz);
  const { answers } = useSelector((state) => state.answer);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [marks, setMarks] = useState(0);

  const [quiz] = quizData.quizes.filter((quiz) => quiz.quizId === quizId);

  function handleSubmit() {
    let finalArray = [];

    for (let i = 0; i < answers.length; i++) {
      // answers[i].questionId --> questionId
      const newArray = quiz.questions.filter((q) => {
        if (
          q.questionId === answers[i].questionId &&
          q.correctAnswer === answers[i].optionId
        ) {
          setMarks(marks + 1);
          return true;
        }
      });

      finalArray = [...finalArray, ...newArray];
    }

    // marks = updated marks
    console.log(marks, finalArray);

    setOpen(true);
  }

  return (
    <div>
      <p className="text-4xl text-center font-semibold pt-8">{quiz.title}</p>
      <p className="text-center pb-8">{quiz.description}</p>
      <Divider />
      <div className="p-8 px-36 flex flex-col gap-8">
        {quiz.questions.map((question, index) => {
          return (
            <div className="flex gap-4" key={question.questionId}>
              <span>Q. {index + 1}</span>
              <QuestionCard question={question} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-8">
        <Button
          variant="outlined"
          color="success"
          className="w-36"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Result for your quiz is:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You got: {marks * 2} / 20
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

function ResultCard() {}

export default QuizPage;
