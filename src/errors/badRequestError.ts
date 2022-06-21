export {};

const BaseError = require("./baseError");

class BadRequestError extends BaseError {
  constructor(message: string) {
    super(400, message);
  }
}

module.exports = BadRequestError;
