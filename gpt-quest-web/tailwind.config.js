import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'wood_pattern': "url('gpt-quest-web/assets/wood-theme.jpeg')"
      },
      colors: {
        classes: {
          'barbarian': "#ff0000",
          'ranger': "#ffa500",
          'druid': "#008000",
          'cleric': "#ffeb3b",
          'rogue': "#1976d2",
          'warlock': "#800080",
          'bard': "#ffc0cb",
          'wood': "#704F32",

        },
      },
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
});

