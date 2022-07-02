class CookieEmailNotExist extends Error {
    constructor() {
        super("The email inside of cookie doesn't exist");
        Object.setPrototypeOf(this, CookieEmailNotExist.prototype);
      }
}

export default CookieEmailNotExist;