import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

//context
import { AnswerContext } from "../../../context/answer-context";

const Answer = ({ value }) => {
  const [answer, setAnswer] = useState("");
  const { answers, setAnswers } = useContext(AnswerContext);

  //pridani odpoved do Answer Context answers
  useEffect(() => {
    setAnswers((ans) => [
      ...ans,
      { id: value?.answer?.sanityId, answer: "", correct: false },
    ]);
  }, []);

  //vyhleda z Answer context z answers prislusnou odpoved a zmeni hodnotu answer a correct
  const handleChange = (event) => {
    setAnswer(event.target.value);
    setAnswers(
      answers.map((item) =>
        item.id === value?.answer?.sanityId
          ? {
              ...item,
              answer: event.target.value,
              correct:
                event.target.value === value?.answer?.correctAnswer
                  ? true
                  : false,
            }
          : { ...item }
      )
    );
  };

  if (!value || !value.answer) {
    return null;
  }
  //pokud neni na vyber z odpovedi rendruje textfield
  if (!value?.answer?.answerss) {
    return (
      <FormControl variant="standard">
        <TextField
          id={value?.answer?.sanityId}
          variant="outlined"
          size="small"
          onChange={handleChange}
        />
      </FormControl>
    );
  } else {
    //jinaj rendruje select
    return (
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select
          labelId="demo-simple-select-label"
          id={value?.answer?.sanityId}
          value={answer}
          onChange={handleChange}
          sx={{ height: 30 }}
        >
          {value?.answer?.answerss?.map((ans, index) => {
            return (
              <MenuItem value={ans} key={index}>
                {ans}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
};

export default Answer;
