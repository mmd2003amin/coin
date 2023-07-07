import axios from "axios";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=1&sparkline=false&locale=en';

const API = async () => {
    const getData = await axios.get(`${BASE_URL}`);
    return getData.data;
};

export { API };