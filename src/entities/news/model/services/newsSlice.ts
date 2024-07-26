import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FullNews, NewsType } from 'entities/news';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsType[], void>({
      query: () => `news/`,
    }),
    getNewsById: builder.query<FullNews, string>({
      query: (id) => `news/${id}`,
    }),
  }),
});
