import api from './api';

export async function signUp(email, password, avatar_url, username) {
  const response = await api.post('/users', { email, password, avatar_url, username });
  return response.data;
}
//
