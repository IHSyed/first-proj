/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{html,js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
