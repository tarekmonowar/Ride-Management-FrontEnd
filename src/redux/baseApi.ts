import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axioxBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ["USER"],
});
