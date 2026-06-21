// DGA Platforms Code — component library.
// Import the CSS once at your app root: tokens.css then components.css (then charts.css for charts).
//   import "dga-platforms-code/components/tokens.css";
//   import "dga-platforms-code/components/components.css";
//   import "dga-platforms-code/components/charts/charts.css";
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
