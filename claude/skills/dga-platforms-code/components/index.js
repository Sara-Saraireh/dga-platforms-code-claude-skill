// DGA Platforms Code — illustrative component templates (NOT a published npm package).
// Copy this folder into your project, then import from your local copy. Load the CSS once at your
// app root: tokens.css then components.css (then charts/charts.css for charts), e.g.:
//   import "./components/tokens.css";
//   import "./components/components.css";
//   import "./components/charts/charts.css";
export { default as Button } from "./Button.jsx";
export { default as Badge } from "./Badge.jsx";
export { default as Input } from "./Input.jsx";
export { default as Alert } from "./Alert.jsx";
export { default as Card } from "./Card.jsx";
export { default as Stepper } from "./Stepper.jsx";
export { default as Breadcrumbs } from "./Breadcrumbs.jsx";
export { default as Modal } from "./Modal.jsx";

// Charts (dependency-free, pure SVG) — increment 2
export {
  ChartContainer, KpiCard, LineChart, BarChart, DonutChart,
  ChartEmpty, ChartLoading, ChartError,
} from "./charts/index.js";
