import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export default async function ( sessionId : number ,userId : number) : Promise<boolean>
{
    try{
        const session = await prisma.session.findUnique({where:{
        id:sessionId
        
        }});
        if(session?.user_id == userId)
            return true;
        
        return false;
    }
    catch(ex)
    {
        return false;
    }
}