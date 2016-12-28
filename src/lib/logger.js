const winston = require('winston');

export default new (winston.Logger)({
  level: 'debug',
  transports: [
    new (winston.transports.Console)({
      colorize: true
    })
  ];
});
