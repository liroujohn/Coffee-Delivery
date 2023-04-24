import { NavLink } from 'react-router-dom'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import logoCoffee from '../../assets/logoCoffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCard'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/" title="Home">
          <img src={logoCoffee} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" /> São José dos Campos - SP
          </HeaderButton>

          <NavLink to="/checkout" title="Checkout">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
