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

		config.resolve = {
			...config.resolve,
			fallback: {
				fs: false,
				path: false,
				os: false,
			},
		};

		return config;
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.mercadodomalte.com.br/**',
			},
		],
	},
};

module.exports = nextConfig;
