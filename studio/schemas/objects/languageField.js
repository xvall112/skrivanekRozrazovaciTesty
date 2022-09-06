const languages = [
  { name: "cs", title: "Czech (CZ)" },
  { name: "en", title: "English" },
  { name: "sk", title: "Slovakia" },
  { name: "de", title: "Germany" },
];

export default {
  type: "object",
  title: "Translation",
  name: "translation",
  fields: languages.map((language, i) => ({
    type: "string",
    title: language.title,
    name: language.name,
  })),
};

/* export default {
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
};
 */
