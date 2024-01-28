import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from 'fs';
import { randomInt } from "crypto";
import { randomInteger } from "../../../../utils/randomInteger";

// prefix
// small

const images = [
    'https://image.lexica.art/full_webp/154a1d92-617f-4cca-9e82-49825ee93e26',
    'https://image.lexica.art/full_webp/8208d083-375d-49de-9cb4-b551068f44a7',
    'https://image.lexica.art/full_webp/0b2d79e5-c6fe-4f6b-800e-dc03a28a4438',
    'https://image.lexica.art/full_webp/1c7a6dcd-c673-4f98-a2c0-593d278a3b63',
    'https://image.lexica.art/full_webp/d785b833-a88c-4749-87a7-8ed24d00da64',
    'https://image.lexica.art/full_webp/75837fff-a7fb-478c-9465-5f93c1bc2cd3',
    'https://image.lexica.art/full_webp/77bb7cae-70b1-439e-a7cf-e24c5fb84404',
    'https://image.lexica.art/full_webp/52e2e312-4fb7-4128-a131-30c159a532a0',
    'https://image.lexica.art/full_webp/1dbbfef3-1201-414c-965a-02eb7c9ee462',
    'https://image.lexica.art/full_webp/2767a76a-0bcb-4b4b-9d5d-e1037fd3f97e',
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    setTimeout(() => {
        res.send({ images })
    }, randomInteger(0, 500));
}