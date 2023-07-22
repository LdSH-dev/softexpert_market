import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'

export default createVuetify({
    theme: {
      dark: false, // Ativar tema escuro
      themes: {
        light: {
          primary: '#0091ed', // Cor primária
          secondary: '#ff4081', // Cor secundária
        },
        dark: {
          primary: '#42a5f5',
          secondary: '#f50057',
        },
      },
    },
    // Outras configurações do Vuetify
})
  
