export default {
  type: "document",
  name: "exercise",
  title: "Exercise",
  fields: [
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
          of: [
            {
              type: "reference",
              title: "Answer",
              to: [{ type: "answer" }],
            },
          ],
        },
        { type: "reference", to: [{ type: "answer" }] },
      ],
    },
  ],
  preview: {
    select: {
      title: "question.cs",
    },
  },
};
