import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../lib/data";

const Home = () => {
  return (
    <div className="grid gap-5 grid-cols-4 auto-rows-[minmax(180px,_auto)] grid-flow-dense lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:auto-rows-[minmax(120px,_auto)]">
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-1 row-span-3">
        <TopBox />
      </div>
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-1">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-1">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-1 row-span-3">
        <PieChartBox />
      </div>
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-1">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-1">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-2 row-span-2 md:hidden">
        <BigChartBox />
      </div>
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-1">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="p-5 rounded-lg border-2 border-soft-bg col-span-1">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
