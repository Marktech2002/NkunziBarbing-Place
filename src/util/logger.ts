import winston, { format } from "winston";

export const LOG_CONSOLE = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.timestamp(), format.json()),
    }),

    new winston.transports.File({
      filename: "combined.log",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

const levels = {
  error: "error",
  warn: "warn",
  info: "info",
  http: "http",
  verbose: "verbose",
  debug: "debug",
  silly: "silly",
};

export const logger = {
  error: (message: string) => LOG_CONSOLE.log({ level: levels.error, message }),
  warn: (message: string) => LOG_CONSOLE.log({ level: levels.warn, message }),
  info: (message: string) => LOG_CONSOLE.log({ level: levels.info, message }),
  http: (message: string) => LOG_CONSOLE.log({ level: levels.http, message }),
  verbose: (message: string) =>
    LOG_CONSOLE.log({ level: levels.verbose, message }),
  debug: (message: string) => LOG_CONSOLE.log({ level: levels.debug, message }),
  silly: (message: string) => LOG_CONSOLE.log({ level: levels.silly, message }),
};
 