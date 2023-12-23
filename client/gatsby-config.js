/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `Images`, //gatsby in this folder to graphql server
        // Path to the directory
        path: `${__dirname}/src/assets/`,
      },
    }, 
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-omni-font-loader`,
        options: {
          enableListener: true,
          preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
          web: [
            {
              name: `Montserrat`,
              file: `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`,
            },
            {
              name: `Inter`,
              file : `https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`

            },
            {
              name: `Merienda`,
              file: `https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`
            }
          ],
        },
      },
  ],
  siteMetadata: {
    title: "Elemental",
    description: "MarketPlace",
    copyright: "blake",
  },
};
