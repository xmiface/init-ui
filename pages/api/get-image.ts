import type { NextApiRequest, NextApiResponse } from "next";

import { imageBuffer } from "../../utils/file";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = 'btc.png'; // TODO id = req.query.coin as string ?? 'btc.png'
    const coinsPathPrefix = `./db/img/`;

    res.setHeader("Content-Type", "image/jpg");

    try {
        res.send({
            status: 0,
            payload: imageBuffer(coinsPathPrefix + id),
        });
    } catch (e) {
        res.send({
            status: 1,
            payload: "image not found",
        });
    }
}