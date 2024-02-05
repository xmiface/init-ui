import React, { useEffect, useRef } from 'react';
import { Info } from '../aside/Info';
import Table from './Table';

const Middle = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Рисование графики
        context.fillStyle = 'blue';
        context.fillRect(10, 10, 100, 50);

    }, []);


    return (
        <Info>
            <div className='flex gap-4 border-2 h-full'>
                <div className='flex flex-col'>
                    <p>img</p>
                    <p>title</p>
                    <p>title-short</p>
                    <p>percent</p>
                </div>
                <canvas ref={canvasRef} width='100%' height='100%' className='border-2 h-full w-full border-red-900' />
            </div>
        </Info>
    )
}

export default function () {
    return (
        <div className=" w-full h-full flex flex-col gap-2   border-red-500">

            <div className="border-slate-900  h-[10%]  flex justify-between">
                <div>left</div>
                <div>right</div>
            </div>

            <div className="flex gap-6 h-[20%]">
                <Info>1</Info>
                <Middle />
                <Info>3</Info>
            </div>

            < Table />
        </div>
    )
}