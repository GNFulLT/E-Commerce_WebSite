import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from "jsonwebtoken";


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

interface RegisterData
{
    nameSurname:string,
    email:string,
    password:string
}

export default async function ( req : NextApiRequest,res: NextApiResponse){
    
    if(!req.body)
    {
        res.statusCode = 404;
        res.send("Error There is no email and password");
        return;
    }

    const regData :RegisterData = req.body;
    if(!regData.email || !regData.nameSurname || !regData.password)
    {
        res.statusCode = 404;
        res.send("One argument is empty");
        return;
    }
    if(regData.email.length >= 45 || regData.nameSurname.length > 45 || regData.password.length > 45)
    {
        res.statusCode = 413;
        res.send("One or many argument is too long");
        return;
    }

    try
    {
        let user = await prisma.user.findUnique({where:{email:regData.email}});
        
        if(user){
        res.statusCode = 452;
        res.send("Email is not available");
        return;
        }
        const nsArray = regData.nameSurname.split(" ");
        const surName = nsArray[nsArray.length-1];
        let name = "";
       
        for(let i = 0;i<nsArray.length-1;i++)
        {
            name += nsArray[i];
            if(i >= 3)
            {
                res.statusCode = 406;
                res.send("Name is too long");
                return;
            }
        }
        await prisma.user.create({data:{
            email:regData.email,
            first_name: name,
            last_name: surName,
            password:regData.password   
        }});

        res.statusCode = 201;
        res.send("Successfully registered");
        return;
    }
    finally
    {
        prisma.$disconnect();
    }
    
}