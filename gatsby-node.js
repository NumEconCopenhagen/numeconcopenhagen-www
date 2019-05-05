const path = require(`path`) // highlight-line
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;
    createNodeField({
      node,
      name: `slug`,
      value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
    });
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });
  }
  if (node.internal.type === 'JupyterNotebook') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `notebooks`
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const indexTemplate = path.resolve("./src/templates/main.jsx");
    const notebookTemplate = path.resolve("./src/templates/notebookTemplate.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
            allJupyterNotebook {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;
        const notebooks = result.data.allJupyterNotebook.edges;

        // Create posts
        items.forEach(({ node }, index) => {
          const slug = node.fields.slug;

          createPage({
            path: slug,
            component: indexTemplate,
            context: {
              slug,
            }
          });
        });

        // and notebooks.
        notebooks.forEach(({ node }) => {
          const slug = node.fields.slug
          createPage({
            path: slug,
            component: notebookTemplate,
            context: {
              slug
            },
          });
        });
      })
    );
  });
};

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions // highlight-line
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     // highlight-start
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/templates/main.jsx`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.fields.slug,
//         },
//       })
//     })
//     // highlight-end
//   })
// }