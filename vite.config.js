/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "BMICalculator",
        replacement: path.resolve(__dirname, "src/components/BMICalculator"),
      },
      {
        find: "Grocery",
        replacement: path.resolve(__dirname, "src/components/grocery"),
      },
    ],
  },
});
