import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
});
