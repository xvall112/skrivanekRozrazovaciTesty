export default {
  name: "answerReferenceLine",
  type: "object",
  title: "Answer reference line",
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
  preview: {
    select: {
      title: "answer.id",
      correctAnswer: "answer.correctAnswer",
      answers: "answer.answerss",
    },
    prepare({ title, correctAnswer, answers }) {
      const path = `správná odpověď: ${correctAnswer} možnosti: ${answers.map(
        (answer) => answer
      )}`;
      return {
        title,
        subtitle: path,
      };
    },
  },
};
