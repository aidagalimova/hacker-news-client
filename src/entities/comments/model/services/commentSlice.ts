import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comments } from '../types/commentType';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_API }),
  endpoints: (builder) => ({
    getCommentsById: builder.query<Comments, string>({
      query: (id) => `comments/${id}`,
    }),
  }),
});
