//https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        Inter: [300, 400, 700],
        display: "swap",
      },
    ],
  ],
  app: {
    head: {
    title: 'KEYLOGO',
  }
},
 runtimeConfig: { 
      //define variables available only on the server side
      DBHost: process.env.DB_HOST,
      DBUser: process.env.DB_USER,
      DBPass: process.env.DB_PASS,
      DBPort: process.env.DB_PORT,
      DBDb: process.env.DB_DATABASE,
      
      public: {
         //define variables available to the client
         APPNAME: process.env.APPNAME
    }
  }
});
