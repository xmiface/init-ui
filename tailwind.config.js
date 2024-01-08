/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./**/**/*.{ts,tsx, css, js, jsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        customgray1: "#323d70",
        customgray2: "#394063",
        twitchpink: "#9147FF",
        twitchdarkpink: '#772CE8',
        twitchgrey: "#DEDEE3",
        twitchhovergrey: "#928777",
        twitchbuttondisabled: "#232328",
        twitchdarkbg: "#1F1F23"
      },
    },
  },
};
