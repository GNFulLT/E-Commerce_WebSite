import { CookieAuthType } from "../types/CookieType";

import { PrismaClient } from '@prisma/client'
import CookieEmailNotExist from "./exceptions/cookieEmailNotExist";
import CookieAndEmailNotSame from "./exceptions/cookieEmailNotSameException";
const prisma = new PrismaClient();

export default async function(cookie:CookieAuthType) : Promise<{isValid: boolean,userId?: number }>
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
            if(user.email.valueOf() != cookie.email.valueOf())
            {
                userEmailEqual = false;
            }
            else
            {
                return {isValid:true,userId:user.id};
            }
        }
    }
    catch(ex)
    {
        console.log("While validate cookie error occured "+ex);
        return {isValid:false};
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