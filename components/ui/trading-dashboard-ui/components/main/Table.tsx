import { useEffect, useState } from "react";
import { TableRow } from "./TableRow";
import axios from "axios";
import TableLoader from "./TableLoader";
import { CoinDto, ServerData } from "../../types";

const Theads = ['Name', 'Price', '1h%', '24h%', '7d%', 'Market Cap', 'Volume (24h)', 'Circulating S.'];

export default function () {
    const [coins, setCoins] = useState<CoinDto[]>([])

    useEffect(() => {
        axios.get<void, ServerData>('/api/ui/trading-dashboard-ui/get-coins-list')
            .catch(err => console.log(err))
            .then(res => {
                if (res) {
                    setCoins(res.data)
                }
            })
    }, [])

    return <div className=" bg-[#090909] h-[70%] w-full rounded-t-2xl p-4 ">
        {!coins.length ? <TableLoader /> : <div className="custom-scrollbar overflow-y-scroll h-[100%]">
            <table className="w-full m-auto border-spacing-10 ">
                <thead>
                    <tr>
                        {Theads.map(th => <th key={th} className="text-left">{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {coins?.map(c => <TableRow key={c.id} coin={c} />)}
                </tbody>
            </table>
        </div>
        }
    </div>
}
