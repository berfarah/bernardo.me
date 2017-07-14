module.exports = {
  siteMetadata: {
    title: `Bernardo Farah: Developer, Amateur Musican, Tech Enthusiast`,
    author: `Bernardo Farah`,
    homeCity: `San Francisco`,
    description: `Hi, I am Bernardo Farah - a mix of Swiss and Brazilian, a developer, an amateur composer, and a tech enthusiast`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-25464133-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bernardo.me",
        short_name: "Bernardo.me",
        icons: [
          {
            src: "/bernardo.png",
            sizes: "1024x1024",
            type: "image/png",
          },
        ],
        start_url: "/",
        background_color: "#f5f8fa",
        theme_color: "#f5f8fa",
        display: "minimal-ui",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
  ],
}
