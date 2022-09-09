/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},

	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.md$/,
			loader: 'raw-loader',
		});

		return config;
	},
};

module.exports = nextConfig;
