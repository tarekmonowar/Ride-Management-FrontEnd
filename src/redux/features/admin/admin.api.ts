import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { IRidePaymentSummary } from "@/types/admin.type";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
        params: { role: "RIDER" },
      }),
      providesTags: ["USER"],
    }),
    allDrivers: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
        params: { role: "DRIVER" },
      }),
      providesTags: ["USER"],
    }),
    toggleBlockUser: builder.mutation({
      query: ({ userId, isBlocked }) => ({
        url: `/user/${userId}`,
        method: "PATCH",
        data: { isBlocked },
      }),
      invalidatesTags: ["USER"],
    }),
    allRides: builder.query({
      query: () => ({
        url: "/ride/all-rides",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    getPaymentsHistory: builder.query<IResponse<IRidePaymentSummary>, void>({
      query: () => ({
        url: "/admin/payments-history",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
  }),
});

export const {
  useAllUsersQuery,
  useAllDriversQuery,
  useToggleBlockUserMutation,
  useAllRidesQuery,
  useGetPaymentsHistoryQuery,
} = adminApi;
