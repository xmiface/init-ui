import type { NextApiRequest, NextApiResponse } from "next";

export const setCookie = (res: NextApiResponse, cookieTitle: string, cookieValue: string) => {
  res.setHeader("Set-Cookie", `${cookieTitle}=${cookieValue}`);
};

export const clearCookies = (req: NextApiRequest, res: NextApiResponse) => {
  Object.keys(req.cookies).forEach((key: string) => {
    const str = `${key}=undefined; Max-Age=0`;
    console.log(str);
    res.setHeader("Set-Cookie", String(str));
  });
};
