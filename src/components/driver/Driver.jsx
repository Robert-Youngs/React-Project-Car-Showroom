import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Drive} alt='/'></img>
        </div>
        <div className={styles.right}>
            <h2>Find your perfect car <span>to try before you buy</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis semper erat at semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam gravida leo eu ex bibendum, ut consectetur libero interdum. Morbi in lectus vitae nisi malesuada imperdiet sed ac diam.</p>
            <button>Browser Cars</button>
        </div>
    </div>
  )
}

export default Driver