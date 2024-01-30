import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from 'fs';
import { randomInt } from "crypto";
import { randomInteger } from "../../../../utils/randomInteger";
import { small } from "../../../../components/issue/infinity-scroll";

// prefix
// small

const SLOT_BG = 'https://image.lexica.art/full_webp/4de811ac-40f1-4bdd-8b92-594e4872b776'

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

const tinyImages = [
    small + '0b2d79e5-c6fe-4f6b-800e-dc03a28a4438',
    small + '3bff21cb-3150-45dc-8d73-11378e142c49',
    small + '19e7cecd-c686-4a5a-9893-14f08d298b99',
    small + '0784e4db-5968-4292-b627-d605169ead7b',
    small + 'd9943cb4-e9f2-4ee3-a22b-fecf5bee481d',
    small + '1dbbfef3-1201-414c-965a-02eb7c9ee462',
    small + '2676de17-fd47-4381-9300-a270e1672563',
    small + 'f8e5f725-ddb4-49e3-b135-0738238b745d',
    small + 'f9b7ab3f-fcab-49d8-9aab-63e199ed6e9b',
    small + '55dca8ce-339f-411c-be76-651a52005b19',
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    setTimeout(() => {
        res.send({ bg: SLOT_BG, images: tinyImages })
    }, randomInteger(0, 500));
}