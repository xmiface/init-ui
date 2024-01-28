import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from 'fs';
import { randomInt } from "crypto";
import { randomInteger } from "../../../../utils/randomInteger";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const x = [[randomInt(10), randomInt(10), randomInt(10)], [randomInt(10), randomInt(10), randomInt(10)], [randomInt(10), randomInt(10), randomInt(10)]];
    console.log(x);

    setTimeout(() => {
        res.send({ slots: x })
    }, randomInteger(0, 500));
}