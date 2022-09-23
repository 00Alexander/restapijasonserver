const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 'restapijasonserver-6346-md81pdgrf-00alexander.vercel.app';

server.use(middlewares);
server.use(router);
server.listen(port, ()=>{
    console.log(`JSON Server is running in ${port}`);
});