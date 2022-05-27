import React from 'react'
import styles from './Button.module.css'

const Button = ({ btnDisabled, btnText, btnOnClick }) => {
    return (
        <button disabled={btnDisabled} className={styles.primary} onClick={btnOnClick}>
            {btnText}
        </button>
    )
}

export default Button
