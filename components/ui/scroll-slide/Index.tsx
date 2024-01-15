import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import Block, { SlideValue } from "./components/Block";
import { bgs, headings, imgs } from "./data";
import { Slide } from "./types";

const Index = () => {
    const [slide, setSlide] = useState<number>(0);
    const [offset, setOffset] = useState<Slide>(Slide.hide);
    const [value, setValue] = useState<SlideValue>({ bg: bgs[slide], heading: headings[slide], img: imgs[slide] })

    const pageRef = useRef(null);

    useMemo(() => setValue({ bg: bgs[slide], heading: headings[slide], img: imgs[slide] }), [slide])

    const handleSetSlide = (slide: number) => {
        setOffset(Slide.hide)

        setTimeout(() => {
            setSlide(slide)
            setOffset(Slide.show)
        }, 300);
    }

    useEffect(()=> handleSetSlide(0), [])

    const handleWheel = (event: { wheelDelta: any; deltaY: number; }) => {
        const toTop = (event.wheelDelta ? event.wheelDelta : -1 * event.deltaY) > 0 ? true : false;
        const nextSlide = slide === headings.length - 1 ? 0 : slide + 1
        const prevSlide = slide === 0 ? headings.length - 1 : slide - 1;
        handleSetSlide(toTop ? prevSlide : nextSlide);
    }

    return (
        <div className="h-screen w-full relative bg-violet-900" ref={pageRef} onWheel={handleWheel}>
            <header className="bg-white w-full p-4 items-center h-[5%] flex gap-8 font-semibold text-xl">
                {headings.map((el, idx) => <button className={clsx("duration-100 hover:text-blue-600", idx === slide ? 'text-twitchpink' : '')} key={el}>{el}</button>)}
            </header>

            <main className={clsx(" w-full h-[95%] duration-300", offset)}>
                <Block slide={value} />
            </main>
        </div>
    )
}

export default Index;