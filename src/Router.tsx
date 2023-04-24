import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/CompleteOrder'
import { OrderConfirmed } from './pages/OrderConfirmed'
import { DefautLayout } from './layouts/DefautLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefautLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
