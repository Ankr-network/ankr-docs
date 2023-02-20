module.exports = {
  // mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{md,mdx}",
    "./theme.config.js",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
};
