/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/Gatsby_Static_Blueprint_Pipe",
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-161624855-1",
        optimizeId: "GTM-59QCRNC"
      },
    },
  ],
}
