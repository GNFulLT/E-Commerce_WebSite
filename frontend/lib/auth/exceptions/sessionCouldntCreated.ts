class SessionCouldntCreated extends Error {
    constructor() {
      super("Session couldn't created");
      Object.setPrototypeOf(this, SessionCouldntCreated.prototype);
    }
  }
  
  export default SessionCouldntCreated;
  