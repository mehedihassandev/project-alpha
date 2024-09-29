import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./app/components/Layout";
import { SmoothRoutingConfig } from "./app/navigator/SmoothRoutingConfig";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<SmoothRoutingConfig />} />
        </Routes>

        {/* <RouterConfig /> */}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
