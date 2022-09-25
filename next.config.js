/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['henri-potier.xebia.fr'],
	},
};

module.exports = nextConfig;
