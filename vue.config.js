module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://vektorprogrammet.no',
      },
    },
  },
};
