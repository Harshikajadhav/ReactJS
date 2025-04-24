import React from 'react'
import styles from './Button.module.css'

const Button = ({differentbutton, icon, text, ...rest}) => {
  return (
    <div>
        <button
        {...rest}
        className={differentbutton ? styles.outlineButton : styles.primaryButton}>{icon}{text}</button>

    </div>
  )
}

export default Button