import * as S from './styles'

export default function Table(props) {
  return (
    <S.Table>
      <S.Tr>
        <S.Th>Valor</S.Th>
        <S.Th>Data de transferência</S.Th>
        <S.Th>Origem</S.Th>
        <S.Th>Destino</S.Th>
      </S.Tr>
      <S.Tr>
        <S.Td>123910241</S.Td>
        <S.Td>name</S.Td>
        <S.Td>tiktok</S.Td>
        <S.Td>tiktok</S.Td>
      </S.Tr>
    </S.Table>
  )
}
