import sys

import prisma
from auth.Session import session
from dataclasses import dataclass
from .database import getDatabase

@dataclass
class LoginResponse:
    accessToken:str
    email:str
    first_name:str
    last_name:str


def login_controller(email:str,password:str,sessionKey:str) -> None | LoginResponse:
    try:
        db = getDatabase()
        user = db.user.find_unique(where={
        'email':email
        })
        print("user bu")
        if(user == None):
            return None
        elif(user.password != password):
            return None
        dbSession = db.session.find_unique(where={
            'user_id':user.id
        })
        if(dbSession == None):
            session.createSession(sessionKey,user.id)
        else:
            session.updateSession(sessionKey,dbSession.id)
        return LoginResponse(sessionKey,user.email,user.first_name,user.last_name)
    except:
        print("[LOGIN]\n[LOGIN]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
        return None

