import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateAvailable: builder.mutation<
      IResponse<null>,
      { isAvailable: boolean }
    >({
      query: (driverInfo) => ({
        url: "/driver/availability",
        method: "PATCH",
        data: driverInfo,
      }),
      invalidatesTags: ["DRIVER", "USER"],
    }),
    availableRides: builder.query({
      query: () => ({
        url: "/driver/available-rides",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
    acceptRide: builder.mutation<IResponse<null>, string>({
      query: (rideId) => ({
        url: `/driver/accept/${rideId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),
    currentRide: builder.query({
      query: () => ({
        url: "/driver/currentRide",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),

    updateStatus: builder.mutation<
      IResponse<null>,
      { rideId: string; status: string; cancellationReason?: string }
    >({
      query: ({ rideId, status, cancellationReason }) => ({
        url: `/ride/update-status/${rideId}`,
        method: "PATCH",
        data: { status, cancellationReason },
      }),
      invalidatesTags: ["DRIVER", "RIDE"],
    }),
  }),
});

export const {
  useUpdateAvailableMutation,
  useAvailableRidesQuery,
  useAcceptRideMutation,
  useCurrentRideQuery,
  useUpdateStatusMutation,
} = driverApi;
