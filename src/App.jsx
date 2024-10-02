import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./app/layout";
import { SmoothRoutingConfig } from "./app/navigator/SmoothRoutingConfig";
import { RouterConfig } from "./app/navigator/RouterConfig";
import { useWindowSize } from "./app/components/UseWindowSize";

export const App = () => {
  const size = useWindowSize();
  const isSmallDevice = size.width <= 768; // Example breakpoint for small devices

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/*"
            element={isSmallDevice ? <SmoothRoutingConfig /> : <RouterConfig />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
