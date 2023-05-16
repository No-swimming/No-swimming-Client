import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Write from "./pages/write";
import MainPage from "./pages/main";
import NotFound from "./pages/notFound";
import MyPage from "./pages/myPage";
import Search from "./pages/search";
import BestSeller from "./pages/bestSeller";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          {/* 헤더 적용할 페이지는 여기에  */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/write/:isbn" element={<Write />} />
          <Route path="/search/:book/:start" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/best" element={<BestSeller />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
