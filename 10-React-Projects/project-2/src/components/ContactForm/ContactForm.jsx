import React, { useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import styles from './ContactForm.module.css'
import Button from '../Button/Button'


const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
 



    const onSubmition = (event) => {
        event.preventDefault();

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)
    }
    return (
    <section className={styles.container}>        
        <div className={styles.contactform}>
            <div className={styles.topbtn}>
            <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessageSquareDetail/>}/>

            <Button text="VIA CALL"  icon={<IoIosCall />}/>
            </div>
            <Button
            differentbutton={true}
            text="VIA EMAIL FORM" icon={<MdEmail />}/>
            
            <form
            onSubmit = {onSubmition}>
    
                <div className={styles.form_controller}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                </div>

                <div className={styles.form_controller}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
                </div>

                <div className={styles.form_controller}>
                <label htmlFor="text">Text</label>
                <textarea name="name" rows="8"/>
                </div>


              <div style={{display: "flex", justifyContent:"end"}}>  <Button text="Submit"/></div>
              <div>
                {name + " " + email + " " + text}
              </div>
            </form>
        </div>
        

        <div className={styles.contactimage}><img src="../public/images/Service 24_7-pana 1.svg" alt="" /></div>
        
    </section>
  )
}

export default ContactForm