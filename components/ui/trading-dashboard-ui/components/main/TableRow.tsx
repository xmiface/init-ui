import axios from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { CoinDto } from "../../types";

export interface TableRowProps { coin: CoinDto }

interface ServerData { data: { payload: string } };

export const TableRow = ({ coin: { id, name: [fullname, prefix], price, hour, day, week, marketCap, volume: [valuePrice, cryptoPrice], circulating } }: TableRowProps) => {
    const [img, setImg] = useState<string | undefined>(undefined);

    useEffect(() => {
        axios.get<void, ServerData>(`/api/get-image?coin=${prefix}`)
            .catch((err) => console.log(err))
            .then((res) => {
                if (res) {
                    setImg(res.data.payload)
                }
            })
    }, [])

    return (
        <tr className="border-b-2 border-zinc-700 my-4 h-16 items-start border-collapse [&>*]:py-6">
            <td>
                <p className="flex gap-2 items-center">
                    {img && <Image  priority  alt='zxc' className="" width={32} height={32} src={`data:image/png;base64,${img}`} />}
                    {fullname},
                    <span className=" text-slate-400">{prefix}</span>
                </p>
            </td>
            <td>${price}</td>
            <td>{hour}%</td>
            <td>{day}%</td>
            <td>{week}%</td>
            <td>${marketCap.toLocaleString('en-US')}</td>
            <td className="flex flex-col">
                <span>${valuePrice.toLocaleString('en-US')}</span>
                <span className=" text-sm"> {cryptoPrice.toLocaleString('en-US')}<span className="text-slate-400"> {prefix} </span></span>
            </td>
            <td className=" text-green-500">{circulating}</td>
        </tr>
    )
}