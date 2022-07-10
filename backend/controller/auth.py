from auth.Session import session
import sys
def auth_controller(sessionKey:str,email:str) -> None | str:
    try:
        dbSession = session.checkSession(sessionKey)
        print("Control ediliyo")
        if(dbSession == None):
            return None
        isValid = session.validateSession(dbSession,email)
        if(isValid == False):
            return None
        return dbSession.sessionKey
    except:
        print("[AUTH]\n[AUTH]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
        return None