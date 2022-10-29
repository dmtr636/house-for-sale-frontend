import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
	pathPrefix: "/house-for-sale-frontend",
	siteMetadata: {
		title: `house-for-sale-frontend`,
		siteUrl: `https://www.yourdomain.tld`
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-transformer-sharp",
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`],
					placeholder: `blurred`,
					quality: 75,
					breakpoints: [2560, 1920, 1366, 768, 460],
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
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		}
	],
};

export default config;
