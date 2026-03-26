import { useState } from "react"
import type { CoinInterface } from "../interfaces/Coin"

const Coin = ({order, name, symbol, price, priceChange, code}: CoinInterface) => {

const [isFavorite, setIsFavorite] = useState<boolean>(false)

const handleFavorites = () => {
  setIsFavorite(!isFavorite)
}
  return (
    <div>
      <span>{order}</span>
      <h2>{name}</h2>
      <span>{code}</span>
      <span>{symbol}</span>
      <span>{price}</span>
      <span>{priceChange}</span>
      <button onClick={handleFavorites}>
  {
    isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
  }
</button>
    </div>
  )
}

export default Coin