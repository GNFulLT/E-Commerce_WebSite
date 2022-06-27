class CookieAndEmailNotSame extends Error {
  constructor() {
    super("Cookie email and user email aren't same");
    Object.setPrototypeOf(this, CookieAndEmailNotSame.prototype);
  }
}

export default CookieAndEmailNotSame;
