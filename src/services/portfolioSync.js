import { dbConnection } from '../axios';
import { LOCAL_STORAGE_KEYS } from '../config';

let id = localStorage.getItem(LOCAL_STORAGE_KEYS.portfolioId);

export async function savePortfolio(portfolio) {
  const isUpdate = id !== null;
  const data = isUpdate ? { [id]: portfolio } : portfolio;

  const response = await dbConnection({
    method: isUpdate ? 'put' : 'post',
    url: '/portfolio.json',
    data,
  });

  if (!isUpdate) {
    id = response.data.name;
    localStorage.setItem(LOCAL_STORAGE_KEYS.portfolioId, id);
  }

  return response;
}

export async function loadPortfolio() {
  if (id === null) {
    throw new Error('Id is not defined');
  }

  return dbConnection.get(`/portfolio/${id}.json`);
}
