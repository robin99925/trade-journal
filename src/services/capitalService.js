import { postApi } from "../utils/apiMethods";
let url =
  "https://trade-journal-backend-git-main-robins-projects-73580735.vercel.app/api/v1";

export const completeOnboarding = async (data) => {
  return await postApi(`${url}/capital/onboarding`, data);
};
