export interface IFixerAPIData {
    "success": boolean,
    "timestamp": number,
    "base": string,
    "date": string,
    "rates": currencyRate
}

export interface IAPIResponse {
    "success": boolean,
    "timestamp": number,
    "date": string,
    "base": string,
    "target": string,
    "rate": number
}

type currencyRate = { [key: string]: number; }
