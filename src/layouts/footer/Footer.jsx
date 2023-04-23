import React from 'react'
// import styles
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
        <footer className={s.footer} style={{width: "100%", height: "91px", backgroundColor: "black", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p className={s.footer__text}>Zefir Front-end {new Date().getFullYear()}</p>
        </footer>
    </>
  )
}

export default Footer