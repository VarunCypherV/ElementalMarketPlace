/** @type {import('next').NextConfig} */
// next.config.mjs

import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});


const nextConfig = {
  images: {
    domains: ['m.media-amazon.com', '5.imimg.com'],
  },
};


export default withAutoCert(nextConfig);