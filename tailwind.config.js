/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fce4ec',
                    100: '#f8bbd0',
                    500: '#e91e63',
                    600: '#d81b60',
                    700: '#c2185b',
                },
                secondary: {
                    500: '#ff6f00',
                    600: '#f57c00',
                    700: '#e65100',
                },
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
