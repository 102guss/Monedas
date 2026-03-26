import Coin from "./components/Coin";
import coins from "./data/coins";
import { useRef, useState } from "react";
import type { CoinInterface } from "./interfaces/Coin";
import Header from "./components/Header";

const App = () => {
  const [coinsList, setCoinsList] = useState<CoinInterface[]>(coins);
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const searchValue = searchInput.current?.value || "";
    const newCoinsList = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setCoinsList(newCoinsList);
  };

  return (
    <div>
      <Header />
      <main className="bg-white">
        <h1>Lista de criptomonedas</h1>
        <input
          type="text"
          placeholder="Buscar criptomoneda"
          ref={searchInput}
          onChange={handleSearch}
        />
        <div className="coins-list">
          {coinsList.map((coin) => (
            <Coin key={coin.order} {...coin} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default App;
