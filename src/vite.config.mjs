import { defineConfig } from "vite";
import vue from "vitejs/plugin-vue";

import "npm:vue@^3.2.39";
import "npm:vue-router@4";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});