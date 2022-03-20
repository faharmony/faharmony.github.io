import { PageView } from "@faharmony/views";
import { AreaChart } from "./components/AreaChart";
import { BarChart } from "./components/BarChart";
import { PieChart } from "./components/PieChart";
import { StockChart } from "./components/StockChart";
import { StockChartAdvanced } from "./components/StockChartAdvanced";

import Highcharts from "highcharts";
import stock from "highcharts/modules/stock";
import indicatorsAll from "highcharts/indicators/indicators-all";
import fullScreen from "highcharts/modules/full-screen";

// Some highchart options require enabling separate modules
stock(Highcharts);
indicatorsAll(Highcharts); // Indicators can be imported one by one for more efficiency
fullScreen(Highcharts);

const Charts = () => {
  return (
    <PageView heading="Charts" overflow="scroll">
      <div style={{ width: 800, height: 600, margin: 24 }}>
        <AreaChart />
      </div>
      <div style={{ width: 800, height: 600, margin: 24 }}>
        <BarChart />
      </div>
      <div style={{ width: 800, height: 600, margin: 24 }}>
        <PieChart />
      </div>
      <div style={{ width: 800, height: 600, margin: 24 }}>
        <StockChart />
      </div>
      <div style={{ width: 800, height: 600, margin: 24 }}>
        <StockChartAdvanced />
      </div>
    </PageView>
  );
};

export default Charts;
