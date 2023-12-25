// src/apis/productAPI.js

import api from './axiosConfigs';

export const UserAPI = {
  get: async (id: number) => {
    const response = await api.request({
      url: '/users/' + id,
      method: 'GET',
    });

    // returning the product returned by the API
    return response.data;
  },
};

export const blogAPI = {
  get: async (userid: number, id: number) => {
    const response = await api.request({
      url: '/users/' + userid + '/posts/' + id,
      method: 'GET',
    });

    // returning the product returned by the API
    return response.data;
  },
  getAll: async (userid: number) => {
    const response = await api.request({
      url: '/users/' + userid + '/posts',
      method: 'GET',
    });

    return response.data;
  },
  put: async (userId: number, blogId: number, body: object) => {
    const response = await api.request({
      url: '/posts/' + blogId,
      method: 'PUT',
      data: body,
    });

    // returning the product returned by the API
    return response.data;
  },
};
