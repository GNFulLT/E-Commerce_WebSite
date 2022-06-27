

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();



export default async function ( sessionKey : string ,userId : number) : Promise<boolean>
{
    try
    {
        await prisma.session.create({data:{
            user_id:userId,
            sessionKey:sessionKey,
            created_at:new Date(Date.now()),
            updated_at:new Date(Date.now()),
            expire_at:new Date(Date.now() + ( 3600 * 1000 * 24))
        }});

        return true;
    }
    catch(exception)
    {
        console.log("While creating session there is an error occured : "+exception);
    }
    return false;
}