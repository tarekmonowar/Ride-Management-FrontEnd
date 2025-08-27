import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { IRideRequest } from "@/types/ride.type";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestRide: builder.mutation<IResponse<null>, IRideRequest>({
      query: (rideInfo) => ({
        url: "/ride/rider-request",
        method: "POST",
        data: rideInfo,
      }),
      invalidatesTags: ["RIDE"],
    }),
    activeRide: builder.query({
      query: () => ({
        url: "/ride/activeRide",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    cancelRide: builder.mutation<
      IResponse<null>,
      { rideId: string; cancellationReason: string }
    >({
      query: ({ rideId, cancellationReason }) => ({
        url: `/ride/ride-cancel/${rideId}`,
        method: "PATCH",
        data: { cancellationReason },
      }),
      invalidatesTags: ["RIDE"],
    }),
    rideHistory: builder.query({
      query: () => ({
        url: "/ride/rider-history",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    driverRideHistory: builder.query({
      query: () => ({
        url: "/ride/rider-history",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
  }),
});

export const {
  useRequestRideMutation,
  useActiveRideQuery,
  useCancelRideMutation,
  useRideHistoryQuery,
  useDriverRideHistoryQuery,
} = rideApi;
