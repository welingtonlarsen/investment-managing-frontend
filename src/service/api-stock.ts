import { TStock } from '../types/stock.type';
import { PaginatedResponse } from './paginated-response.type';
import axiosInstance from './axios-instance';

const API_PATH = '/stocks';

export async function getAllIgnoringPagination(): Promise<TStock[]> {
  const { data } = await axiosInstance.get<PaginatedResponse<TStock>>(API_PATH, {
    params: {
      page: 1,
      limit: 100,
    },
  });
  // TODO: Ignore or implement pagination? Currently we've been using a big limit to avoid it
  return data.items;
}
