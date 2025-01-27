// import type { NextConfig } from "next";

import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: {
    renderer: 'katex',
    options: {
      macros: {
        '\\RR': '\\mathbb{R}'
      }
    }
  },
  defaultShowCopyCode: true,
  contentDirBasePath: "/docs",
});

const nextConfig: NextConfig = withNextra({
  reactStrictMode: false,
});

export default nextConfig;
