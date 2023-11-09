import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  chart: {
    type: "pie",
  },
  plotOptions: {
    pie: {
      startAngle: 90,
      endAngle: 450,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  labels: ["Organic", "Google", "Social Media", "Referral"],
  colors: ["#585BF0", "#FFBE46", "#37D279", "#8A8DF5"],
};
const series = [64, 12, 13, 11];
const PieChart = () => {
  return <Chart options={options} series={series} type="pie" width={300} />;
};

export default PieChart;
