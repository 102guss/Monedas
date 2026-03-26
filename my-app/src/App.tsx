import Coin from './components/Coin'
import coins from './data/coins'
import { useRef, useState } from 'react'
import type { CoinInterface } from './interfaces/Coin'
import Header from './components/Header'

const App = () => {
  const [coinsList, setCoinsList] = useState<CoinInterface[]>(coins)
  const searchInput = useRef<HTMLInputElement>(null)

const handleSearch = () => {
  const searchValue = searchInput.current?.value || ''
  const newCoinsList = coins.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()))
  setCoinsList(newCoinsList)
}

  return (
    <Header />
   
  )
}
export default App