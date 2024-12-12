import axios from "axios";
import NavigateToLogin from "../navigateToLogin";


const api = axios.create({
  baseURL: "https://post.rootski.live",
});

api.interceptors.request.use(async (config) => {
  const token = await localStorage.getItemAsync("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = await localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(
            "https://post.rootski.live/employee/access_byrefresh/",
            { refresh: refreshToken },
          );
          const newAccessToken = refreshResponse.data.access;
          await localStorage.setItem("accessToken", newAccessToken);

          // Retry original request with new token
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios.request(error.config);
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          await localStorage.removeItem("accessToken");
          await localStorage.removeItem("refreshToken");
          NavigateToLogin();
        }
      } else {
        console.error("Refresh token missing");
        NavigateToLogin();
      }
    }
    return Promise.reject(error);
  },
);

export default api;
