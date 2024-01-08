import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import Block, { SlideValue } from "./components/Block";
import { bgs, headings, imgs } from "./data";
import { Slide } from "./types";
import Image, { StaticImageData } from 'next/image';

export default function () {
    const [slide, setSlide] = useState<number>(0);
    const [offset, setOffset] = useState<Slide>(Slide.hide);
    const [value, setValue] = useState<SlideValue>({ bg: bgs[slide], heading: headings[slide], img: imgs[slide] })

    useMemo(() => {
        setValue({ bg: bgs[slide], heading: headings[slide], img: imgs[slide] })
    }, [slide])

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
            <header className="bg-white w-full p-4 items-center h-[5%] flex gap-8 font-semibold text-xl">
                {headings.map((el, idx) => <button className=" duration-100 hover:text-blue-600" key={el} onClick={() => handleSetSlide(idx)}>{el}</button>)}
            </header>

            <main className={clsx(" w-full h-[95%] duration-300", offset)}>
                <Block slide={value} />
            </main>
        </div>
    )
}