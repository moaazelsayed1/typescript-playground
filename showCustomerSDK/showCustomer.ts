// Installed the SDK and try to fetch the customer details

import {
  Configuration as ERPConfig,
  initializeTactful as ERPInit,
} from "@tactful/erp-sdk-typescript";

const config = {
  ERP_API_HOST_URL: "https://erp.qa.dev.tactful.ai",
};
const erpToken = {
  access_token: "", // Add your access token here
};

export const erpApiConfig = new ERPConfig({
  basePath: config.ERP_API_HOST_URL,
  apiKey: `Bearer ${erpToken.access_token}`,
  options: {
    mode: "cors",
  },
});

export const ERPCore = ERPInit(erpApiConfig);

(async () => {
  try {
    const customerId = 27;
    const customer = await ERPCore.customers.showCustomer({
      customer: customerId,
    });
    return customer;
  } catch (error) {
    throw error;
  }
})();
