import PWABadge from "./components/modules/PWABadge/PWABadge.tsx";
import { Routes, Route } from "react-router-dom";
import { HistoryModule } from "./components/modules/HistoryModule/HistoryModule.tsx";
import { NowModule } from "./components/modules/NowModule/NowModule.tsx";
import { OverviewModule } from "./components/modules/OverviewModule/OverviewModule.tsx";
import { MainPage } from "./pages/MainPage/MainPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<NowModule />}></Route>
          <Route path="/historik" element={<HistoryModule />} />
          <Route path="/oversigt" element={<OverviewModule />} />
          <Route path="/lige-nu" element={<NowModule />} />
        </Route>
      </Routes>
      <PWABadge />
    </>
  );
}

export default App;
