import { Chart } from "@faharmony/charts";
import { areaChartData } from "../data";

export const AreaChart = () => {
  return (
    <Chart
      options={{
        chart: {
          zoomType: "x",
        },
        title: {
          text: "Area Chart",
        },
        xAxis: {
          type: "datetime",
        },
        series: [
          {
            type: "area",
            name: "USD/EUR",
            data: areaChartData,
          },
        ],
        legend: {
          enabled: false,
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                [0, "#686ae7b3"],
                [1, "#b1baf100"],
              ],
            },
            marker: {
              radius: 2,
              // enabled: false,
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
              },
            },
            threshold: null,
          },
        },
      }}
    ></Chart>
  );
};
