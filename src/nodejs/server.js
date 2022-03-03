#!/usr/bin/env node
"use strict";

/* IPv4 & IPv6: ""
 * IPv4:        "0.0.0.0" OR "127.0.0.1"
 * IPv6:        "::0" OR "::1" */
const L_HOST = "";
/* 0:             assigend by OS
 * 1 to 1023:     root permission
 * 1024 to 65535: OK */
const L_PORT = 80;

const express = require("express");
const server = express();
const router = require('./router.js');

server.set('x-powered-by', false);
server.set('case sensitive routing', true);
server.set('strict routing', true);

server.use("/", router);

server.listen(L_PORT, L_HOST, () => {
  console.log(`Listening on ${L_HOST}:${L_PORT}`);
});
