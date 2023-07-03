/**
 * Importamos nuestro archivo de CSS en la línea de abajo.
 * El archivo de CSS corresponde a la barra de navegación del tutorial. Descargué de ahí.
 * Vamos a importar para usarlo.
 */
import stylesAlex from '../../styles/Navbar.module.css'

/**
 * En pocas palabras, usamos este hook para ver cosas de rutas. Para más información, se puede
 * ver la documentación.
 * - Hook
 * Esencialmente, es un lugar en el código que le permite aprovechar un módulo para proporcionar 
 * un comportamiento diferente o para reaccionar cuando algo sucede.
 */
import {useRouter} from 'next/router'

/**
 * Link de NextJS.
 * Un ejemplo claro del Link de NextJS, es que si se usa la etiqueta <a>, toda la página se vuelve
 * a recargar mientras se navegan en ellas. Si se usa Link, no se hace esa recarga. Se puede quitar
 * el Link y probar con la etiqueta <a> para experimentar.
 * - Link de NextJS
 * Some of these features include preloading page content and faster navigation since routing 
 * is handled with JavaScript.
 * In addition, client-side navigation with the Link component does not involve full page reloads, 
 * which is very significant in application performance and user experience.
 */
import Link from 'next/link'

/**
 * Creamos un Componente React (rafce) que se llame "Navbar".
 * rafce es React Component Utilizing an Arrow Function.
 * Para usar una clase de CSS, se utiliza "className". Fijarse que estos se encuentran en el archivo
 * CSS que importamos (.../styles/Navbar.modules.css).
 */
const Navbar = () => {

    // Acá uso el router
    const router = useRouter();

    // Para ver información de lo que contiene el router
    //console.log(router)

    // Retornar
    return (

        <div className={stylesAlex.topnav}>

            <Link href="/" className={router.pathname == "/" ? stylesAlex.active : ''}>
                Home
            </Link>
            
            <Link href="/users" className={router.pathname == "/users" ? stylesAlex.active : ''}>
                Users
            </Link>
            
        </div>

    )
    
}

export default Navbar