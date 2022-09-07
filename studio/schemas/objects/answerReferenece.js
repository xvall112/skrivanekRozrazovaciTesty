export default {
  name: "answerReference",
  type: "object",
  title: "Answer reference",
  fields: [
    {
      name: "answer",
      type: "reference",
      to: [
        {
          type: "answer",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "answer.id",
      subtitle: "answer.correctAnswer",
    },
  },
};
