import express from "express"
import axiosInstance from "@api/v1/utils/axios";
import {IFixerAPIData, IAPIResponse} from "./symbols.interface"
async function listSymbols(req: express.Request, res: express.Response) { 
    const symbols = await axiosInstance.get(`/symbols?access_key=${process.env.FIXER_API_KEY}`);
    return res.status(200).json(symbols)
}

async function listAllCurrencyRate(req: express.Request, res: express.Response) {
    const allCurrencies = await axiosInstance.get(`/latest?access_key=${process.env.FIXER_API_KEY}`);
    return res.status(200).json(allCurrencies)
}

async function convertCurrency(req: express.Request, res: express.Response) {
    const {base, target} = req.params;
    const allCurrencies:IFixerAPIData = await axiosInstance.get(`/latest?access_key=${process.env.FIXER_API_KEY}`);
    const rate = allCurrencies.rates[target] / allCurrencies.rates[base]
    return res.status(200).json(allCurrencies)
}
