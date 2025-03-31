import { Routes, Route, BrowserRouter } from "react-router";
import NotFound from "./NotFound";
import HomePageLayout from "./HomePageLayout";
import HomeLandingPage from "./components/homelandingpage";
import ConnectionPage from "./components/connectionpage";
import EndPlateConnection from "./EndPlateConnection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout/>}>
          <Route index element={<HomeLandingPage/>} />
          <Route path="/connection" element={<ConnectionPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
        <Route path="/endplateconnection" element={<EndPlateConnection/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
