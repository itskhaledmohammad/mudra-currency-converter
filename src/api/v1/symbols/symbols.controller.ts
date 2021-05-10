import express from "express"
import axiosInstance from "@api/v1/utils/axios";

async function listSymbols(req: express.Request, res: express.Response) { 
    const symbols = await axiosInstance.get(`/symbols?access_key=${process.env.FIXER_API_KEY}`);
    return res.status(200).json(symbols)
}

async function listAllCurrencyRate(req: express.Request, res: express.Response) {
    const allCurrencies = await axiosInstance.get(`/latest?access_key=${process.env.FIXER_API_KEY}`);
    return res.status(200).json(allCurrencies)
}

async function convertCurrency(req: express.Request, res: express.Response) {
    const allCurrencies = await axiosInstance.get(`/latest?access_key=${process.env.FIXER_API_KEY}`);
    return res.status(200).json(allCurrencies)
}
