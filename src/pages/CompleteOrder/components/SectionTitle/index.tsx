import { ReactNode } from 'react'
import { SectionTitleConteiner } from './styles'
import { RegularText } from '../../../../components/Typography'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleConteiner>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleConteiner>
  )
}
