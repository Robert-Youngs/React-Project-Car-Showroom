import React from 'react'
import styles from './Search.module.css'


const Cards = ({image, make}) => {
  return (
    <div className={styles.card}>
        <img src={image} alt='/' />
        <p>{make}</p>
    </div>
  )
}

export default Cards