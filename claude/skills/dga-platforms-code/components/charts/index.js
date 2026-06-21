// DGA Platforms Code — illustrative chart templates (dependency-free, pure SVG/CSS; NOT a package).
// Copy into your project and import from your local copy. Load the CSS once at your app root, after
// tokens.css + components.css:
//   import "./components/charts/charts.css";
export { default as ChartContainer } from "./ChartContainer.jsx";
export { default as KpiCard } from "./KpiCard.jsx";
export { default as LineChart } from "./LineChart.jsx";
export { default as BarChart } from "./BarChart.jsx";
export { default as DonutChart } from "./DonutChart.jsx";
export { ChartEmpty, ChartLoading, ChartError } from "./ChartState.jsx";
