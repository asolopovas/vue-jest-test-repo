const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            ...colors,
            danger: '#dc3545',
        },
        extend: {},
        container: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        container: false,
    },
}
