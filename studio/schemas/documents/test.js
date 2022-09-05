import { array } from "prop-types";

export default {
  type: "document",
  name: "test",
  title: "Test",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      localize: true,
    },
    {
      title: "Exercise",
      name: "exercise",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "exercise" }],
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      isUnique: "true",
      required: "true",
      options: {
        source: "name.cs",
        maxLength: 100, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
      },
      validation: (Rule) =>
        Rule.required().error("Toto pole je povinné vyplnit"),
    },
  ],
  preview: {
    select: {
      title: "name.cs",
    },
  },
};
