import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

export type Theme = {
  typography: {
    primary: string
    secondary: string
  }
}

export const defaultTheme: Theme = {
  typography: {
    primary: 'Helvetica, Arial, sans-serif',
    secondary: "'Spectral', Georgia",
  },
}

export const GlobalStyles: React.FC = () => {
  const theme = useTheme<Theme>()

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0px;
          color: #333;
          padding-top: 4rem;
          font-family: ${theme.typography.primary};
        }

        h1,
        h2,
        h3,
        h4,
        p {
          margin: 0;
        }

        ul,
        li {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        img {
          display: block;
          max-width: 100%;
        }

        button,
        input {
          display: block;
          font-size: 1rem;
          color: #333;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  )
}

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`
