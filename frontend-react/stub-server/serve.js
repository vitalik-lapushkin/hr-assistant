const fs = require('fs/promises');
const path = require('path');
const express = require('express');

const app = express();

const jsonDir = `${__dirname}${path.sep}json`;

const mapJsonToRequest = (methodName, requestPath, jsonPath) => {
  app[methodName](requestPath, handleStubRequest(jsonPath));
}

const handleStubRequest = (jsonPath) => {
  return (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    const filePath = `${jsonDir}${path.sep}${jsonPath}`;
    return fs
      .readFile(filePath)
      .then(data => {
        res.type('json');
        res.writeHead(200);
        res.end(data);
      });
  }
}

mapJsonToRequest('get', '/rest/person', 'persons-list.json');
mapJsonToRequest('delete', '/rest/person', 'empty.json');
mapJsonToRequest('post', '/rest/person', 'empty.json');

app.listen(process.env.SERVER_PORT);