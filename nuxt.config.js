export default {
  head: {
    title: 'Hades Build Randomizer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800' },
    ]
  },
  plugins: [
    '@/plugins/bootstrap-vue'
  ]
};
