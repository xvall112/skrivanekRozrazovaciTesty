import { PortableText as BasePortableText } from "@portabletext/react";
import React from "react";
import clientConfig from "../../../../client-config";
import Answer from "./answer";
import AnswerLine from "./answerLine";

const components = {
  types: {
    /* eslint-disable-next-line react/display-name */
    text: ({ value }) => <div>{value}</div>,
    answerReference: Answer,
    answerReferenceLine: AnswerLine,
  },
};

const PortableText = ({ blocks }) => (
  <BasePortableText
    value={blocks}
    components={components}
    {...clientConfig.sanity}
  />
);

export default PortableText;
