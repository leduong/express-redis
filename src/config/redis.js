/* eslint-disable global-require */
// eslint-disable-next-line func-names
(function () {
  const REDIS_URI = process.env.REDIS_URI || process.env.REDIS_URL || 'redis://localhost';
  const redisClient = require('redis');
  const { promisify } = require('util');

  const client = redisClient.createClient(REDIS_URI);

  const getAsync = promisify(client.get).bind(client);

  module.exports = {
    client,
    getAsync,
  };
}());
