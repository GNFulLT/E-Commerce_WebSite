import { AuthCookieKey, CookieAuthType } from "../types/CookieType";
import type { NextApiRequest, NextApiResponse } from 'next';
import {checkCookies } from 'cookies-next';



const checkCookieExist = async ( cookie : CookieAuthType , req : NextApiRequest,res: NextApiResponse) : Promise<boolean> =>
{
   
    if(checkCookies(AuthCookieKey,{req,res}))
    {
        return false;
    }

    return true;
}

export default checkCookieExist;