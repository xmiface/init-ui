import React from "react";
import { AsideLine } from "./AsideLine";

export type AsideBlockProps = {
    id: string;
    icon: JSX.Element;
    title: string;
    unread?: boolean

    children: {
        id: string;
        icon: JSX.Element;
        title: string;
        unread?: boolean
    }[];
}[];

export const AsideBlock = ({ sectionTitle, section }: { sectionTitle: string; section: AsideBlockProps }) => {
    return (
        <div>
            <p className=" text-zinc-500 font-bold">{sectionTitle}</p>

            {section.map((block) => <React.Fragment key={block.id}>
                <div key={block.id} className="flex gap-2 my-4 items-center hover:text-cyan-700 duration-300 cursor-pointer">
                    <AsideLine icon={block.icon} title={block.title} unread={block.unread} />
                </div>

                <>
                    {block.children.map((el, idx) => <div key={el.id} className="p-2 pl-6 flex gap-2 hover:text-cyan-700 duration-300 items-center cursor-pointer" >
                        <AsideLine last={idx === block.children.length - 1} icon={el.icon} title={el.title} unread={el.unread} />
                    </div>)}
                </>
            </React.Fragment>)}
        </div>
    )
}