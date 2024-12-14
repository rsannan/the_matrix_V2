import { defineConfig, presetIcons, presetWebFonts, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.5,
    }),
    presetWebFonts({ provider: 'google', fonts: {
      roboto: 'Roboto',
    } }),
  ],
})
