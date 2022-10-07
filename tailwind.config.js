module.exports = {
  // mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: [
  //   "./components/**/*.{js,ts,jsx,tsx}",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  //   "./pages/**/*.{md,mdx}",
  //   "./theme.config.js",
  // ],

  purge: {
    enabled: true,
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{md,mdx}",
      "./theme.config.js",
    ],  
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
