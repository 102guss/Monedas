import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CoinsContainer from "./components/CoinsContainer";
import NotFound from "./components/NotFound";


const App = () => {
 
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<CoinsContainer />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
