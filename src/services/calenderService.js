import { getApi } from "../utils/apiMethods";

const BASE_URL = "http://localhost:5000/api/v1";

// month = 1 to 12
// year = 2026
// market = All Markets / INDICES / NSE / BSE etc.
export const getCalendarData = async ({
  month,
  year,
  market = "All Markets",
}) => {
  const params = {
    month,
    year,
  };

  // All Markets backend ko bhejne ki zarurat nahi hai
  if (market && market !== "All Markets") {
    params.market = market;
  }

  return getApi(`${BASE_URL}/calendar`, params);
};
