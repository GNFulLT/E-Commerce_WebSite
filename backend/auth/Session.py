from datetime import datetime, timedelta
from controller.database import getDatabase
import sys;
import prisma

class session(object):
    @staticmethod
    def checkSession(sessionKey:str) -> None | prisma.models.session: 
        try:
            db = getDatabase()
            dbSession = db.session.find_first(where={
            'sessionKey':sessionKey
            })
            if(dbSession == None):
                return None
            return dbSession
        except:
            print("[SESSION]\n[CHECK_SESSION]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
            return None
            
    @staticmethod
    def createSession(sessionKey:str,userId:int):
        try:
            db = getDatabase()
            db.session.create(data={
            'sessionKey':sessionKey,
            'user_id': userId,
            'updated_at':datetime.now(),
            'created_at':datetime.now(),
            'expire_at':datetime.now() + timedelta(days=1),
            })
            return
        except:
            print("[SESSION]\n[CREATE_SESSION]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
    @staticmethod
    def updateSession(sessionKey:str,sessionId:int):
        try:
            db = getDatabase()
            db.session.update(data={
            'sessionKey':sessionKey,
            'total':{
            'increment':1
            },
            'updated_at':datetime.now(),
            'expire_at':datetime.now() + timedelta(days=1),
            },where={
                'id':sessionId
            })
        except:
            print("[SESSION]\n[UPDATE_SESSION]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
            return
    @staticmethod
    def validateSession(session:prisma.models.session,email:str) -> bool:
        try:
            print(session.expire_at)
            db = getDatabase()
            print("tarih checkleniyor")
            now = datetime.now()
            if(session.expire_at.date() < now.date()):
                if(session.expire_at.time() < now.time()):
                    return False
            print("user aranıyor")
            user = db.user.find_unique(where={
                'id':session.user_id
            })
            print("user emaili kontrol ediliyor")
            if(user.email != email):
                return False
            return True
        except:
            print("[SESSION]\n[VALIDATE_SESSION]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
            return False
        
    @staticmethod
    def deleteSession(sessionId:int):
        try:
            db = getDatabase()
            db.session.delete(where={
            'id':sessionId
            });
            return
        except:
            print("[SESSION]\n[DELETE_SESSION]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
            return

    @staticmethod
    def checkSessionByUser(userId:int):
        try:
            db = getDatabase()  
            session = db.session.find_unique(where={
                'user_id':userId
            })
            if(session == None):
                return None
            return session
        except:
            print("[SESSION]\n[CHECK_SESSION_BY_USER]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
            return None