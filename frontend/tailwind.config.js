module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  /*theme: {
    extend: {
      colors: {
        green: {
          customBorder: '#00ff84',
          submitColor: '#0D7503',
          cardColor: '#2A9D8F',
        },
        blue: {
          //navbar: '#002333',
          richBlack: '#02111B',
          buttonColor: '#3F4045',
          hoverbuttonColor: '#474E57',
          textColor: '#FCFCFC',
        },
      },

      flex: {
        2: '2',
      },
    },
  }*/
  theme: {
    colors: {
      customblack: '#02111B',
      custombrown: '#3F4045',
      coffee: '#30292F',
      metal: '#e6ccb2',
      charcoal: '#474E57',
      customblue: '#5D737E',
      sand: '#ADB8BD',
      customwhite: '#FCFCFC',
      jet: '#3C3C43',
      log: '#023e8a',
      loghover: '#4361ee',
      boxColor: '#9bf6ff',
      backColor: '#1b4332',
      accordionBoxColor: '#a1cca5',
      customred: '#dd1c1a',
      custompink: '#fec89a',
      customdarkblue: '#3d405b',
      onhover: '#b7b7a4',
      onhovertext: '#3a0ca3',
      carditem: '#d7e3fc',
      todobordercolor: '#149fff',
      todoinputcolor: '#5d0cff',
      trialback:'#0B172A',
      trialback2:'#BC4123'
    },
    boxShadow: {
      customsm: '2px 10px 35px 1px rgba(153, 153, 153, 0.3)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
