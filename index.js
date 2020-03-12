const fastify = require('fastify')()
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public')
});

fastify.get('/', function (req, reply) {
  reply.sendFile('index.html');
});

// fastify.get('/path/with/different/root', function (req, reply) {
//   reply.sendFile('myHtml.html', path.join(__dirname, 'build')) // serving a file from a different root location
// })

fastify.listen(3000, err => {
  if (err) throw err
});