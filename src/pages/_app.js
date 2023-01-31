import '@/app/globals.css'




export default function MyApp({ Component,  pageProps }) {
  return( <div>

  <Component {...pageProps} />
  
</div>
  )
}