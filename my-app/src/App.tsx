import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CoinsContainer from "./components/CoinsContainer";


const App = () => {
 
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<CoinsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
