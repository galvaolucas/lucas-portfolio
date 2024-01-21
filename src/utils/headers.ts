export const setHeaders = () => {
  const user = localStorage.getItem('user');
  const token = user && JSON.parse(user)?.token;
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
}