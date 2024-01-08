// https://dribbble.com/shots/20640382-Trading-Dashboard-UI

import { observer } from "mobx-react-lite";

import Aside from "./components/aside/Index";
import Main from './components/main/Index';

const Index = () => {
    return (
        <div className=" bg-[#0E0E0E] h-screen px-4 w-full text-white">
            <div className="w-[1440px] mx-auto flex gap-6 h-full">
                <Aside />
                <Main />
            </div>
        </div>
    )
}

export default observer(Index);