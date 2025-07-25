// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/icon',
    [
      '@pinia/nuxt',
      {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
      },
    ]
  ],
  runtimeConfig: {
    BASE_URL: process.env.BASE_URL
  },
  imports: {
    dirs: ["./stores"],
  },
  css: ['~/assets/css/main.css', '~/assets/css/style.css'],
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,
  },
});
