import clsx from "clsx";
import { FC, useEffect, useState } from "react";

const bgs = [
    "https://arendacar.ru/wp-content/uploads/2021/10/15d1a4ec1a16a33a3be36346ef58f0b8.jpg",
    "https://www.major-cadillac.ru/files/resources/595x325.jpg"
]

const Clear: FC = () => {
    const [bgBlur, setBgBlur] = useState('blur-sm');
    const [bgImageIdx, setBgImgIdx] = useState<number>(0);

    useEffect(() => {
        // const t = setInterval(() => {
        //     const newIdx = bgImageIdx === bgs.length - 1 ? 0 : bgImageIdx + 1;
        //     setBgImgIdx(newIdx);
        //     console.log(newIdx);
        // }, 1000)
        // return () => clearInterval(t)
    }, [bgImageIdx])

    useEffect(() => {
        setBgBlur('blur-lg')
    }, [])

    return (
        <div className="h-screen  overflow-hidden  bg-black">
            <div className="w-[1920px] mx-auto">
                {/* <h1>clear page</h1> */}
                <img className={clsx("w-full duration-1000 opacity-25", bgBlur)} src={bgs[bgImageIdx]} alt="" />
            </div>
        </div>
    )
}

export default Clear