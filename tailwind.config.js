/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors: {
            background: "#0B1020",
            text: "#56644F",
            primary: "#EF2943",
        },
        fontFamily: {},
    },
    plugins: [addDynamicIconSelectors()],
};
