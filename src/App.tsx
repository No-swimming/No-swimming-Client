import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import MainPage from "./pages/main";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          {/* 헤더 적용할 페이지는 여기에  */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
