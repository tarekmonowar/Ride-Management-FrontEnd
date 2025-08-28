/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Loader2 } from "lucide-react";
import { useGetStatisticsQuery } from "@/redux/features/admin/admin.api";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Line,
  LineChart,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const barChartConfig = {
  totalRides: {
    label: "Total Rides",
    color: "#2563eb",
  },
  totalPayments: {
    label: "Total Payments",
    color: "#f97316",
  },
} satisfies ChartConfig;

const lineChartConfig = {
  totalRides: {
    label: "Total Rides",
    color: "#16a34a",
  },
  totalPayments: {
    label: "Total Payments",
    color: "#dc2626",
  },
} satisfies ChartConfig;

export default function AdminStatistics() {
  const { data, isLoading } = useGetStatisticsQuery(undefined);

  const result = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
      </div>
    );
  }

  // ✅ transform 7 days data
  const last7DaysData =
    result?.last7Days?.map((d: any) => ({
      day: new Date(d.date).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      totalRides: d.totalRides,
      totalPayments: d.totalPayments,
    })) || [];

  // ✅ transform 12 months data
  const last12MonthsData =
    result?.last12Months?.map((d: any) => ({
      month: new Date(d.month + "-01").toLocaleDateString("en-US", {
        month: "short",
      }),
      totalRides: d.totalRides,
      totalPayments: d.totalPayments,
    })) || [];

  return (
    <div className="space-y-10 p-6">
      {/* 7 Days Bar Chart */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          📊 Last 7 Days Total Rides and Payments
        </h2>
        <ChartContainer
          config={barChartConfig}
          className="h-[250px] w-[50%] mx-auto"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={last7DaysData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              {/* Left axis for rides */}
              <YAxis
                yAxisId="rides"
                orientation="left"
                tickLine={false}
                axisLine={false}
                label={{
                  value: "Rides",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fontWeight: "bold",
                    fontSize: "17px",
                  },
                }}
              />
              {/* Right axis for payments */}
              <YAxis
                yAxisId="payments"
                orientation="right"
                tickLine={false}
                axisLine={false}
                label={{
                  value: "Payments",
                  angle: 90,
                  position: "insideRight",
                  style: {
                    textAnchor: "middle",
                    fontWeight: "bold",
                    fontSize: "17px",
                  },
                }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                yAxisId="rides"
                dataKey="totalRides"
                fill="var(--color-totalRides)"
                radius={4}
              />
              <Bar
                yAxisId="payments"
                dataKey="totalPayments"
                fill="var(--color-totalPayments)"
                radius={4}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* 12 Months Line Chart */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          📈 Last 12 Months Total Rides and Payments
        </h2>
        <ChartContainer
          config={lineChartConfig}
          className="h-[250px] w-[50%] mx-auto"
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={last12MonthsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              {/* Left axis for rides */}
              <YAxis
                yAxisId="rides"
                orientation="left"
                tickLine={false}
                axisLine={false}
                label={{
                  value: "Rides",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fontWeight: "bold",
                    fontSize: "17px",
                  },
                }}
              />
              {/* Right axis for payments */}
              <YAxis
                yAxisId="payments"
                orientation="right"
                tickLine={false}
                axisLine={false}
                label={{
                  value: "Payments",
                  angle: 90,
                  position: "insideRight",
                  style: {
                    textAnchor: "middle",
                    fontWeight: "bold",
                    fontSize: "17px",
                  },
                }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                yAxisId="rides"
                type="monotone"
                dataKey="totalRides"
                stroke="var(--color-totalRides)"
                strokeWidth={2}
                dot={true}
              />
              <Line
                yAxisId="payments"
                type="monotone"
                dataKey="totalPayments"
                stroke="var(--color-totalPayments)"
                strokeWidth={2}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
