import axios from 'axios';
import { DB_URL } from './config';

// Set dbConnection defaults
export const dbConnection = axios.create();
dbConnection.defaults.baseURL = DB_URL;
dbConnection.defaults.headers.common['Content-Type'] = 'application/json';
