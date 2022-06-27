import {getCookie, setCookies, removeCookies, checkCookies } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function(AuthCookieKey:string,req : NextApiRequest,res: NextApiResponse)
{
    removeCookies(AuthCookieKey,{req,res});
}