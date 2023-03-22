const packageJson = require('../../package.json');

var baseURL = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
var hostname = window.location.hostname;

export const environment = {
  production: true,
  //domain: hostname,
  apiUrl: baseURL
};
