/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 10px 30px rgba(2,6,23,0.10)',
            },
            colors: {
                brand: {
                    blue: '#2563EB', // blue-600
                    dark: '#1D4ED8', // blue-700
                    soft: '#EFF6FF', // blue-50
                }
            }
        },
    },
    plugins: [],
}
