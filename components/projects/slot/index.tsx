import { observer } from "mobx-react-lite";

import Main from "./Main";
import axios from "axios";
import { useState, useLayoutEffect, useEffect } from "react";

const sButton = 'rounded-xl  border-twitchdarkpink hover:border-twitchpink duration-300 py-2 px-4 ';

const Index = () => {


    return (
        <div className=" bg-[#0E0E0E] h-screen px-4 w-full text-white">
            <div className="w-[1440px] h-full mx-auto text-xl relative">
                <h1 className=" text-3xl text-center py-4 absolute top-[24px] w-full">spin</h1>

                <div className="h-full w-full flex justify-center items-center">

                    <div className="w-[960px] mx-auto h-[600px] flex relative">
                        <Main />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default observer(Index);
