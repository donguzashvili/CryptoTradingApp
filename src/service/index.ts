import * as Api from "../types"
import Service from "./request"

// ** variables
const baseUrl = import.meta.env.VITE_SERVICE_URL
const binanceUrl = import.meta.env.VITE_BINANCE_URL


export const getLatestCurrency = async ({start, limit}: {start: number, limit: number}) => {
    const queryString = `latest-currency?start=${start}&limit=${limit}`
        const response = await Service<Api.LatestCurrencyType[]>(`${baseUrl}${queryString}`)
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
    const respones = await Service<Api.getConvertCurrencyRequestType>(`${baseUrl}convert-currency?convertFromId=${convertFromId}&convertToSymbol=${convertToSymbol}`)
    return respones
}


