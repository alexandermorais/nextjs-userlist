import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

/** 
 * getStaticPaths
 * Obtenemos la lista de usuarios.
 * Definimos la lista de rutas que se generarán estáticamente. Devuelve para ser procesado por la función
 * getStaticProps.
*/
export const getStaticPaths = async () => {
  
  /**
   * Las siguientes líneas corresponden a la obtención de datos.
   * Están explicadas en otros archivos.
   */
  const res = await fetch('https://reqres.in/api/users')
  const {data} = await res.json()
  const paths = data.map(user => {
    return {
      params: {
        id: user.id.toString()
      }
    }
  })

  // Retornar
  return {
    paths,
    fallback: false
  }

}

/**
 * getStaticProps
 * Para el usuario individual mediante su ID.
 * Va a procesar lo que devuelve getStaticPaths.
 */
export const getStaticProps = async (context) => {
  
  const id = context.params.id
  const res = await fetch('https://reqres.in/api/users/' + id)
  const {data} = await res.json()

  // Retornar
  return {
    props: {user:data}
  }

}

// Componente de detalle
const Detail = ({user}) => {
  
  return (
  <div className="container">
    
    <div className="detail-card">
      <h1>Details of user</h1>
      <Image src={user.avatar} width={200} height={200}/>
      <h3>Full name: {user.first_name} {user.last_name}</h3>
      <h3>Email: {user.email}</h3>
    </div>

    <br></br>
    <Link href="/users" className="button">
      Back to users
    </Link>

  </div>
  )

}

export default Detail