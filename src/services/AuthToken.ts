import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
  // timeout: 5000, // Timeout if necessary
});

export async function setAuthToken(token: string) {
  return new Promise<void>((resolve) => {
      console.debug('setting Auth Token: ', token);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      resolve()
  })
};

export {axiosInstance}
