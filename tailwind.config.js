/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("flowbite/plugin"),
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("tailwindcss"),
  ],
  darkMode: "class",
};
