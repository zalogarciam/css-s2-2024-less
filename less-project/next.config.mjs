/** @type {import('next').NextConfig} */
const nextConfig = {};

import withLess from "next-with-less";

export default withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
});
