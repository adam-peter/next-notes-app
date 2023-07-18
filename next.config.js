/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.autoforum.cz",
        port: "",
        pathname: "/tmp/magazin/2r/**", //wildcard - all images from this path
      },
    ],
  },
};

module.exports = nextConfig;
