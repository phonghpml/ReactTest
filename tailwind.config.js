/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    minWidth: {
      '10': '40px',
    },
    minHeight: {
      '10': '40px'
    }
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // }
};
