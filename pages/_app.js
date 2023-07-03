import '@/styles/globals.css'

// Importamos nuestro layout
import Layout from './comps/Layout'

/**
 * En las líneas de abajo usamos el layout que creamos.
 * También se tienen los componentes.
 */
export default function App({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
