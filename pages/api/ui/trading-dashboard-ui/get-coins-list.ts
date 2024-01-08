import type { NextApiRequest, NextApiResponse } from "next";

import { faker } from "@faker-js/faker";
import { CoinDto } from "../../../../components/ui/trading-dashboard-ui/types";

function generateRandomCoin(): CoinDto {
    const cryptoNames = ["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Cardano", "Stellar"];
    const prefixes = ["BTC", "ETH", "XRP", "LTC", "ADA", "XLM"];

    const randomNameIndex = Math.floor(Math.random() * cryptoNames.length);
    const randomPrefixIndex = Math.floor(Math.random() * prefixes.length);

    const randomPrice = Math.random() * (50000 - 100) + 100; // Random price between 100 and 50000
    const randomHourChange = Math.random() * 10 - 5; // Random change in the last hour (-5% to 5%)
    const randomDayChange = Math.random() * 20 - 10; // Random change in the last day (-10% to 10%)
    const randomWeekChange = Math.random() * 30; // Random change in the last week (0% to 30%)
    const randomMarketCap = Math.floor(Math.random() * 1000000000000) + 1000000000; // Random market cap
    const random24hVolume = Math.floor(Math.random() * 1000000000) + 1000000; // Random 24h volume
    const randomTotalVolume = Math.floor(Math.random() * 1000000000) + 1000000; // Random total volume
    const randomCirculating = Math.floor(Math.random() * 30000000) + 1000000; // Random circulating supply

    return {
        id: faker.datatype.uuid(),
        name: [cryptoNames[randomNameIndex], prefixes[randomPrefixIndex]],
        price: randomPrice,
        hour: +randomHourChange.toFixed(2),
        day: +randomDayChange.toFixed(2),
        week: +randomWeekChange.toFixed(2),
        marketCap: randomMarketCap,
        volume: [random24hVolume, randomTotalVolume],
        circulating: `${randomCirculating} ${prefixes[randomPrefixIndex]}`
    };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const responseBody = new Array(10).fill(1).map(el => generateRandomCoin())

    setTimeout(() => {
        res.send(responseBody)
    }, 1000);
}