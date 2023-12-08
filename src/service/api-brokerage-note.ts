import { AxiosResponse } from 'axios';
import { TBrokerageNote } from '../hooks/useBrokerageNoteForm';
import axiosInstance from './axios-instance';

const API_PATH = '/brokeragenotes';

export const createNote = async (brokerageOrder: TBrokerageNote) => axiosInstance.post(API_PATH, brokerageOrder);

export const getNoteById = async (id: number): Promise<AxiosResponse<TBrokerageNote>> =>
  axiosInstance.get(`${API_PATH}/${id}`);

export const updateNote = async (id: number, brokerageNote: TBrokerageNote) =>
  axiosInstance.put(`${API_PATH}/${id}`, brokerageNote);

export const deleteNote = async (id: number) => {
  await axiosInstance.delete(`${API_PATH}/${id}`);
};
