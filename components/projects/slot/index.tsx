import { observer } from "mobx-react-lite";

import Main from "./Main";
import axios from "axios";
import { useState, useLayoutEffect, useEffect } from "react";

const sButton = 'rounded-xl  border-twitchdarkpink hover:border-twitchpink duration-300 py-2 px-4 ';
const sBackground = (fullPageBg: string | undefined) => ({
    background: fullPageBg ? 'url(' + fullPageBg + ')' : '#000',

})

const Index = () => {
    const [fullPageBg, setFullPageBg] = useState<string | undefined>(undefined);

    return (
        <div className={`bg-[#0E0E0E]  h-screen px-4 w-full text-white relative`}>

            {fullPageBg && <img src={fullPageBg} className="blur-sm   bg-cover absolute h-full w-full left-0 top-0 " />}

            <div className="w-[1440px] h-full mx-auto flex flex-col items-center justify-center text-xl relative" style={{ filter: 'unset' }}>
                <h1 className=" text-3xl text-center  absolute top-[24px]  bg-[rgba(0,0,0,0.36)] py-4 px-8">ma shlu ongreen</h1>

                <div className="h-full w-full flex justify-center items-center">

                    <div className="w-[960px] mx-auto h-[600px] flex relative">
                        <Main setFullPageBg={setFullPageBg} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default observer(Index);
