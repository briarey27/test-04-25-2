import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/types.ts";
import { FetchUsersArgs } from "./types.ts";

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], FetchUsersArgs | void>({
            query: (arg) => {
                const { limit = 10 } = arg || {};
                return {
                    url: "/users",
                    params: {
                        _limit: limit,
                    },
                };
            },
        }),
        fetchUser: build.query<IUser, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
            }),
        }),
    }),
});

export const { useFetchAllUsersQuery, useFetchUserQuery } = userAPI;
