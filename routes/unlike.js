const model = require('../models');

module.exports =
  {
    route: [{
      path: '/books/unlike/{bookId}',
      method: 'GET',
      handler: (request, response) => {
        const ids = request.params.bookId;
        // model.books.find({ where: { id: ids } })
        //   .on('success', (project) => {
        //   // Check if record exists in db
        //     if (project) {
        //       project.updateAttributes({
        //         like: true,
        //       })
        //         .success(() => {});
        //     }
        //   });

        model.likes.findOne({
          where: {
            id: ids,
          },
        }).then((like) => {
          if (like === null) {
            response(`Could not find book with id: ${ids}.`);
            throw new Error(`Could not find book with id: ${ids}.`);
          }
          like.updateAttributes({
            like: null,
          });
        }).then(() => {
          response('Unliked');
        });
      },
    },
    ],

  };
