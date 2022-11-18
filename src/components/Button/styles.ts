import styled, { css, DefaultTheme } from 'styled-components'

export const Button = styled.button.attrs(() => ({}))`
  ${({ theme, disabled }) => css`
    cursor: pointer;
    text-transform: uppercase;
    align-items: center;
    border: none;
    width: auto;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    opacity: ${disabled ? '0.5' : '1'};
    transition: 0.2s;
    justify-content: center;
    line-height: 2.4rem;
    border-radius: 1rem;
    letter-spacing: 0.5px;
    color: white;
    background-color: ${theme.colors.dark_blue};
    display: flex;
  `}
`
