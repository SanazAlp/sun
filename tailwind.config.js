import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        PrimaryButton: {
          DEFAULT: "var(--orange-500)",
        },
      },
    }
  },

  plugins: [flowbitePlugin]
} as Config;

