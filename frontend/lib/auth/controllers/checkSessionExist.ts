import type { NextApiRequest, NextApiResponse } from 'next';


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const checkSessionExist = async ( sessionKey : string ) : Promise<{isExist:boolean,sessionId?:number}> =>
{
    try{
    const session = await prisma.session.findFirst({where:{
        sessionKey:sessionKey
    }});
    console.log(session);
    if(!session)
    return {isExist:false};
    else
    {
        console.log("exist")
        return {isExist:true,sessionId:session.id}
    }
    }
    catch(ex)
    {
        console.log("There is an error occured while trying to check session existance "+ex);
        return {isExist:false};
    }

    return  {isExist:false};
}

export default checkSessionExist;