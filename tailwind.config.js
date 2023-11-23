/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
			colors: {
				blue: '#007AFF',
				green: '#01D277',
				black: '#0C0A09'
			}
		},
  },
  plugins: [],
};
