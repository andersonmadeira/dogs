import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    color: #333;
    padding-top: 4rem;
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
`

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`