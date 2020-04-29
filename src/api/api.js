import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/' ,
  headers: {
    'API-KEY': '83ab5a82-246e-425b-b6a6-71417fabaab1'
  }
});



export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
              return response.data;
            });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }
};