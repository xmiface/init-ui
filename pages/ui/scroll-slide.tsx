import clsx from "clsx";
import { FC, useEffect, useMemo, useState } from "react";
import Image from 'next/image';

import a from './1.webp';
import b from './2.webp';
import c from './3.png';

const bgs = ['indigo-500', 'slate-500', '[#FF0000]']

const headings = ['Adidas Yeezy Boost 350 V2 Zebra', 'Air Force Low White', 'Air Jordan Retro 11 Black And Red']

const imgs = [a, b, c];

const Block: FC<{ slide: number }> = ({ slide }) => {
    const [bg, heading, img] = [bgs[slide], headings[slide], imgs[slide]]

    return (
        <div className="w-full flex  h-full text-white">
            <div className={`w-full flex flex-col gap-2 h-full justify-center items-center bg-gradient-to-r from-${bg} to-violet-900`}>
                <h2 className=" text-5xl">{heading}</h2>
                <Image priority alt='zxc' className="" width={800} height={480} src={img} />
            </div>
        </div>
    )
}

const enum Slide {
    hide = 'translate-x-[-100%]',
    show = 'translate-x-[-0]'
}

export default function () {
    const [slide, setSlide] = useState<number>(0);
    const [offset, setOffset] = useState<Slide>(Slide.hide);

    const handleSetSlide = (slide: number) => {
        setOffset(Slide.hide)

        setTimeout(() => {
            setSlide(slide)
            setOffset(Slide.show)
        }, 300);
    }

    useEffect(() => {
        handleSetSlide(0);
    }, [])

    return (
        <div className="h-screen w-full relative bg-violet-900">
            <header className="bg-white w-full  p-4 h-[5%] flex gap-8   font-semibold text-xl">
                {headings.map((el, idx) => <button key={el} onClick={() => handleSetSlide(idx)}>{el}</button>)}
            </header>

            <main className={clsx(" w-full h-[95%] duration-300", offset)}>
                <Block slide={slide} />
            </main>
        </div>
    )
}