// import type { NextConfig } from "next";

import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: {
    renderer: 'katex',
    options: {
      macros: {
        '\\RR': '\\mathbb{R}',
        '\\mu': '\\mu',
      },
      strict: 'ignore',
      // Override the math font to one that supports more symbols
      font: 'ams',  // AMS font has better support for various symbols
    },
  },
  defaultShowCopyCode: true,
  contentDirBasePath: "/license",
});

const nextConfig: NextConfig = withNextra({
  reactStrictMode: false,
});

export default nextConfig;
