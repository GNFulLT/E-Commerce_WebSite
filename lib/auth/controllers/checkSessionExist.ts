import type { NextApiRequest, NextApiResponse } from 'next';


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const checkSessionExist = async ( sessionKey : string ) : Promise<boolean> =>
{
    try{
    const session = prisma.session.findFirst({where:{
        sessionKey:sessionKey
    }});
    if(!session)
    return false;
    }
    catch(ex)
    {
        console.log("There is an error occured while trying to check session existance "+ex);
        return true;
    }

    return true;
}

export default checkSessionExist;