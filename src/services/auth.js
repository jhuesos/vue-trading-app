import { loginSignupConnection } from '../axios';

export const signup = userInfo => loginSignupConnection.post('/signupNewUser', userInfo);
export const login = userInfo => loginSignupConnection.post('/verifyPassword', userInfo);
