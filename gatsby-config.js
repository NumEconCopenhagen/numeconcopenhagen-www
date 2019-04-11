const yaml = require('js-yaml');
const fs = require('fs');

exports_ = {
    plugins: [
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Roboto:300,400,500', 'VT323']
                }
            }
        },
        {
            resolve: `gatsby-transformer-remark`
        },
        {
            resolve: `gatsby-transformer-yaml`
        }
    ]
}

const config = yaml.safeLoad(fs.readFileSync('./content/config.yml', 'utf8'));
config.paths.forEach(element => {
    exports_.plugins.push({
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/${element}`,
        },
    })
});

module.exports = exports_