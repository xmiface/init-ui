import { faker } from "@faker-js/faker";
import axios from "axios";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useState } from "react";

const sButton = "h-[50px] w-[50px] border-2 rounded-xl border-twitchdarkpink hover:border-twitchpink";
const sHover = 'border-twitchgrey hover:border-twitchhovergrey'
const pStyle = "border-b-2 border-customgray w-content text-center pb-2";

const Index = () => {
    const [data, setData] = useState<string[]>([]);
    const [page, setPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);

    const handleGetData = useCallback((value: number) => axios.post('/api/issue/pagination', { page, pageSize }).then(res => setData(res.data)).catch((err) => console.log(err)), [page, pageSize])
    useEffect(() => void handleGetData(page), [page])
    const getButton = (el: number, state: number, onClick: (value: number) => void) => <button key={faker.datatype.uuid()} className={clsx(sButton, el == page ? sHover : '')} onClick={() => onClick(el)}>{el}</button>

    return (
        <div className=" bg-[#0E0E0E] h-screen px-4 w-full  text-white mx-auto ">
            <div className="w-[860px] mx-auto flex flex-col justify-between h-full py-4">
                <div className="flex flex-col gap-2 pt-2">
                    {data.map(el => <p className={pStyle} key={faker.datatype.uuid()}>{el}</p>)}
                </div>
                <div className="flex justify-between pt-4">
                    <div className="flex gap-10 "> {[5, 10, 15].map((el: number) => getButton(el, pageSize, setPageSize))} </div>
                    <div className="flex gap-10 ">{new Array(5).fill(undefined).map((_, idx) => getButton(idx, page, setPage))}</div>
                </div>
            </div>
        </div>
    )
}

export default observer(Index);