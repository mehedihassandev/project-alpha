import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { RouterConfig } from "./navigator/RouterConfig"
import { Layout } from "./components/Layout";
import { SmoothRoutingConfig } from "./navigator/SmoothRoutingConfig";

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
