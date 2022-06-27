class SessionCouldntUpdated extends Error {
    constructor() {
      super("Session couldn't updated");
      Object.setPrototypeOf(this, SessionCouldntUpdated.prototype);
    }
  }
  
  export default SessionCouldntUpdated;
  