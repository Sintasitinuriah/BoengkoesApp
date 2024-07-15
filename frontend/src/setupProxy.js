const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'https://api.rajaongkir.com/starter',
    changeOrigin: true,
  }));
  
  app.use(
    '/api/wilayah',
    createProxyMiddleware({
      target: 'https://alamat.thecloudalert.com/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/api/wilayah': '', // Menghapus path base
      },
      logLevel: 'debug',
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying request to Wilayah:', proxyReq.path);
      },
    }));
};
