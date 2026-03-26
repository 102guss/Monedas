import type { CoinInterface } from "../interfaces/Coin"

const Coin = ({order, name, symbol, price, priceChange, code}: CoinInterface) => {

  const addToFavorites = () => { if(name === "Bitcoin") { alert("Bitcoin es la mejor criptomoneda") } }

  return (
    <div>
      <span>{order}</span>
      <h2>{name}</h2>
      <span>{code}</span>
      <span>{symbol}</span>
      <span>{price}</span>
      <span>{priceChange}</span>
      <button onClick={addToFavorites}>Agregar a favoritos</button>
    </div>
  )
}

export default Coin