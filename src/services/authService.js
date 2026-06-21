// src/services/authService.js

import { postApi } from "../utils/apiMethods";
let url =
  "https://trade-journal-backend-git-main-robins-projects-73580735.vercel.app/api/v1";

export const registerUser = async (data) => {
  return await postApi(`${url}/auth/register`, data);
};
export const loginUser = async (data) => {
  return await postApi(`${url}/auth/login`, data);
};
