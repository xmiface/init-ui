import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

const getImageBuffer = (id: string) => {
    const image = fs.readFileSync(`./db/img/btc.png`);
    const imageBuffer = Buffer.from(image).toString("base64");
    return imageBuffer;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.coin as string ?? 'btc';

    res.setHeader("Content-Type", "image/jpg");

    try {
        res.send({
            status: 0,
            payload: getImageBuffer(id),
        });
    } catch (e) {
        res.send({
            status: 1,
            payload: "image not found",
        });
    }
}