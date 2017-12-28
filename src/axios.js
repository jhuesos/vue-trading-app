import axios from 'axios';
import { DB_URL, AUTH_URL, API_KEY } from './config';

// Set dbConnection defaults
export const dbConnection = axios.create();
dbConnection.defaults.baseURL = DB_URL;
dbConnection.defaults.headers.common['Content-Type'] = 'application/json';

export const loginSignupConnection = axios.create();
loginSignupConnection.defaults.baseURL = AUTH_URL;
loginSignupConnection.defaults.params = {
  key: API_KEY,
};
