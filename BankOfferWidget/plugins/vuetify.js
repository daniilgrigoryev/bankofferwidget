import Vue from 'vue'
import Vuetify from 'vuetify'
import ru from 'vuetify/es5/locale/ru'

Vue.use(Vuetify)

const options = {
  lang: {
    locales: { ru },
    current: 'ru',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#356bb9',
        accent: '#274672',
        secondary: '#274672',
        info: '#9bf8ff',
        success: '#49E06A',
        error: '#EB5757',
        warning: '#F7D142',
        blueGray: '#5b708d',
        darkBlue: '#274672',
      },
      dark: {
        primary: '#356bb9',
        accent: '#274672',
        secondary: '#424242',
        info: '#2196F3',
        success: '#4CAF50',
        error: '#EB5757',
        warning: '#F7D142',
        blueGray: '#5b708d',
        darkBlue: '#274672',
      },
    },
  },
}

export default new Vuetify(options)
