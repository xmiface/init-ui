import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import { randomInt } from 'crypto';
import { randomInteger } from '../../../../utils/randomInteger';

const arr = (length: number, max: any) => new Array(length).fill(true).map((el) => randomInt(max));

let counter = 0;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = [arr(3, 10), arr(3, 10), arr(3, 10)]; // 3x3
  const w = [arr(3, 10), arr(3, 10), arr(3, 10), arr(3, 10)]; // 4x3
  const e = [arr(4, 10), arr(4, 10), arr(4, 10)]; // 3x4
  const r = [arr(4, 10), arr(4, 10), arr(4, 10), arr(4, 10)]; // 4x4
  const t = [arr(4, 10), arr(4, 10), arr(4, 10), arr(4, 10), arr(4, 10)]; // 5x4
  const y = [arr(5, 10), arr(5, 10), arr(5, 10), arr(5, 10)]; // 4x5

  const v = [q, w, e, r, t, y];
  if (counter === v.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }

  setTimeout(() => {
    res.send({ slots: v[counter] });
  }, randomInteger(0, 500));
}
