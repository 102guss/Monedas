import { useState } from "react"
import type { CoinInterface } from "../interfaces/Coin"

const Coin = ({order, name, symbol, price, priceChange, code}: CoinInterface) => {

const [isFavorite, setIsFavorite] = useState<boolean>(false)

const handleFavorites = () => {
  setIsFavorite(!isFavorite)
}
  return (
  <tr className="coin-card">
    <td>{order}</td>
    <td>{name}</td>
    <td>{code}</td>
    <td>{symbol}</td>
    <td>{price}</td>
    <td>{priceChange}</td>
    <td>
      <button onClick={handleFavorites}>
        {
          isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
        }
      </button>
    </td>
  </tr>
)
}
export default Coin