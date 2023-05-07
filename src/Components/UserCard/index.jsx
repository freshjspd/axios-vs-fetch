import React from 'react'
import styles from './UserCard.module.css';

export default function UserCard(props) {
  const {user:{name, email, picture}, index} = props;
  return (
    <li key={index}>
        <article className={styles.card}>
            <div className={styles.imgContainer} >
                <img src={picture.large} alt="photo" />
            </div>
            <h2>{name.first} {name.last}</h2>
            <h5>email: {email}</h5>
        </article>
    </li>
  )
}
