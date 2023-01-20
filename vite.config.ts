import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import tsconfigPaths from "vite-tsconfig-paths";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: `bin/barretenberg.wasm`,
          dest: "",
        },
        {
          src: `bin/web_worker.js`,
          dest: "",
        },
      ],
    }),
  ],
});
