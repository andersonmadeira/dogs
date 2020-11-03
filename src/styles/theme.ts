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
