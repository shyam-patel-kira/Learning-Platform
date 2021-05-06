module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        customblack: '#02111B',
        custombrown: '#3F4045',
        customnewblue: '#00ADB5',
        customhoverblue: '#3edbf0',
        customwhite: '#FFFFFF',
        customgray: '#eeeeee',
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
        customdarkblue: '#222831',
        onhover: '#b7b7a4',
        onhovertext: '#3a0ca3',
        carditem: '#d7e3fc',
        todobordercolor: '#149fff',
        todoinputcolor: '#5d0cff',
        trialback: '#0B172A',
        trialback2: '#BC4123',
      },
      boxShadow: {
        customsm: '2px 10px 35px 1px rgba(153, 153, 153, 0.3)',
      },
      fontFamily: {
        myfonts: [
          'Trebuchet MS',
          'Lucida Sans Unicode',
          'Lucida Grande',
          'Lucida Sans',
          'Arial',
          'sans-serif',
        ],
      },
      margin: {
        fx: '500px',
      },
      height: {
        quanth: '1550px',
        shyamh: '424px',
        customcar: '500px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
