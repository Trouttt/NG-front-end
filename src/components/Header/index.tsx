import Button from 'components/Button'
import Title from 'components/Title'
import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.BalanceBox>
        <Title size="medium">TOTAL:</Title>
        <S.Balance>
          <Title size="medium">R$ 4,000.00</Title>
        </S.Balance>
      </S.BalanceBox>

      <Button>Sair</Button>
    </S.Header>
  )
}
