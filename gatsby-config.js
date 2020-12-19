module.exports = {
    siteMetadata: {
        title: "voting-gatsby",
        mainPage: "/",
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: "gatsby-plugin-sass",
            options: {
                data: '@import "./src/styles/common.scss";',
            },
        },
        {
            resolve: "gatsby-plugin-less",
            options: {
                data: '@import "./src/styles/antd.less";',
                javascriptEnabled: true,
            },
        },
    ],
}
