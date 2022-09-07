import { PortableText as BasePortableText } from "@portabletext/react";
import React from "react";
import clientConfig from "../../client-config";
import { Figure } from "./Figure";

const components = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ value }) => (
      <div style={{ padding: "10px" }}>{value?.author?.name}</div>
    ),
    answerReference: ({ value }) => (
      <span>
        <select name={value?.answer?.sanityId} id={value?.answer?.sanityId}>
          <option value=""></option>
          {value?.answer?.answerss?.map((answer, index) => {
            return <option value={answer}>{answer}</option>;
          })}
        </select>
      </span>
    ),
    mainImage: Figure,
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
