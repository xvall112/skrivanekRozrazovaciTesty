export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "630e03127352f559094c1c1a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-94z7ikz2",
                  apiId: "1ff70573-d4fa-4bb8-8231-69f6d464a58e",
                },
                {
                  buildHookId: "630e0313f6a43e4b9cbe47be",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-jbj4xxdo",
                  apiId: "9ef5c748-e3e1-4d70-9ad6-00494bc90ae1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/xvall112/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-jbj4xxdo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
