// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/ap-favicon.ico" }],
    },
  },
});
