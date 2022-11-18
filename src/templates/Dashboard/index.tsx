import Button from 'components/Button'
import Card from 'components/Card'
import Header from 'components/Header'
import Table from 'components/Table'
import { useEffect, useState } from 'react'
import * as S from './styles'

export default function Dashboard() {
  const [transactions, setTransactions] = useState()

  return (
    <S.Base>
      <Header></Header>
      <S.Main>
        <Card>
          <S.ButtonBox>
            <Button styleButton={'buttonRectangular'}>TRANSAÇÕES</Button>
            <Button styleButton={'buttonRectangular'} color="yellow">
              FAZER TRANSAÇÃO
            </Button>
          </S.ButtonBox>

          <Table></Table>
        </Card>
      </S.Main>
    </S.Base>
  )
}
