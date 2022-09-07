import React, { useEffect, useContext } from "react";
import Exercise from "./components/exercise";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//context
import { AnswerContext } from "../../context/answer-context";

const Test = (props) => {
  const { answers, setAnswers } = useContext(AnswerContext);
  useEffect(() => {
    return () => {
      setAnswers([]);
    };
  }, []);
  const { id, name, exercise, box } = props;
  console.log(answers);
  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {name.cs}
      </Typography>
      <Card variant="outlined" sx={{ marginY: 3 }}>
        <CardContent>
          <Typography variant="overline">{box.cs}</Typography>
        </CardContent>
      </Card>

      {exercise.map((exercise, index) => {
        return <Exercise {...exercise} key={index} />;
      })}
    </div>
  );
};

export default Test;
