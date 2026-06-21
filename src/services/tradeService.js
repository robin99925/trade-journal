import { postApi, getApi } from "../utils/apiMethods";
let url =
  "https://trade-journal-backend-git-main-robins-projects-73580735.vercel.app/api/v1";

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
