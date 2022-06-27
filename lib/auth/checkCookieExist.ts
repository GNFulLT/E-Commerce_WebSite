import {CookieAuthType } from "../types/CookieType";
import type { NextApiRequest, NextApiResponse } from 'next';
import {checkCookies } from 'cookies-next';



const checkCookieExist = async ( AuthCookieKey:string,req : NextApiRequest,res: NextApiResponse) : Promise<boolean> =>
{
   
    if(checkCookies(AuthCookieKey,{req,res}))
    {
        return true;
    }

    return false;
}

export default checkCookieExist;