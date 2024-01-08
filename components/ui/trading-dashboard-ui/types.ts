export interface CoinDto {
    id: string,
    name: [fullname: string, prefix: string],
    price: number,
    hour: number,
    day: number,
    week: number,
    marketCap: number,
    volume: [valuePrice: number, cryptoPrice: number],
    circulating: string
}

export interface ServerData { data: CoinDto[] };
