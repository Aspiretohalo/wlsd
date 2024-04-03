import myAxios from "../plugins/myAxios";


import myAxios from "../plugins/myAxios";
import { AxiosResponse } from "axios";

interface PayZFBParams {
  outTradeNo: string;
  productCode: string;
  returnUrl: string;
  subject: string;
  totalAmount: number;
}

interface PayZFBResponse {
  code: number;
  data?: any; // Define the structure of response data
  message?: string;
}

export const payZFB = async (params: PayZFBParams): Promise<PayZFBResponse> => {
  try {
    const response: AxiosResponse<any> = await myAxios.post('/aliyun/pay/payZFB', params);
    
    // Assuming the response contains data with the Alipay payment form
    return { code: 200, data: response.data };
  } catch (error: any) {
    // Handle any errors here
    console.error('Error occurred during Alipay payment:', error);
    return { code: 500, message: 'Internal Server Error' };
  }
};

