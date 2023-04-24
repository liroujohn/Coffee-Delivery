import { TitleText } from '../../../../components/Typography'
import { Coffees } from '../../../../data/coffee'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>

      <CoffeList>
        {Coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeList>
    </OurCoffeesContainer>
  )
}
