import { useState } from "react";
import type { CoinInterface } from "../interfaces/Coin";

const Coin = ({

  id,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  image
 
}: CoinInterface) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorites = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <tr className="coin-card [&>td]:px-4 [&>td]:py-3">
      <td className="px-6 py-4 text-sm text-gray-600">{id}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={image} alt={symbol} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
  <span className="font-semibold text-gray-900">{name}</span>
  <span className="text-sm text-gray-500">{symbol}</span>

          </div>
        </div>
      </td>
      <td>{current_price}</td>
      <td>{price_change_percentage_24h?.toFixed(2)}%</td>
      <td>
        <button onClick={handleFavorites}>
          {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </td>
    </tr>
  );
};
export default Coin;
