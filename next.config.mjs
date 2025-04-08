const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/essamsleiman.github.io/" : "",
  basePath: isProd ? "/essamsleiman.github.io" : "",
  output: "export",
};

export default nextConfig;
