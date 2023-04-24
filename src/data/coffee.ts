import Expresso from '../assets/Expresso.svg'
import Americano from '../assets/Americano.svg'
import ExpressoCremoso from '../assets/ExpressoCremoso.svg'
import CaféGelado from '../assets/CaféGelado.svg'
import CaféComLeite from '../assets/CaféComLeite.svg'
import Latte from '../assets/Latte.svg'
import Capuccino from '../assets/Capuccino.svg'
import Macchiato from '../assets/Macchiato.svg'
import Mochaccino from '../assets/Mochaccino.svg'
import ChocolateQuente from '../assets/ChocolateQuente.svg'
import Cubano from '../assets/Cubano.svg'
import Havaiano from '../assets/Havaiano.svg'
import Árabe from '../assets/Árabe.svg'
import Irlandês from '../assets/Irlandês.svg'

export const Coffees = [
  {
    id: 1,
    svg: Expresso,
    tags: ['TRADICIONAL'],
    name: 'Espresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 6.0,
  },
  {
    id: 2,
    svg: Americano,
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 6.0,
  },
  {
    id: 3,
    svg: ExpressoCremoso,
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 7.5,
  },
  {
    id: 4,
    svg: CaféGelado,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 7.5,
  },
  {
    id: 5,
    svg: CaféComLeite,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 6.5,
  },
  {
    id: 6,
    svg: Latte,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 7.0,
  },
  {
    id: 7,
    svg: Capuccino,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.5,
  },
  {
    id: 8,
    svg: Macchiato,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    svg: Mochaccino,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 10.5,
  },
  {
    id: 10,
    svg: ChocolateQuente,
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 11,
  },
  {
    id: 11,
    svg: Cubano,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 13.9,
  },
  {
    id: 12,
    svg: Havaiano,
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 13.9,
  },
  {
    id: 13,
    svg: Árabe,
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 10,
  },
  {
    id: 14,
    svg: Irlandês,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 13.9,
  },
]
