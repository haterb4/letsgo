import '@/app/globals.css'
import { store } from '@/app/store'
import { Provider } from "react-redux"
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}