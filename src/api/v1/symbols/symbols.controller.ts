import express from "express"
import axiosInstance from "@api/v1/utils/axios";
import {IFixerAPICurrencyResponse, IFixerAPISymbolsResponse, IAPICurrencyResponse} from "./symbols.interface"
import {DateTime} from "luxon"

async function listSymbols(req: express.Request, res: express.Response) {     
    console.log(`http://data.fixer.io/api/symbols?access_key=${process.env.FIXER_API_KEY}`)
    const { data }: {data: IFixerAPISymbolsResponse} = await axiosInstance.get(`/symbols?access_key=${process.env.FIXER_API_KEY}`);
    return res.status(200).json(data)
}

async function listAllCurrencyRate(req: express.Request, res: express.Response) {
    const { data }: {data: IFixerAPICurrencyResponse} = await axiosInstance.get(`/latest?access_key=${process.env.FIXER_API_KEY}`);
    return res.status(200).json(data)
}

async function convertCurrency(req: express.Request, res: express.Response) {
    const {base, target} = req.params;
    const {data}: {data: IFixerAPICurrencyResponse} = await axiosInstance.get(`/latest?access_key=${process.env.FIXER_API_KEY}`);
    const rate = data.rates[target] / data.rates[base]
    const response: IAPICurrencyResponse = {
        success: true,
        timestamp: DateTime.now().toMillis(),
        date: DateTime.now().toISODate(),
        base,
        target,
        rate
    }
    return res.status(200).json(response)
}

module.exports = {
    listSymbols,
    listAllCurrencyRate,
    convertCurrency
}