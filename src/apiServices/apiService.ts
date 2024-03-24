/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import env from '../../env';

axios.create({
  baseURL: env.VITE_API_URL,
});

export interface NewCategoryData {
  title: string;
  description: string;
}

export interface EditCategoryData {
  id: string;
  title: string;
  description: string;
}

export interface CategoryData {
  id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ListCategoriesParams {
  orderBy?: 'created_at_ASC' | 'created_at_DESC';
  startDate?: string;
  endDate?: string;
  search?: string;
}

const api = axios.create({
  baseURL: env.VITE_API_URL,
});

const apiService = {
  getAllCategories: async (params: ListCategoriesParams): Promise<CategoryData[]> => {
    try {
      const response = await api.get<CategoryData[]>('/list-categories', { params });

      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  createCategory: async (categoryData: NewCategoryData) => {
    try {
      const response = await api.post('/create-category', categoryData);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  editCategory: async (categoryData: EditCategoryData) => {
    try {
      const response = await api.post(`/edit-category`, categoryData);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  getCategoryById: async (categoryId: string, categoryData: CategoryData) => {
    try {
      const response = await api.post(`/get-category-by-id?id=${categoryId}`, categoryData);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  deleteCategory: async (categoryId: string) => {
    try {
      const response = await api.delete(`/delete-category`, { data: { id: categoryId } });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  searchCategorys: async (searchTerm: string, params: ListCategoriesParams) => {
    try {
      const response = await api.get('/list-categories', { params: { ...params, search: searchTerm } });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};

const handleApiError = (error: any) => {
  if (error.response) {
    throw new Error(`Error from server: ${JSON.stringify(error.response.data)}`);
  }

  if (error.request) {
    throw new Error(`No response from server: ${error.request}`);
  }

  if (error.message) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default apiService;
