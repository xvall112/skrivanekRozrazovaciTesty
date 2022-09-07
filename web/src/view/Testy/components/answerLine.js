import React, { useState, useContext, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//context
import { AnswerContext } from "../../../context/answer-context";

const AnswerLine = ({ value }) => {
  const { answers, setAnswers } = useContext(AnswerContext);
  const [clickAnswer, setClickAnswer] = useState("");

  //pridani odpoved do Answer Context answers
  useEffect(() => {
    setAnswers((ans) => [
      ...ans,
      { id: value?.answer?.sanityId, answer: "", correct: false },
    ]);
  }, []);

  const theme = useTheme();

  //vyhleda z Answer context z answers prislusnou odpoved a zmeni hodnotu answer a correct
  const handleClick = (answer) => {
    setClickAnswer(answer);
    setAnswers(
      answers.map((item) =>
        item.id === value?.answer?.sanityId
          ? {
              ...item,
              answer: answer,
              correct: answer === value?.answer?.correctAnswer ? true : false,
            }
          : { ...item }
      )
    );
  };

  if (!value || !value.answer || !value.answer.answerss) {
    return null;
  }

  return (
    <span>
      <Box marginBottom={4}>
        <Stack direction={"row"} spacing={1}>
          {value?.answer?.answerss?.map((answer) => (
            <Box
              key={answer}
              onClick={() => handleClick(answer)}
              sx={{
                width: 1,
                borderRadius: 2,
                padding: 1,
                border: `2px solid ${
                  clickAnswer === answer
                    ? theme.palette.primary.main
                    : theme.palette.divider
                }`,
                cursor: "pointer",
              }}
            >
              <Typography align={"center"}>{answer}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </span>
  );
};

export default AnswerLine;
