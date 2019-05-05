const yaml = require('js-yaml');
const fs = require('fs');

exports_ = {
    plugins: [
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Roboto:300,400,500', 'VT323', 'Material+Icons']
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'config',
                path: `${__dirname}/config`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'content',
                path: `${__dirname}/content`,
            }
        },
        // {
        //     resolve: "gatsby-source-graphql",
        //     options: {
        //         typeName: "GitHub",
        //         fieldName: "github",
        //         // Url to query from
        //         url: "https://api.github.com/graphql",
        //         // HTTP headers
        //         headers: {
        //             // Learn about environment variables: https://gatsby.dev/env-vars
        //             Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        //         },
        //         // Additional options to pass to node-fetch
        //         fetchOptions: {},
        //     },
        // },
        {
            resolve: `gatsby-transformer-remark`
        },
        {
            resolve: `gatsby-transformer-yaml`
        },
        {
            resolve: `@gatsby-contrib/gatsby-transformer-ipynb`
        }
    ]
}

// const config = yaml.safeLoad(fs.readFileSync('./config/config.yml', 'utf8'));
// config.paths.forEach(element => {
//     exports_.plugins.push({
//         resolve: `gatsby-source-filesystem`,
//         options: {
//             path: `${__dirname}/${element}`,
//         },
//     })
// });

module.exports = exports_