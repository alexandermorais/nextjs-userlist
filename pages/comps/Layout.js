/**
 * Importamos nuestro Navbar acá. Creo que es de Navbar.js
 * Este va a ser nuestro layout. Es como una maqueta. Creo que este concepto es parecido al de 
 * Laravel.
 */
import Navbar from './Navbar'

/**
 * En "<Navbar />" usamos el Navbar que creamos en Navbar.js, y después vienen los otros componentes
 * que corresponderían a "children".
 */
const Layout = ( {children} ) => {
  
  // Retornar
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )

}

export default Layout