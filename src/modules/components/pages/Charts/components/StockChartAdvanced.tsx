import { useRef } from "react";
import { Chart } from "@faharmony/charts";
import { stockData, stockProcessedData } from "../data";
import { Button } from "@faharmony/components";

export const StockChartAdvanced = () => {
  const chartRef = useRef<any>();

  return (
    <>
      <Chart
        constructorType="stockChart"
        callback={(chart) => {
          chartRef.current = chart;
        }}
        options={{
          chart: {
            height: 600,
          },
          title: {
            text: "AAPL Historical",
          },
          subtitle: {
            text: "All indicators",
          },
          legend: {
            enabled: true,
          },
          rangeSelector: {
            selected: 2,
          },
          yAxis: [
            {
              height: "60%",
            },
            {
              top: "60%",
              height: "20%",
            },
            {
              top: "80%",
              height: "20%",
            },
          ],
          plotOptions: {
            series: {
              showInLegend: true,
            },
          },
          series: [
            {
              type: "candlestick",
              id: "aapl",
              name: "AAPL",
              data: stockData,
            },
            {
              type: "column",
              id: "volume",
              name: "Volume",
              data: stockProcessedData.volume,
              yAxis: 1,
            },
            {
              type: "pc",
              id: "overlay",
              linkedTo: "aapl",
              yAxis: 0,
            },
            {
              type: "macd",
              id: "oscillator",
              linkedTo: "aapl",
              yAxis: 2,
            },
          ],
        }}
      ></Chart>
      <Button onClick={() => chartRef.current?.fullscreen?.toggle()}>
        Toggle fullscreen
      </Button>
    </>
  );
};
