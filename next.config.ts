// import type { NextConfig } from "next";

import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: {
    renderer: 'mathjax',
    options: {
      config: {
        tex: {
          macros: {
            RR: '\\mathbb{R}'
          }
        }
      }
    }
  },
  defaultShowCopyCode: true,
  contentDirBasePath: "/docs",
});

const nextConfig: NextConfig = withNextra({
  reactStrictMode: true,
});

export default nextConfig;
