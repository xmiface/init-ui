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

        const pagesContent = `
import React from 'react';

const Index = React.lazy(() => import('../../components/${req.body.folder}/${req.body.title}/${req.body.title}.ts'))

export default Index
`

        fs.writeFile(`pages/${req.body.folder}/${req.body.title}.ts`, pagesContent, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });


        const componentsContent = `
import { observer } from "mobx-react-lite";

const Index = () => {
    return (
        <div className=" bg-[#0E0E0E] h-screen px-4 w-full text-white">
            ${req.body.title}
        </div>
        )
    }

export default observer(Index);
`

        fs.writeFile(`components/${req.body.folder}/${req.body.title}/${req.body.title}.tsx`, componentsContent, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

        res.send({ ok: true })
        return;

    }


    res.send({ ok: true })
}