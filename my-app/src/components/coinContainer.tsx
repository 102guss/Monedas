import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { COINGECKO_API_KEY, URL_API, URL_COINS } from "../constants/api"
import type { CoinDetailInterface } from "../interfaces/Coin"

const formatUsd = (value: number, compact = false) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 2 : value >= 1 ? 2 : 6,
  }).format(value)

const formatSupply = (value: number) =>
  new Intl.NumberFormat("es-ES", { notation: "compact", maximumFractionDigits: 2 }).format(value)

const formatPercent = (value: number) =>
  `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("es-ES", { dateStyle: "medium", timeStyle: "short" }).format(new Date(date))

const changeColor = (value: number) => (value >= 0 ? "text-emerald-600" : "text-red-600")

const Stat = ({
  label,
  value,
  change,
}: {
  label: string
  value: string
  change?: number
}) => (
  <div className="bg-white p-4">
    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{label}</p>
    <p className="mt-1 text-lg font-semibold text-gray-900">{value}</p>
    {change !== undefined && (
      <p className={`mt-0.5 text-sm ${changeColor(change)}`}>{formatPercent(change)}</p>
    )}
  </div>
)

const CoinContainer = () => {
  const [coin, setCoin] = useState<CoinDetailInterface | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`${URL_API}${URL_COINS}&x_cg_demo_api_key=${COINGECKO_API_KEY}&ids=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCoin(data[0])
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error al obtener los datos:", err)
        setError("Error al obtener los datos")
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div className="bg-white rounded-lg px-4 py-12 text-center text-gray-600">Cargando...</div>
  }

  if (error || !coin) {
    return (
      <div className="bg-white rounded-lg px-4 py-12 text-center text-gray-600">
        {error ?? "Moneda no encontrada"}
      </div>
    )
  }

  const priceChange = coin.price_change_percentage_24h

  return (
    <div className="space-y-4">
      <Link to="/" className="text-sm text-[#2B2159] hover:underline">
        ← Volver al listado
      </Link>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex flex-wrap items-center gap-4 p-6 border-b border-gray-200">
          <img src={coin.image} alt={coin.name} className="w-14 h-14 rounded-full" />
          <div className="flex-1 min-w-[12rem]">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">{coin.name}</h1>
              <span className="rounded-full bg-[#2B2159] px-2.5 py-0.5 text-xs font-medium text-white">
                #{coin.market_cap_rank}
              </span>
            </div>
            <p className="text-sm uppercase text-gray-500">{coin.symbol}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-gray-900">{formatUsd(coin.current_price)}</p>
            <p className={`text-sm font-medium ${changeColor(priceChange)}`}>
              {formatPercent(priceChange)} (24h)
            </p>
            <p className={`text-xs ${changeColor(coin.price_change_24h)}`}>
              {formatUsd(coin.price_change_24h)} hoy
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200">
          <Stat
            label="Capitalización"
            value={formatUsd(coin.market_cap, true)}
            change={coin.market_cap_change_percentage_24h}
          />
          <Stat label="Volumen 24h" value={formatUsd(coin.total_volume, true)} />
          <Stat label="Máx. 24h" value={formatUsd(coin.high_24h)} />
          <Stat label="Mín. 24h" value={formatUsd(coin.low_24h)} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border-t border-gray-200">
          <div className="bg-white p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Oferta</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">En circulación</dt>
                <dd className="font-medium text-gray-900">
                  {formatSupply(coin.circulating_supply)} {coin.symbol.toUpperCase()}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Suministro total</dt>
                <dd className="font-medium text-gray-900">
                  {formatSupply(coin.total_supply)} {coin.symbol.toUpperCase()}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Suministro máximo</dt>
                <dd className="font-medium text-gray-900">
                  {coin.max_supply != null
                    ? `${formatSupply(coin.max_supply)} ${coin.symbol.toUpperCase()}`
                    : "—"}
                </dd>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <dt className="text-gray-500">Val. diluida</dt>
                <dd className="font-medium text-gray-900">{formatUsd(coin.fully_diluted_valuation, true)}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Histórico</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">ATH</dt>
                <dd className="text-right">
                  <span className="font-medium text-gray-900">{formatUsd(coin.ath)}</span>
                  <span className={`block text-xs ${changeColor(coin.ath_change_percentage)}`}>
                    {formatPercent(coin.ath_change_percentage)}
                  </span>
                  <span className="block text-xs text-gray-400">{formatDate(coin.ath_date)}</span>
                </dd>
              </div>
              <div className="flex justify-between gap-4 pt-2 border-t border-gray-100">
                <dt className="text-gray-500">ATL</dt>
                <dd className="text-right">
                  <span className="font-medium text-gray-900">{formatUsd(coin.atl)}</span>
                  <span className={`block text-xs ${changeColor(coin.atl_change_percentage)}`}>
                    {formatPercent(coin.atl_change_percentage)}
                  </span>
                  <span className="block text-xs text-gray-400">{formatDate(coin.atl_date)}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="px-6 py-3 text-xs text-gray-400 border-t border-gray-100">
          Última actualización: {formatDate(coin.last_updated)}
        </p>
      </div>
    </div>
  )
}

export default CoinContainer
