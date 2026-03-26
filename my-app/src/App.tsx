import Coin from './components/Coin'
import coins from './data/coins'
import { useRef, useState } from 'react'

const App = () => {
  const [coinsList, setCoinsList] = useState(coins)
  const searchInput = useRef(null)

const handleSearch = () => {
  const searchValue = searchInput.current?.value || ''
  const newCoinsList = coins.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()))
  setCoinsList(newCoinsList)
}

  return (
    <main>
      <h1>Lista de criptomonedas</h1>
      <input type="text" placeholder="Buscar criptomoneda" ref={searchInput} onChange={handleSearch}/>
      <div>
        {coinsList.map(coin => (
          <Coin 
            key={coin.order}
            order={coin.order}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.price}
            priceChange={coin.priceChange}
            code={coin.code}
          />
        ))}
      </div>
    </main>
  )
}
export default App