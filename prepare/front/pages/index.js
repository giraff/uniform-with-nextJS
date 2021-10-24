import React from "react";
import AppLayout from "../components/Layouts/AppLayout";
import ReactECharts from "echarts-for-react";

const Dashboard = () => {
  const title = "대시보드";
  const subTitle =
    "여러 데이터들을 동시에 비교할 수 있게 해주는 여러 뷰의 모음입니다";

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <AppLayout title={title} subTitle={subTitle}>
      <ReactECharts option={options} />
    </AppLayout>
  );
};

export default Dashboard;
