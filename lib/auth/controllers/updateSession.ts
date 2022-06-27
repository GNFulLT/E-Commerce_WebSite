import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export default async function ( sessionKey : string ,sessionId : number) : Promise<boolean>
{
    try
    {
        await prisma.session.update({data:{
            sessionKey:sessionKey,
            updated_at:new Date(Date.now()),
            expire_at:new Date(Date.now() + ( 3600 * 1000 * 24)),
            total:{increment:1}
        },where:{
            id:sessionId,
    
        }})
        return true;
    }
    catch(ex)
    {
        return false;
    }
}