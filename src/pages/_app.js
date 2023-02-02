import '../app/globals.css'
import { wrapper } from '../store/store'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)