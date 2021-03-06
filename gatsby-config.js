module.exports = {
  siteMetadata: {
    title: `Freestyle Canada`,
    description: `Your hub for Freestyle Canada World Cup details and information.`,
    author: `Freestyle Canada`,
    siteUrl: `https://worldcups.freestylecanada.ski`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EJTEP3KXLM", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
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
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
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
        background_color: `#fff`,
        theme_color: `#000`,
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
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `aerials`,
        url: `https://data.fis-ski.com/services/public/icalendar-feed-fis-events.html?seasoncode=2022&sectorcode=FS&categorycode=WC&disciplinecode=AE%2CAET`,
      },
    },
     `gatsby-plugin-offline`,
     'babel-plugin-styled-components',
  ],
}
