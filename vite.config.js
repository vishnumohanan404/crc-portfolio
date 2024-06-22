import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Use fixed names for output files
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: (assetInfo) => {
          // Customize filename based on asset type (e.g., .css)
          if (assetInfo.name.endsWith(".css")) {
            return `assets/[name].css`; // Fixed name for CSS
          } else {
            return `assets/[name].[ext]`; // Default behavior for other assets
          }
        },
      },
    },
  },
  preview: {
    port: 5173,
  },
});
