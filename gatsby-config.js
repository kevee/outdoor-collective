
module.exports = {
  siteMetadata: {
    title: `Outdoor Collective`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c4qbgmrb0ioy`,
        accessToken: `30a7b7d7979c95c6e8665f55397fe44c95fdd2b56f0f0bb376ed5141d41e1bcb`,
      },
    }
  ]
}
