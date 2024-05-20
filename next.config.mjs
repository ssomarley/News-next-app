/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains :["www.si.com"], // this line was only for on part 
    remotePatterns :[
      // in here we alowed to all sources how in production should be only from a trusted source like our server
      {
        protocol : "https",
        hostname: "**",
      },
      {
        protocol : "http",
        hostname: "**",
      }
      
    ]
      
  }
};

export default nextConfig;
