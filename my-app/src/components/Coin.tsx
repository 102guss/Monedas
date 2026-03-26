import type { CoinInterface } from "../interfaces/Coin";


const Coin = ({order, name, symbol, price, priceChange, code}: CoinInterface) => (
  <div>
    <span>{order}</span>
    <h2>{name}</h2>
    <span>{symbol}</span>
    <span>{price}</span>
    <span>{priceChange}</span>
    <span>{code}</span>
  </div>
);

export default Coin;