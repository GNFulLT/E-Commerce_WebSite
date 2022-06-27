import { CookieAuthType } from "../types/CookieType";
import type { NextApiRequest, NextApiResponse } from 'next';
import {getCookie, setCookies, removeCookies, checkCookies } from 'cookies-next';
import checkCookieExist from "./checkCookieExist";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import createSession from "./controllers/createSession";
import checkSessionExist from "./controllers/checkSessionExist";
import validateSession from "./controllers/validateSession";
import updateSession from "./controllers/updateSession";
import deleteSession from "./controllers/deleteSession";

import {SessionCouldntCreated,SessionCouldntDeleted,SessionCouldntUpdated} from "./exceptions"




export default async function ( AuthCookieKey:string,cookie : CookieAuthType,userId:number, req : NextApiRequest,res: NextApiResponse) : Promise<boolean>
{
    let {isExist,sessionId} = await checkSessionExist(cookie.accessToken);
    // If session doesn't exist
    if(!isExist)
    {
        try{
       const session = await prisma.session.findFirst({where:{
        user_id:userId
       }}) 
        if(session)
        {
            sessionId = session.id;
            console.log(sessionId);
             //Check userId and the user id that session belongs to same
        const isSessionValid =  await validateSession(sessionId!,userId);
            console.log(userId + " " + session.user_id);
        if(isSessionValid)
        {
            const sessionUpdated = await updateSession(cookie.accessToken,sessionId!);
            if(!sessionUpdated)
                throw new SessionCouldntUpdated();

            setCookies(AuthCookieKey,JSON.stringify(cookie),{req,res,maxAge:60*60*24});
            return true;
        }
        else
        {
            console.log("siliniyo")
            const sessionDeleted = await deleteSession(sessionId!);

            if(!sessionDeleted)
                throw new SessionCouldntDeleted();

            const isSessionCreated = await createSession(cookie.accessToken,userId);
            if(!isSessionCreated)
                throw new SessionCouldntCreated();
            
            setCookies(AuthCookieKey,JSON.stringify(cookie),{req,res,maxAge:60*60*24});
            return true;
        }
        }
        }
        catch
        {
        }
       const isSessionCreated = await createSession(cookie.accessToken,userId);

       if(isSessionCreated)
       {
        //If Session is created
        setCookies(AuthCookieKey,JSON.stringify(cookie),{req,res,maxAge:60*60*24});
        return true;
       }
       else
       {
        //Session couldn't created
        throw new SessionCouldntCreated();
       }
    }
    //If sesssion already exist
    else
    {
        //Check userId and the user id that session belongs to same
        const isSessionValid =  await validateSession(sessionId!,userId);

        if(isSessionValid)
        {
            const sessionUpdated = await updateSession(cookie.accessToken,sessionId!);
            if(!sessionUpdated)
                throw new SessionCouldntUpdated();

            setCookies(AuthCookieKey,JSON.stringify(cookie),{req,res,maxAge:60*60*24});
            return true;
        }
        else
        {
            const sessionDeleted = await deleteSession(sessionId!);

            if(!sessionDeleted)
                throw new SessionCouldntDeleted();

            const isSessionCreated = await createSession(cookie.accessToken,userId);
            if(!isSessionCreated)
                throw new SessionCouldntCreated();
            
            setCookies(AuthCookieKey,JSON.stringify(cookie),{req,res,maxAge:60*60*24});
            return true;
        }
    }

    return false;
}