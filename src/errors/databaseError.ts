export {};

const BaseError = require("./baseError");

class DatabaseError extends BaseError {
  constructor(message: string) {
    super(500, message);
  }
}

module.exports = DatabaseError;
