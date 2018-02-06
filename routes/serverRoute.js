module.exports = {
  route: [{
    path: '/',
    method: 'GET',
    handler: (req, res) => {
      res('server is running');
    },
  },
  ],
};
