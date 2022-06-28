export { };

const BaseError = require("./baseError");

class DatabaseError extends BaseError {
  constructor(status: number = 500, message: string) {
    super(status, message);
  }
}

module.exports = DatabaseError;
