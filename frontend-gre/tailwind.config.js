module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          green: {
            customBorder: '#00ff84',
            submitColor: '#0D7503',
            cardColor: '#2A9D8F',
          },
          blue: {
            navbar: '#002333',
          },
        },
        flex: {
          2: '2',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  };
  