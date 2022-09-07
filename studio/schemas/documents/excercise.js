export default {
  type: "document",
  name: "exercise",
  title: "Exercise",
  fields: [
    {
      name: "myId",
      type: "string",
      title: "ID",
      description:
        "Jednoznačný identifikátor odpovědi (nezobrazuje se v testu)",
    },
    {
      title: "Question",
      name: "question",
      type: "translation",
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [
        {
          type: "block",
          of: [{ type: "answerReference" }],
        },
        { type: "answerReferenceLine" },
      ],
    },
  ],
  preview: {
    select: {
      title: "myId",
      subtitle: "question.cs",
    },
  },
};
