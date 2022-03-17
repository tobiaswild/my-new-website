module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.sanity.io",
      "images.pexels.com",
      "repository-images.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/post",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  serverRuntimeConfig: {
    PROJECT_ID: process.env.PROJECT_ID,
    DATASET: process.env.DATASET,
  },
};
