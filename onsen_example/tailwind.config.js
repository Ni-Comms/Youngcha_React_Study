/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //media : 크롬테마환경따라감 , class : 자기가준 영역에만 다크모드.
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    // }
  },
  plugins: [],
}
