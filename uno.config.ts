import {defineConfig, presetWind, presetIcons,presetWebFonts  } from 'unocss'


export default defineConfig({
    presets: [
        presetWind(),
        presetIcons(),
        presetWebFonts({provider:'google', fonts:{
            roboto: 'Roboto',
        }}),
      ],
})