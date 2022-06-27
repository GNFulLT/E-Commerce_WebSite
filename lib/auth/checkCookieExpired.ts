import type { NextApiRequest, NextApiResponse } from 'next';
import {CookieAuthType } from "../types/CookieType";

export default async function (cookie : CookieAuthType,userId:number, req : NextApiRequest,res: NextApiResponse) : Promise<boolean>
{
    return true;
}