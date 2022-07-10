import sys
from prisma import Prisma

db = Prisma()


def getDatabase():
    print(db.is_connected())
    if(db.is_connected() == False):
        db.connect()
    return db