import { renderToString } from "react-dom/server";
import App from "./App";

export { sitePages } from "./data/pages";

export function render(path = "/") {
  return renderToString(<App path={path} />);
}
