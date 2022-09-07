import React from "react";
import PortableText from "./portableText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Exercise = (props) => {
  const { question, _rawText } = props;
  return (
    <div>
      <Card sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ paddingBottom: 2, fontWeight: 700 }}>
            {question.cs}
          </Typography>
          {_rawText && <PortableText blocks={_rawText} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default Exercise;
