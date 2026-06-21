import api from "./api";

// GET
export const getApi = async (url, params = {}) => {
  console.log("GET API Call:", url, "with params:", params);
  const response = await api.get(url, { params });
  return response.data;
};

// POST
export const postApi = async (url, data = {}) => {
  const response = await api.post(url, data);
  return response.data;
};

// PUT
export const putApi = async (url, data = {}) => {
  const response = await api.put(url, data);
  return response.data;
};

// PATCH
export const patchApi = async (url, data = {}) => {
  const response = await api.patch(url, data);
  return response.data;
};

// DELETE
export const deleteApi = async (url) => {
  const response = await api.delete(url);
  return response.data;
};
