class SessionCouldntDeleted extends Error {
    constructor() {
      super("Session couldn't deleted");
      Object.setPrototypeOf(this, SessionCouldntDeleted.prototype);
    }
  }
  
  export default SessionCouldntDeleted;
  