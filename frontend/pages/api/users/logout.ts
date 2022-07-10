import type { NextApiRequest, NextApiResponse } from 'next';
import { CheckCookieExist } from '../../../lib/auth';
import deleteCookie from '../../../lib/auth/deleteCookie';
import { AuthCookieKey } from '../../../lib/types/CookieType';

export default async function ( req : NextApiRequest,res: NextApiResponse)
{
    const isCookieExist = await CheckCookieExist(AuthCookieKey,req,res);
    if(isCookieExist)
        deleteCookie(AuthCookieKey,req,res);
    res.status(200);
    res.send("");
    return;
}