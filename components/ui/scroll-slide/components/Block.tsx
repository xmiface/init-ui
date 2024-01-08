import { observer } from "mobx-react-lite";
import Image, { StaticImageData } from 'next/image';
import { FC } from "react";

export type SlideValue = { bg: string, heading: string, img: StaticImageData }

const Block: FC<{ slide: SlideValue }> = ({ slide: { bg, heading, img } }) => {
        const SBased = 'w-full flex flex-col gap-10 h-full justify-center items-center';
        const SBackground = `linear-gradient(90deg, ${bg} 0%, rgb(76 29 149) 100%)`

        return (
            <div className="w-full flex  h-full text-white">
                <div className={SBased} style={{ background: SBackground }} >
                    <h2 className=" text-5xl font-montserrat">{heading}</h2>
                    <Image priority alt='zxc' className="" width={800} height={480} src={img} />
                </div>
            </div>
        )
}

export default observer(Block);