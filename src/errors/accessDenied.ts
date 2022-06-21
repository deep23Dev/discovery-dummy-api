export {};

const BaseError = require("./baseError");

class AccessDeniedError extends BaseError {
  constructor(message: string) {
    super(403, message);
  }
}

export default AccessDeniedError;
