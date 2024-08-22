import { BrowserRouter } from "react-router-dom"
import './App.css'
import RouterConfig from "./navigator/RouterConfig"
import Layout from "./components/Layout"

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RouterConfig />
      </Layout>
    </BrowserRouter>
  )
}

export default App
