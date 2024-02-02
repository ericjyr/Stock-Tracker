import { apiConfig } from './apiConfig';


const API_KEY = '3PdplDLuhBNMSv3KUCbb3USB9TTLQ7bD';
const API_KEY2 = 'BSmXPLefajAObaF2rZwKlAL1hWzM9ms5';

export const actionsApi = {
    getStock,
    getAggregates
}

export function getStock(searchTerm) {
    return apiConfig.get(`/v3/reference/tickers?ticker=${searchTerm}&active=true&apiKey=${API_KEY}`)
}


export function getAggregates(stockSymbol, START_DT, END_DT) {
    return apiConfig.get(`/v2/aggs/ticker/${stockSymbol}/range/1/day/${START_DT}/${END_DT}?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY2}`)
}

