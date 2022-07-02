import { CookieAuthType } from "../types/CookieType";

import { PrismaClient } from '@prisma/client'
import { CookieAndEmailNotSame, CookieEmailNotExist } from "./exceptions";

const prisma = new PrismaClient();

export default async function(cookie:CookieAuthType,cookieEmail:string) : Promise<{isValid: boolean,userId?: number }>
{
    let isUserExist = true;
    let userEmailEqual = true;
    try
    {
        const user = await prisma.user.findUnique({where:{
            email:cookie.email
        }});
        if(!user)
        {
            isUserExist = false;
        }
        else
        {
            if(user.email.valueOf() != cookieEmail.valueOf())
            {
                userEmailEqual = false;
            }
            else
            {
                const session = await prisma.session.findFirst({where:{
                    sessionKey:cookie.accessToken
                }});
                console.log("session : "+session);
                if(new Date(Date.now()) > session?.expire_at!)
                {
                    
                    return {isValid:false};
                }
                return {isValid:true,userId:user.id};
            }
        }
    }
    catch(ex)
    {
        console.log("While validate cookie error occured "+ex);
        return {isValid:false};
    }
    finally
    {
        prisma.$disconnect();
    }
    if(!isUserExist)
    {
        throw new CookieEmailNotExist();
    }
    if(!userEmailEqual)
    {
        throw new CookieAndEmailNotSame();
    }
    return {isValid:false}; 
}