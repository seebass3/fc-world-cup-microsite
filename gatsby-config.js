module.exports = {
  siteMetadata: {
    title: `Freestyle Canada`,
    description: `Your hub for Freestyle Canada World Cup details and information.`,
    author: `Freestyle Canada`,
    siteUrl: `https://worldcups.freestylecanada.ski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js") // Optional: Load custom Tailwind CSS configuration
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `none`,
          quality: 100,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fc-world-cup-microsite`,
        short_name: `fc-wc`,
        start_url: `/`,
        icon: `src/images/icon-freestyle_canada.png`, 
        background_color: `#f7f0eb`,
        theme_color: `#a41890`,
      },
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, 'fr'],
        // language file path
        defaultLanguage: `en`,
        redirectDefaultLanguageToRoot: true,
        redirect: false,
        // redirectComponent: require.resolve(`./src/components/redirect.js`),
        fallbackLanguage: `en`,
      },
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `moguls`,
        url: `https://data.fis-ski.com/services/public/icalendar-feed-fis-events.html?seasoncode=2022&sectorcode=FS&categorycode=WC&disciplinecode=MO%2CDM`,
      },
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `halfpipe`,
        url: `https://data.fis-ski.com/services/public/icalendar-feed-fis-events.html?seasoncode=2022&sectorcode=FS&categorycode=WC&disciplinecode=HP`,
      },
    },
    //  `gatsby-plugin-offline`,
     'babel-plugin-styled-components'
  ],
}
