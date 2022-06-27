import type { NextApiRequest, NextApiResponse } from "next";
import {
  getCookies,
  getCookie,
  setCookies,
  removeCookies,
  checkCookies,
} from "cookies-next";
import { CookieType } from "../../../lib/types/CookieType";

import { PrismaClient, user } from "@prisma/client";
const prisma = new PrismaClient();

/*export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (checkCookies(process.env.COOKIE_TOKEN_SECRET!, { req, res })) {
    try {
      const cookie = getCookie(process.env.COOKIE_TOKEN_SECRET!, {
        req,
        res,
      })?.toString();
      const endCookie: CookieType = JSON.parse(cookie!);
      const session = await prisma.session.findFirst({
        where: {
          sessionKey: endCookie.accessToken,
        },
      });

      if (!session) {
        removeCookies(process.env.COOKIE_TOKEN_SECRET!, { req, res });
      } else {
        //Find user
        const user = await prisma.user.findUnique({
          where: {
            id: session.user_id,
          },
        });

        //Check cookie email and session email is equal
        if (user?.email.valueOf() != endCookie.email.valueOf()) {
          //If they aren't equal jump to catch block
          await prisma.session.delete({
            where: {
              id: session.id,
            },
          });
          res.statusCode = 407;
          res.send("Token is invalid");
          return;
        } else {
          if (Date.now() > session.expire_at.getDate()) {
            res.statusCode = 407;
            res.send("Token is expired");
            return;
          } else {
            //Emails are equal validation is ended. So give email and token back to client
            res.statusCode = 200;
            const resData: CookieType = {
              accessToken: endCookie.accessToken,
              email: endCookie.email,
            };
            res.json(resData);
            return;
          }
        }
      }
    } catch {}
  } else {
    res.statusCode = 404;
    res.send("There is no correct cookie");
    return;
  }
}*/