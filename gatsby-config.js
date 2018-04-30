const fs = require('fs')

const noCache = require('require-no-cache')

const postCssCalc = require('postcss-calc')
const postCssNext = require('postcss-cssnext')
const postCssNested = require('postcss-nested') // really old version !!!
const postCssVars = require('postcss-simple-vars')
const postCssImport = require('postcss-import')
const postCssForLoop = require('postcss-for')
const postCssMixins = require('postcss-mixins')

const {
  cssVariables,
  cssImport,
  cssMixins,
} = require('./config/paths')

const defaultOverwrite = require('./config/gatsby-config');

// well... deep-assign would be better....
let config = {};
config.pathPrefix = defaultOverwrite.pathPrefix || '/doc-starter';
config.siteMetadata = defaultOverwrite.siteMetadata || {};
config.siteMetadata.title = defaultOverwrite.siteMetadata.title || 'signalwerk';


module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },

    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          postCssImport({
            root: cssImport.root,
          }),
          postCssForLoop(),
          postCssNested(),
          postCssVars({
            variables: () => {
              if (fs.existsSync(cssVariables)) {
                return noCache(cssVariables)
              }
              return {}
            },
          }),
          postCssMixins({
            mixinsDir: cssMixins.mixinsDir,
          }),
          postCssCalc(),
          postCssNext({
            // Allow future CSS features to be used, also auto-prefixes the CSS.
            browsers: ['last 2 versions', 'IE > 10'],
          }),
        ],
        // precision: 8, // SASS default: 5
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1600,
              linkImagesToOriginal: false,
              toFormat: "JPG",
            }
          },
          `gatsby-remark-autolink-headers`,
          'gatsby-remark-copy-linked-files',

        ],
      },
    },
  ],
}
