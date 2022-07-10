import sys
from datetime import datetime, timedelta
from auth.Session import session
from .database import getDatabase
import prisma.types

def register_controller(email:str,password:str,firstName:str,lastName:str) -> None | str:
    try:
        db = getDatabase()
        user = db.user.find_unique(where={
            'email':email
        })
        if(user != None):
            return None
        createdUser = db.user.create({
            'email':email,
            'password':password,
            'first_name':firstName,
            'last_name':lastName,
            'updated_at':datetime.now(),
            'created_at':datetime.now(),
        })
        return createdUser.email
    except:
        print("[REGISTER]\n[REGISTER]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
        return None
