import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1E5AA8", // Earth Blue
                navy: "#0B1B34", // Deep Navy
                sky: "#6EC1FF", // Sky Accent
                teal: "#22D3EE", // Teal Accent (sparely)
                background: {
                    light: "#F6F9FF",
                    dark: "#0B1B34",
                },
                text: {
                    light: "#0F172A",
                    dark: "#E6EEF8",
                },
            },
            backgroundImage: {
                'noise': "url('/noise.png')",
                'earth-gradient': "linear-gradient(135deg, #1E5AA8, #0B1B34, #6EC1FF)",
            },
            animation: {
                'gradient-shift': 'gradient-shift 10s ease infinite',
                'subtle-float': 'subtle-float 6s ease-in-out infinite',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
                },
                'subtle-float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            borderRadius: {
                '2xl': '1.5rem',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
export default config;
