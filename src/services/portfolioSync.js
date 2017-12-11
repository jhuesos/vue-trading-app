import { dbConnection } from '../axios';
import { STORAGE_KEY } from '../config';

let id = localStorage.getItem(STORAGE_KEY);

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
    localStorage.setItem(STORAGE_KEY, id);
  }

  return response;
}

export async function loadPortfolio() {
  if (id === null) {
    throw new Error('Id is not defined');
  }

  return dbConnection.get(`/portfolio/${id}.json`);
}
