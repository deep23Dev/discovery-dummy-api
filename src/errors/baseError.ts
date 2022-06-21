class BaseError extends Error {
    code: number;
    constructor(statusCode: number, message: string) {
      super();
      this.code = statusCode;
      this.message = message;
    }
  }
  
  module.exports = BaseError;
  