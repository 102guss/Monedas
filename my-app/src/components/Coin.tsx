interface CoinProps {
  order: number;
  name: string;
  symbol: string;
  price: number;
  priceChange: number;
  code: string;
}

const Coin = ({order, name, symbol, price, priceChange, code}: CoinProps) => (
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