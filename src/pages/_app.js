import { Provider } from 'react-redux'
import { wrapper } from '@/store/store'
import { getTrips } from '@/store/features/trips'
import { getDrivers } from '@/store/features/drivers'
import { getVehicles } from '@/store/features/vehicles'
import '@/app/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import MainLayout from '@/layout/MainLayout'

export default function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  const router = useRouter()

  useEffect(()=>{
    store.dispatch(getTrips())
    store.dispatch(getDrivers())
    store.dispatch(getVehicles())
  }, [])

  let getLayout;

  if(!router.asPath.match(/dashboard/i)){  //Si ce n'est pas une page du dashboard, on utilise MainLayout
    getLayout = (page) => <MainLayout>{page}</MainLayout>;
  }
  // Use the layout defined at the page level, if available
  else getLayout = Component.getLayout || ((page) => page)
 
  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}