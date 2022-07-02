import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export default async function ( sessionId : number) : Promise<boolean>
{
    try
    {
        await prisma.session.delete({where:{
            id:sessionId
        }});

        return true;
    }
    catch
    {
        return false;
    }
}
