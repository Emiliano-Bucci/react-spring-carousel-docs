const withLinaria = require("next-linaria");

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      // issuer section restricts svg as component only to
      // svgs imported from js / ts files.
      //
      // This allows configuring other behavior for
      // svgs imported from other file types (such as .css)
      issuer: { and: [/\.(js|ts|md|tsx)x?$/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withLinaria(nextConfig);
