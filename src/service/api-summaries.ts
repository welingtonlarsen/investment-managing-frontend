import { BrokerageNoteSummary } from '../types/brokerage-notes-summaries.type';
import { PaginatedResponse } from './paginated-response.type';
import axiosInstance from './axios-instance';

const API_PATH = '/brokeragenotes/summaries';

export const getAllSummariesIgnoringPagination = async (): Promise<BrokerageNoteSummary[]> => {
  const { data } = await axiosInstance.get<PaginatedResponse<BrokerageNoteSummary>>(API_PATH, {
    params: {
      page: 1,
      limit: 100,
    },
  });
  // TODO: Ignore or implement pagination? Currently we've been using a big limit to avoid it
  return data.items;
};
