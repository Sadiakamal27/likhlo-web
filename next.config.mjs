/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirect() {
    return [
      {
        source: "/",
        destination: "/store",
        permanent: "true",
      },
    ];
  },
};
export default nextConfig;
