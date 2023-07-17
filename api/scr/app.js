
const express =  require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require("morgan")
const MR = require('./routes/routes.js')
const cors = require('cors');
//--se crea el server a partir de ejecutar express v
const server = express();

//-- middlewares

//preset that i dont get
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
// server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//--morgan detalla res v
server.use(morgan("dev"))

//--JSONea res v
server.use(express.json())

//permite reques externas
server.use(cors());

//--manda las req a el reuter v
server.use(MR)

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = server ;