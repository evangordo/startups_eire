/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ldoximwndulwiibbnxuq.supabase.co",
        pathname: "/storage/v1/object/public/StartupsEire/**",
      },
    ],
  },
};

export default nextConfig;
