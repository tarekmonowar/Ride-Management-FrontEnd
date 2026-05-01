import { baseApi } from "@/redux/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (rideId: string) => ({
        url: `/payment/create-intent/${rideId}`,
        method: "POST",
      }),
      invalidatesTags: ["PAYMENT"],
    }),
    confirmPayment: builder.mutation({
      query: ({
        rideId,
        paymentMethod,
        stripePaymentId,
      }: {
        rideId: string;
        paymentMethod: "stripe" | "cash";
        stripePaymentId?: string;
      }) => ({
        url: `/payment/confirm/${rideId}`,
        method: "POST",
        data: { paymentMethod, stripePaymentId },
      }),
      invalidatesTags: ["PAYMENT", "RIDE"],
    }),
    driverConfirmPayment: builder.mutation({
      query: (rideId: string) => ({
        url: `/payment/driver-confirm/${rideId}`,
        method: "POST",
      }),
      invalidatesTags: ["PAYMENT", "RIDE", "DRIVER"],
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useConfirmPaymentMutation,
  useDriverConfirmPaymentMutation,
} = paymentApi;
