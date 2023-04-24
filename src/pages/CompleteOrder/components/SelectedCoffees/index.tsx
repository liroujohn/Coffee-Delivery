import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCard'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffesContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffesContainer>
  )
}
