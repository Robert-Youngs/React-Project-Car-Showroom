import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury Selection</h2>
            <div className={styles.text_bg}>
                <p>
                    <span>Select from the top luxury vehicles to roll in style</span>
                </p>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1566840889008-bba7d0656c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>VW Van</h3>
                </div>
            </div>

            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1566840889008-bba7d0656c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>VW Van</h3>
                </div>
            </div>

            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1566840889008-bba7d0656c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>VW Van</h3>
                </div>
            </div>

            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1566840889008-bba7d0656c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>VW Van</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Luxury