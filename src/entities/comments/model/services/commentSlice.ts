import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comments } from '../types/commentType';
import { baseUrl } from 'shared/const/api';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCommentsById: builder.query<Comments, string>({
      query: (id) => `comments/${id}`,
    }),
  }),
});
