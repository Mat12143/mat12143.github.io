/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors: {
            text : "#A2B182",
            background: "#1f1f1f",
            primary: "#EF2943",
        },
        fontFamily : {
            'mono' : ["JetBrains-Regular"],
            'semibold' : ["JetBrains-SemiBold"]
        }
    },
    plugins: [addDynamicIconSelectors()],
};
