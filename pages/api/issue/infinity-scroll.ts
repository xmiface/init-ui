import type { NextApiRequest, NextApiResponse } from "next";
import { parsedFile } from "../../../utils/file";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const users = parsedFile("./db/issue/infinity-scroll.json");
    res.send(users);
}