const winston = require("winston");

// const logConfiguration = {
//   transports: [new winston.transports.Console()],
// };

const logConfiguration = {
  transports: [
    new winston.transports.File({
      filename: "logs/nodeLogger.log",
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    winston.format.printf(
      (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
    )
  ),
};

const logger = winston.createLogger(logConfiguration);
module.exports = logger;
