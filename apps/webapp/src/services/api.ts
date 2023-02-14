import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';

import { BACKEND_URL, REQUEST_TIMEOUT } from '../constants';
import { getToken } from './token';
import { processErrorHandler } from './process-error-handler';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (code: number) => StatusCodeMapping[code]

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });


  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      config.headers["Access-Control-Allow-Origin"] = "*";

      if (token) {
        config.headers['x-token'] = token;
      }
      return config;
    });

  api.interceptors.response.use(
    (response) => response,
    (error) => {

      if (error.response && shouldDisplayError(error.response.data.statusCode)) {
        processErrorHandler(error.response.data.message)
      }
    }
  )

  return api;
}

