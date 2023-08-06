import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from 'src/app/config';
import { IUser } from '../model';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], any>({
      query: () => '/users',
    }),
  }),
});

export const {
  useGetUsersQuery,
} = userApi;
