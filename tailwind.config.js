module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: ["'Roboto'", "sans-serif"],
        },
        extend: {},
    },
    variants: {
        extend: {
            textColor: ["active"],
        },
    },
    plugins: [],
};
