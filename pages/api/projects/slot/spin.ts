import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from 'fs';
import { randomInt } from "crypto";
import { randomInteger } from "../../../../utils/randomInteger";

const arr = (length: number, value: any) => new Array(length).fill(true).map(el => value)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const q = [arr(3, randomInt(10)), arr(3, randomInt(10)), arr(3, randomInt(10))]; // 3x3
    const w = [arr(3, randomInt(10)), arr(3, randomInt(10)), arr(3, randomInt(10)), arr(3, randomInt(10))]; // 4x3
    const e = [arr(4, randomInt(10)), arr(4, randomInt(10)), arr(4, randomInt(10))]; // 3x4
    const r = [arr(4, randomInt(10)), arr(4, randomInt(10)), arr(4, randomInt(10)), arr(4, randomInt(10))]; // 4x4
    const t = [arr(4, randomInt(10)), arr(4, randomInt(10)), arr(4, randomInt(10)), arr(4, randomInt(10)), arr(4, randomInt(10))]; // 5x4
    const y = [arr(5, randomInt(10)), arr(5, randomInt(10)), arr(5, randomInt(10)), arr(5, randomInt(10))]; // 4x5

    setTimeout(() => {
        res.send({ slots: q })
    }, randomInteger(0, 500));
}