require("dotenv").config()


module.exports = {
  siteMetadata: {
    title: "Tattooing by William Brown",
    titleTemplate: "%s - Tattooing by William Brown",
    description:
      "William Brown is a Tattoo Artist based in NYC and Sydney",
    url: "https://www.williampeterbrown.com", 
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require('postcss-import'),
          require('postcss-nested'),
          require('postcss-cssnext'),
          require('postcss-calc'),
          require('postcss-discard-comments'),
          require('postcss-reporter')
        ]
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Tattooing by William Brown`,
    //     short_name: `William Brown`,
    //     start_url: `/`,
    //     background_color: `#000`,
    //     theme_color: `#FFF`,
    //     display: `standalone`,
    //     icon: `src/images/myIcon.ico`,
    //   },
    // },
  ],
}
