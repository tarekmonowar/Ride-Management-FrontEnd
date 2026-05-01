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
    getStatistics: builder.query({
      query: () => ({
        url: "/admin/statistics",
        method: "GET",
      }),
      providesTags: ["RIDE", "USER"],
    }),
    reviewDriver: builder.mutation({
      query: ({
        driverId,
        action,
        reason,
      }: {
        driverId: string;
        action: string;
        reason?: string;
      }) => ({
        url: `/admin/review-driver/${driverId}`,
        method: "PATCH",
        data: { action, reason },
      }),
      invalidatesTags: ["USER"],
    }),
    getSettlements: builder.query({
      query: () => ({
        url: "/admin/settlements",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),
    settleDriver: builder.mutation({
      query: (driverId: string) => ({
        url: `/admin/settle/${driverId}`,
        method: "POST",
      }),
      invalidatesTags: ["ADMIN"],
    }),
  }),
});

export const {
  useAllUsersQuery,
  useAllDriversQuery,
  useToggleBlockUserMutation,
  useAllRidesQuery,
  useGetPaymentsHistoryQuery,
  useGetStatisticsQuery,
  useReviewDriverMutation,
  useGetSettlementsQuery,
  useSettleDriverMutation,
} = adminApi;
