import { LOCAL_STORAGE_KEYS } from '../config';

export const clearTokenInfo = () => {
  Object.values(LOCAL_STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
};

export const setTokenInfo = ({ idToken, refreshToken, email, idTokenExpireDate }) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.email, email);
  localStorage.setItem(LOCAL_STORAGE_KEYS.idToken, idToken);
  localStorage.setItem(LOCAL_STORAGE_KEYS.refreshToken, refreshToken);
  localStorage.setItem(LOCAL_STORAGE_KEYS.idTokenExpireDate, idTokenExpireDate);
};

export const getTokenInfo = () => {
  const info = {
    email: localStorage.getItem(LOCAL_STORAGE_KEYS.email),
    idToken: localStorage.getItem(LOCAL_STORAGE_KEYS.idToken),
    refreshToken: localStorage.getItem(LOCAL_STORAGE_KEYS.refreshToken),
    idTokenExpireDate: localStorage.getItem(LOCAL_STORAGE_KEYS.idTokenExpireDate),
  };

  const allValuesAreSet = Object.values(info).every(value => value !== null);

  if (!allValuesAreSet) {
    clearTokenInfo();
  }

  return allValuesAreSet ? info : null;
};
