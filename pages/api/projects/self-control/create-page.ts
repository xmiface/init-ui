import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from 'fs';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqType = req.body.type;

    if (reqType === 'getFolders') {
        const postsDirectory = path.join(process.cwd() + '/pages/')
        const filenames = await fs.readdir(postsDirectory)
        const folders = filenames.filter(el => !el.includes('.') && el !== 'api')
        res.send(folders)

        return;
    }

    if (reqType === 'getSubFolders') {
        const postsDirectory = path.join(process.cwd() + '/pages/' + req.body.folder)
        const filenames = await fs.readdir(postsDirectory)
        res.send(filenames)

        return;
    }

    if (reqType === 'createPage') {
        console.log(req.body);

        res.send({ ok: true })
        return;

    }


    res.send({ ok: true })
}