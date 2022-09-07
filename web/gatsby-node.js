const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });
}

async function createTestPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTest(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
            name {
              cs
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const testEdges = (result.data.allSanityTest || {}).edges || [];

  testEdges.forEach((edge) => {
    const { id, slug = {}, name } = edge.node;
    const path = `/test/${slug.current}/`;
    createPage({
      path,
      component: require.resolve("./src/templates/test.js"),
      context: { id, name },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
  await createTestPages(graphql, actions);
};
