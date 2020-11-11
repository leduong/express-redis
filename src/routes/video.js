// eslint-disable-next-line import/newline-after-import
import redis from '../config/redis';

// eslint-disable-next-line consistent-return

module.exports = app => {
  app.get('search', (req, res) => {
    redis.getAsync(key(HOTLINKING_API)).then(async data => {
      if (!data) {
      } else {
      }
    });
  });
};
