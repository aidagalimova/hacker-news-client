import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FullNews, NewsType } from 'entities/news';
import { baseUrl } from 'shared/const/api';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsType[], void>({
      query: () => `news/`,
    }),
    getNewsById: builder.query<FullNews, string>({
      query: (id) => `news/${id}`,
    }),
  }),
});
