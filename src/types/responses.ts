export type LatestListingCurrencyRequestType = {
    readonly data: LatestCurrencyType[];
    readonly status: requestStatusType
}

export type getConvertCurrencyRequestType = {
        readonly [key: number]: LatestCurrencyType
}

export type requestStatusType = {
    readonly credit_count:number
    readonly elapsed:number
    readonly error_code:number
    readonly error_message:null
    readonly notice:null
    readonly timestamp:string
    readonly total_count:number  
}

export type LatestCurrencyType = {
    readonly circulating_supply:number
    readonly cmc_rank:number
    readonly date_added:string
    readonly id:number
    readonly infinite_supply:boolean
    readonly last_updated:string
    readonly max_supply:number
    readonly name:string
    readonly num_market_pairs:number
    readonly platform: plathformType | null
    readonly quote: quoteType
    readonly self_reported_circulating_supply:number
    readonly self_reported_market_cap:number
    readonly slug:string
    readonly symbol:string
    readonly tags: string[]
    readonly total_supply: number
    readonly tv1_ratio: null
}

export type quoteType = {
    readonly [key: string]: {
        readonly fully_diluted_market_cap:number
        readonly last_updated:string
        readonly market_cap:number
        readonly market_cap_dominance:number
        readonly percent_change_1h:number
        readonly percent_change_7d:number
        readonly percent_change_24h:number
        readonly percent_change_30d:number
        readonly percent_change_60d:number
        readonly percent_change_90d:number
        readonly price:number
        readonly tvl:null
        readonly volume_24h:number
        readonly volume_change_24h:number
    }
}

export type plathformType = {
    readonly id: number;
    readonly name: string;
    readonly slug: string;
    readonly symbol: string;
    readonly token_address: string
}

export type DataEntry = [
    number, // Timestamp
    string, // Open price
    string, // High price
    string, // Low price
    string, // Close price
    string, // Volume
    number, // Kline Close time
    string, // Quote asset volume
    number, // Number of trades
    string, // Taker buy base asset volume
    string, // Taker buy quote asset volume
    string // Unused field, ignore.
  ];

export type candleStickData = DataEntry[]

