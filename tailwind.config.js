/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            "green" : "#4EA818",
            "darkGreen" : "#4B8F22",
            "white" : "#FFFFFF",
            "text" : "#475056",
            "black" : "#212529",
            "darkBlack" : "#000000",
            "red" : "#B00020",
            "transparent" : "#FFFFFF00"
        },
        screens: {
            "full": {"max": "1580px"},
            "desktop": {"max": "1440px"},
            "laptop-lg": {"max": "1280px"},
            "laptop": {"max": "1199px"},
            "tablet-lg": {"max": "1024px"},
            "tablet": {"max": "991px"},
            "mobile-lg": {"max": "767px"},
            "mobile": {"max": "479px"},
        },
        extend: {
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"]
            }
        }
    },
    plugins: [],
}