const server = require('./api/server');
const port = process.env.PORT || 4444;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
