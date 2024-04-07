import * as Api from "../types"
import Service from "./request"

// ** variables
const baseUrl = import.meta.env.VITE_SERVICE_URL
const binanceUrl = import.meta.env.VITE_BINANCE_URL


export const getLatestCurrency = async ({start, limit}: {start: number, limit: number}) => {
        const response = await Service<Api.LatestListingCurrencyRequestType>(`https://cors-anywhere.herokuapp.com/${baseUrl}v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}`)
        return response
}

export const getCurrencyChart = async ({symbol, interval, startTime, endTime}:{symbol: string, interval: string; startTime?: string; endTime?: string}) => {
    let url = `${binanceUrl}api/v3/klines?symbol=${symbol}USDT&interval=${interval}`
    if(startTime) url += `&startTime=${startTime}`
    if(endTime) url += `&endTime=${endTime}`
    const response = await Service<Api.candleStickData>(url, {headers: null})
    return response
}

export const getConvertCurrency = async (convertFromId: string, convertToSymbol: string) => {
    const respones = await Service<Api.getConvertCurrencyRequestType>(`https://cors-anywhere.herokuapp.com/${baseUrl}/v1/cryptocurrency/quotes/latest?id=${convertFromId}&convert=${convertToSymbol}`)
    return respones
}


