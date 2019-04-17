const https = require('https');
const http = require('http');

const get = url => {
  let protocol = http;
  if (/https/.test(url)) protocol = https;
  return new Promise((resolve, reject) => {
    protocol
      .get(url, res => {
        let rawData = '';
        res.on('data', chunk => {
          rawData += chunk;
        });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            resolve(parsedData);
          } catch (e) {
            reject(e.message);
          }
        });
      })
      .on('err', reject)
  });
};

module.exports = get;