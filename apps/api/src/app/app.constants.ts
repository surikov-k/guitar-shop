export const ENV_FILE_PATH = 'environments/.api.env';

export enum EnvValidation {
  API_PORT_REQUIRED = 'Api port is required',
  SECRET = 'JWT secret is required',
}
