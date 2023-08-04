import axios from 'axios';
import queryString from 'query-string';
import { PracticeTestResultInterface, PracticeTestResultGetQueryInterface } from 'interfaces/practice-test-result';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPracticeTestResults = async (
  query?: PracticeTestResultGetQueryInterface,
): Promise<PaginatedInterface<PracticeTestResultInterface>> => {
  const response = await axios.get('/api/practice-test-results', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPracticeTestResult = async (practiceTestResult: PracticeTestResultInterface) => {
  const response = await axios.post('/api/practice-test-results', practiceTestResult);
  return response.data;
};

export const updatePracticeTestResultById = async (id: string, practiceTestResult: PracticeTestResultInterface) => {
  const response = await axios.put(`/api/practice-test-results/${id}`, practiceTestResult);
  return response.data;
};

export const getPracticeTestResultById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/practice-test-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deletePracticeTestResultById = async (id: string) => {
  const response = await axios.delete(`/api/practice-test-results/${id}`);
  return response.data;
};
