import React from 'react';
import { Info } from '../aside/Info';
import Table from './Table';

export default function () {
    return (
        <div className=" w-full h-full flex flex-col gap-2   border-red-500">

            <div className="border-slate-900  h-[10%]  flex justify-between">
                <div>left</div>
                <div>right</div>
            </div>

            <div className="flex gap-6 h-[20%]">
                <Info>1</Info>
                <Info>2</Info>
                <Info>3</Info>
            </div>

            < Table />
        </div>
    )
}