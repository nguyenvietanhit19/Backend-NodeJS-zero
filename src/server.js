// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';  //localhost
// const port = 6969;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n Nguyen Viet Anh');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');

const webRoutes = require('./routes/web');

//import express from 'express'
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;



//config template engine
configViewEngine(app);



//khai bao route
app.use('/',webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});