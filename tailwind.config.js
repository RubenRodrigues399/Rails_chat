/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js"
  ],
    theme: {
      extend: {
        colors: {
          themeColorMain: "#1aa8db",
          themeColorSecondary: "#d23838"
        }
      },
    },
    variants: {},
    plugins: [],
  }