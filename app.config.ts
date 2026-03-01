import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  solid: {
    babel: {
      // Fixes babel de-optimized warning
      compact: true,
    },
  },
  server: {
    preset: "vercel",
    routeRules: {
      "/github": { redirect: "https://github.com/DanieliusDev" },
      "/crates.io": { redirect: "https://crates.io/users/DanieliusDev" },
      "/npm": { redirect: "https://npmjs.com/~gamertike" },
      "/spotify": { redirect: "https://open.spotify.com/user/danbff203" },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
