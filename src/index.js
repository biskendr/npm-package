import React from 'react'
import styles from './styles.module.css'

//create primary, default and dotted button designs components by class name
export const ButtonPrimary = (props) => {
  return <button className={`${styles.btn} ${styles.primary}`} {...props}>{props.text}</button>
}
export const ButtonDefault = (props) => {
  return <button className={`${styles.btn} ${styles.default}`} {...props}>{props.text}</button>
}
export const ButtonDotted = (props) => {
  return <button className={`${styles.btn} ${styles.dotted}`} {...props}>{props.text}</button>
}