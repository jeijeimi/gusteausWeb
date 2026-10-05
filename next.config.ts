import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    // Bootstrap 5 resuelve sus parciales por nombre y todavía usa @import
    loadPaths: [path.join(process.cwd(), "node_modules/bootstrap/scss")],
    quietDeps: true,
    silenceDeprecations: ["import", "global-builtin", "color-functions", "if-function"],
  },
};

export default nextConfig;
