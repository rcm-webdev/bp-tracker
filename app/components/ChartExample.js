"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  Legend,
} from "recharts";

const data = [
  {
    name: "Monday",
    systolic: 145,
    diastolic: 96,
  },
  {
    name: "Tuesday",
    systolic: 117,
    diastolic: 79,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-neutral text-neutral-content p-5 rounded-2xl shadow-sm">
        <p>
          <strong>{label}</strong>
        </p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function VerticalBarChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
      >
        {/* Stage 2 */}
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          domain={[0, 200]}
          label={{ value: "Pressure", angle: -90, position: "insideLeft" }}
        />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend verticalAlign="top" /> */}

        <Bar
          dataKey="systolic"
          name="Systolic"
          fill="#44ebd3"
          barSize={40}
          radius={[10, 10, 0, 0]}
        >
          <LabelList dataKey="systolic" position="top" />
        </Bar>
        <Bar
          dataKey="diastolic"
          name="Diastolic"
          fill="#ffd6a7"
          barSize={40}
          radius={[10, 10, 0, 0]}
        >
          <LabelList dataKey="diastolic" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
