import { Provider } from 'react-redux'
import { wrapper } from '@/store/store'
import { getTrips } from '@/store/features/trips'
import { getDrivers } from '@/store/features/drivers'
import { getVehicles } from '@/store/features/vehicles'
import '@/styles/globals.css'
import { useEffect } from 'react'

export default function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  useEffect(()=>{
    store.dispatch(getTrips())
    store.dispatch(getDrivers())
    store.dispatch(getVehicles())
  }, [])

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}