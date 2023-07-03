import React from 'react'

/**
 * Importo el componente UserCard para usarlo.
 * <UserCard key={user.id} user={user}/>
 * Había una diferencia entre pages y components.
 * - Pages vs Components
 * Los pages pueden ser rutas y tener acceso a funciones como getStaticProps.
 * Los components pueden ser usados para, en pocas palabras, manejar UI y así.
 * Si no se necesita contar con las funciones especiales de los archivos que se hallan
 * en la carpeta pages (como el enrutamiento automático, o sea, los que tienen los pages), entonces 
 * podría ser conveniente usar los components.
 */
import UserCard from '../comps/UserCard'

/**
 * Importo el estilo para acomodar la lista de usuarios.
 */
import styles from '../../styles/Users.module.css'

/**
 * Static Site Generation.
 * Usamos la función getStaticProps para obtener la lista de usuarios.
 * NextJS va a pre-renderizar esta página en build time usando los props devueltos por 
 * la función getStaticProps.
 */
export const getStaticProps = async () => {

  /**
   * - Fetch
   * La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del 
   * canal HTTP, tales como peticiones y respuestas.
   * El método fetch de la nueva API fetch busca y trae recursos como datos, 
   * imágenes, etc. de otros archivos (fetch significa ir a buscar algo, traer algo).
   * - Await
   * El operador await es usado para esperar a una Promise. 
   * - Promise
   * El objeto Promise representa la eventual finalización (o falla) de 
   * una operación asincrónica y su valor resultante.
   */

  // Obtengo la lista de usuarios de la siguiente API
  const result = await fetch('https://reqres.in/api/users')

  /**
   * Note that despite the method being named json(), the result is not JSON but is instead 
   * the result of taking JSON as input and parsing it to produce a JavaScript object.
   */
  // Lee un JSON y lo transforma a objeto de JavaScript
  const {data} = await result.json()

  // Retornamos el props
  return {
    props: {users: data}
  }

}

/**
 * Mi componente de usuarios.
 * Acá devuelvo la lista de usuarios pre-renderizados en build time por la función getStaticProps.
 */
const Users = ({users}) => {

  // Retornar
  return (

    <div className="container">

      <div className={styles.userlist}>
        {users.map(user => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>

    </div>

  )

}

export default Users