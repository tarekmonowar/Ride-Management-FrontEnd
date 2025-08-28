import { baseApi } from "@/redux/baseApi";
import type { IResponse, ISendOtp, IVerifyOtp } from "@/types";
import type { TUpdateUser } from "@/types/auth.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),

    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    updateUser: builder.mutation<
      IResponse<null>,
      { userId: string; data: TUpdateUser }
    >({
      query: ({ userId, data }) => ({
        url: `/user/${userId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["USER"],
    }),
    changePassword: builder.mutation<
      IResponse<null>,
      { oldPassword: string; newPassword: string }
    >({
      query: ({ oldPassword, newPassword }) => ({
        url: `/auth/change-password`,
        method: "POST",
        data: { oldPassword, newPassword },
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogoutMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
  useUpdateUserMutation,
  useChangePasswordMutation,
} = authApi;
