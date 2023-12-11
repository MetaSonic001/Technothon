// tailwind.config.js

import flowbitePlugin from 'flowbite/plugin';

const config = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};

export default config;
