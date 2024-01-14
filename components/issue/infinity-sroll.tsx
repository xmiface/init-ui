import { observer } from "mobx-react-lite";
import React, { useCallback, useEffect, useRef, useState } from "react";
import users from './users.json';

type User = { id: string, img: string }

const sScrollToTop = "h-[32px] w-[32px] absolute bottom-[8px] right-[32px] rounded-full hover:text-black  bg-twitchdarkbg hover:bg-twitchdarkpink duration-300 flex justify-center items-center"
const sGrid = "h-[100%] grid grid-cols-1 gap-8 overflow-y-scroll  overflow-x-hidden custom-scrollbar"

const prefix = 'https://image.lexica.art/'
const [full, small] = [prefix + 'full_webp/', prefix + 'sm2_webp/']

const pageSize = 4;

const getObserver = (onIntersection: void) => new IntersectionObserver(onIntersection, {
    root: null,   // default is the viewport
    threshold: 1 // percentage of target's visible area. Triggers "onIntersection"
})

const Index = () => {
    const [list, setList] = useState<User[]>([]);
    const [pages, setPages] = useState<string[]>([]);

    const dividerAfter = useRef(null);
    const dividerBefore = useRef(null);

    useEffect(() => {
        pages.length && setList([...list, ...users.slice(list.length, list.length + pageSize)])
    }, [pages])

    if (typeof window !== "undefined") {
        useEffect(() => {
            let debounceFlag = false;

            // callback is called on intersection change
            function onIntersection() {
                if (!debounceFlag) {
                    debounceFlag = true;

                    console.log('up')
                    setPages([Date.now() + '']);

                    setTimeout(() => {
                        debounceFlag = false;
                    }, 10);
                }
            }

            // define an observer instance
            let observer = getObserver(onIntersection);

            // Use the observer to observe an element
            dividerAfter.current && observer.observe(dividerAfter.current)
        }, [])
    }

    const handleScrollToTop = () => dividerBefore?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    return (
        <div className=" bg-[#0E0E0E] h-screen px-4 w-full  text-white">
            <button onClick={handleScrollToTop} className={sScrollToTop}> ^ </button>
            <div className={sGrid} id='scroll-container'>
                <div ref={dividerBefore} ></div>
                {list.map((el, idx) => <React.Fragment key={el.id}>{idx}<img alt={el.id} src={small + el.img} className="h-[300px]" /></React.Fragment>)}
                <div ref={dividerAfter}></div>
            </div>
        </div>
    )
}

export default observer(Index);
