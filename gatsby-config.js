// Initialize dotenv
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

// And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config')

module.exports = {
    siteMetadata: {
        title: `aperitivo`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@abadiu`,
        twitter: `@AdrianBadiu`,
        siteUrl: `https://loopside.uk/aperitivo`,
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `config`,
                path: `${__dirname}/src/config/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `aperitivo`,
                short_name: `aperitivo`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/aperitivo.svg`, // This path is relative to the root of the site.
                cache_busting_mode: 'none',
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                workboxConfig: {
                    globPatterns: ['**/src/assets/aperitivo.svg*'],
                },
            },
        },
    ],
}
