import { AuthCookieKey, CookieAuthType } from "../types/CookieType";
import type { NextApiRequest, NextApiResponse } from 'next';
import {getCookie, setCookies, removeCookies, checkCookies } from 'cookies-next';
import checkCookieExist from "./checkCookieExist";

import { PrismaClient } from '@prisma/client'
import createSession from "./controllers/createSession";
import checkSessionExist from "./controllers/checkSessionExist";
const prisma = new PrismaClient();



export default async function ( cookie : CookieAuthType,userId:number, req : NextApiRequest,res: NextApiResponse) : Promise<boolean>
{
   
    const isSessionExist = await checkSessionExist(cookie.accessToken);

    if(!isSessionExist)
    {
       const isSessionCreated = await createSession(cookie.accessToken,userId);

       if(isSessionCreated)
       {
        setCookies(AuthCookieKey,JSON.stringify(cookie),{req,res,maxAge:60*60*24});
        return true;
       }
       else
       {
        
       }
    }
    else
    {

    }

    return false;
}