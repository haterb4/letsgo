import { Provider, useDispatch } from 'react-redux'
import { wrapper } from '@/store/store'
import { getTrips } from '@/store/features/trips'
import { getDrivers } from '@/store/features/drivers'
import { getVehicles } from '@/store/features/vehicles'
import '@/app/globals.css'
import { useEffect } from 'react'

export default function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  useEffect(()=>{
    store.dispatch(getTrips())
    store.dispatch(getDrivers())
    store.dispatch(getVehicles())
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}