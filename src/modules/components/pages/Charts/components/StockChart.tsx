import { Chart } from "@faharmony/charts";
import { stockData } from "../data";

export const StockChart = () => {
  return (
    <Chart
      constructorType="stockChart"
      options={{
        rangeSelector: {
          allButtonsEnabled: true,
          selected: 2,
        },

        title: {
          text: "AAPL Stock Price",
        },

        series: [
          {
            name: "AAPL",
            //@ts-ignore
            data: stockData,
            tooltip: {
              valueDecimals: 2,
            },
          },
          {
            type: "ema",
            linkedTo: "AAPL",
          },
          {
            type: "ema",
            linkedTo: "AAPL",
            params: {
              period: 50,
            },
          },
        ],
      }}
    ></Chart>
  );
};
