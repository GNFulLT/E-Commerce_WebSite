import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from "jsonwebtoken";
import cookieParse from "cookie-parser";
import { getCookies, getCookie, setCookies, removeCookies, checkCookies } from 'cookies-next';
import { CookieType } from '../../../lib/CookieType';

import { PrismaClient, user } from '@prisma/client'
const prisma = new PrismaClient();



export default async function ( req : NextApiRequest,res: NextApiResponse)
{
    let isSessionExpired = false;
    let sessionG;
    if(checkCookies(process.env.COOKIE_TOKEN_SECRET!,{req,res}))
    {
        console.log("cookie var")
        
        
        try
        {
            const cookie  = getCookie(process.env.COOKIE_TOKEN_SECRET!,{req,res})?.toString();
            const endCookie : CookieType = JSON.parse(cookie!);

            const session = await prisma.session.findFirst({where:{
                sessionKey:endCookie.accessToken
            }});

            if(!session)
            {
              removeCookies(process.env.COOKIE_TOKEN_SECRET!,{req,res});
            }
            else
            {
                //Find user
                const user = await prisma.user.findUnique({where:{
                    id: session.user_id
                }})
            
                //Check cookie email and session email is equal
                if(user?.email.valueOf() != endCookie.email.valueOf())
                {
                    //If they aren't equal jump to catch block
                    await prisma.session.delete({where:{
                        id:session.id
                    }})
                    throw "Emails are not equal";
                }
                else{
                //If Session Expired
                if(Date.now() > session.expire_at.getDate())
                {


                    isSessionExpired = true;
                }
                else
                {
                    
                   
                        //Emails are equal validation is ended. So give email and token back to client
                        res.statusCode = 200;
                        const resData : CookieType = {accessToken:endCookie.accessToken,email:endCookie.email}
                        res.json(resData);
                        return;
                    
                    
                }
            }
            }
        }
        catch
        {
            //There is an exception while reading cookie so delete cookie and continue
            removeCookies(process.env.COOKIE_TOKEN_SECRET!,{req,res});

        }
        finally
        {

        }
        
    }
   
    if(!req.body)
    {
        res.statusCode = 404;
        res.send("Error There is no email and password");
        return;
    }

    const { email, password } = req.body;

    try
    {
        const user_db = await prisma.user.findFirst({where:{email: email,password:password}});
        if(!user_db)
        {
            res.statusCode = 401;
            res.send("Email or password is wrong");
            return;
        }

        const user_data = {email:email};
        
        const accessToken = jwt.sign(user_data,process.env.ACCESS_TOKEN_SECRET!,{expiresIn:"1d"});
        
        const resData = {accessToken:accessToken,email:user_db.email};

        const resString = JSON.stringify(resData);
        setCookies(process.env.COOKIE_TOKEN_SECRET!,resString,{req,res,maxAge:60*60*24});
        if(!isSessionExpired){
        prisma.session.create({data:{
            sessionKey:accessToken,
            expire_at:new Date(Date.now() + ( 3600 * 1000 * 24)),
            user_id:user_db.id,
            created_at:new Date(Date.now()),
            updated_at:new Date(Date.now())
        }}).then(()=>{console.log("Added new session")})
        }else
        {   //Must be fixed
            const cookie  = getCookie(process.env.COOKIE_TOKEN_SECRET!,{req,res})?.toString();
            const endCookie : CookieType = JSON.parse(cookie!);
            const session = await prisma.session.findFirst({where:{
                sessionKey:endCookie.accessToken
            }});

            prisma.session.update({data:{
                total:session!.total+BigInt(1),
                sessionKey:accessToken,
                updated_at:new Date(Date.now()),
                expire_at: new Date(Date.now() + ( 3600 * 1000 * 24))
            },where:{id:session!.id}})
        } 
        res.json(resData);
    }
    catch(exception)
    {
        res.statusCode = 401;
        res.send("Email or password is wrong");
        return;
    }
    finally
    {
        prisma.$disconnect();
    }
 
    
}   