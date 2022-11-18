import styled, { css } from 'styled-components'

export const Base = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      ${theme.colors.primary},
      ${theme.colors.soft_blue}
    );
    width: 100%;
    height: 100vh;
  `}
`
export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
  `}
`

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 0.3rem solid gray;
  padding-bottom: 2rem;
`
