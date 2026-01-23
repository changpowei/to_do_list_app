/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neu: {
                    base: '#E0E5EC',
                    light: '#FFFFFF',
                    dark: '#A3B1C6',
                    primary: '#3B82F6',
                    secondary: '#60A5FA',
                    accent: '#F97316',
                    text: '#4A5568',
                }
            },
            boxShadow: {
                'neu-flat': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
                'neu-pressed': 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)',
                'neu-convex': '6px 6px 10px 0 rgba(163,177,198, 0.7), -6px -6px 10px 0 rgba(255,255,255, 0.8)',
                'neu-concave': 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)',
            },
            fontFamily: {
                sans: ['Nunito Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
