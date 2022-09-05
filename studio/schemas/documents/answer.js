export default {
  name: "answer",
  type: "document",
  title: "Answer",
  fields: [
    {
      name: "id",
      type: "string",
      title: "ID",
      description:
        "Jednoznačný identifikátor odpovědi (nezobrazuje se v testu)",
    },
    {
      name: "correctAnswer",
      type: "string",
      title: "Correct answer",
      description: "Správná odpověď",
    },

    {
      type: "array",
      name: "answerss",
      title: "Answerss",
      description: "Výběr odpovědí včetně správné odpovědi",
      of: [{ type: "string" }],
    },
    {
      type: "object",
      name: "answers",
      description: "Výběr odpovědí včetně správné odpovědi",
      fieldsets: [{ name: "options", title: "Answer options" }],
      fields: [
        {
          title: "Option 1",
          name: "options1",
          type: "string",
          fieldset: "options",
        },
        {
          title: "Option 2",
          name: "options2",
          type: "string",
          fieldset: "options",
        },
        {
          title: "Option 3",
          name: "options3",
          type: "string",
          fieldset: "options",
        },
        {
          title: "Option 4",
          name: "options4",
          type: "string",
          fieldset: "options",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "id",
      correctAnswer: "correctAnswer",
    },
    prepare({ title, correctAnswer }) {
      const path = `správná odpověď: ${correctAnswer}`;
      return {
        title,
        subtitle: path,
      };
    },
  },
};
