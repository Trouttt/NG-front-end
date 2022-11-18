import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}
export default App
