/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-noto)"],
      },
      fontSize: {
        xxxs: ["0.65rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        xxs: ["0.75rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        xs: ["0.8125rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        s: ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        m: ["1rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        l: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        xl: ["1.25rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        xxl: ["1.5rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        xxxl: ["1.625rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        xxxxl: ["2rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // 追加
        green: "hsl(var(--green))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
