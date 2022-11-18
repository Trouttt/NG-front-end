import * as S from './styles'

interface ListProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
  size?: string
  disabled?: boolean
}
export default function Button({
  children,
  icon,
  disabled,
  type,
  size = '100%',
  ...props
}: ListProps) {
  return (
    <S.Button disabled={disabled} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Button>
  )
}
