/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    name: `Michael Posso`,
    brand: `Tech Leadership | Web Developer | Educator`,
    siteUrl: `https://www.mikeposso.com`,
    description: `A web developer, technical leader and user interface designer`,
    menu: [
      { to: "skills", label: "skills" },
      { to: "projects", label: "projects" },
      { to: "teaching", label: "teaching" },
      { to: "blog", label: "blog" },
      { to: "about", label: "about" },
    ],
    social: [
      { to: "https://github.com/micposso", label: "github" },
      { to: "projects", label: "linkedin" },
      { to: "teaching", label: "resume" },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Old Standard TT`,
            file: `https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Raleway:wght@400;600&display=swap`,
          },
          {
            name: `Rubik`,
            file: `https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;0,600;1,400&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `blog`,
        // Path to the directory
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YUA-5309625-1',
        head: true,
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
