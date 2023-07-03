import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Importo el archivo CSS para los hacer los card de usuarios.
 * 
 */
import styles from '../../styles/Card.module.css'

const UserCard = ({user}) => {
  
  // Retornar
  return (
    <div className={styles.card}>

      <Image src={user.avatar} alt="Avatar" width={200} height={200}/>

      <div className={styles.container}>

        <h4><b>{user.first_name} {user.last_name}</b></h4> 

        <p>{user.email}</p> 

        <Link className="button" href={`/users/${user.id}`}>
          Details
        </Link>

      </div>

    </div>
  )

}

export default UserCard