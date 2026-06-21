import { postApi, getApi } from "../utils/apiMethods";
let url = "http://localhost:5000/api/v1";

export const createTrade = (payload) => {
  return postApi(`${url}/trades`, payload, true);
};
// Get All Trades
export const getAllTrades = (params = {}) => {
  return getApi(`${url}/trades`, params);
};

export const getTradeById = async (id) => {
  const response = await getApi(`${url}/trades/${id}`);
  return response;
};
