import { postApi } from "../utils/apiMethods";
let url = "http://localhost:5000/api/v1";

export const completeOnboarding = async (data) => {
  return await postApi(`${url}/capital/onboarding`, data);
};
