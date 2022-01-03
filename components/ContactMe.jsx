import classes from './contactMe.module.css'
import Link from 'next/link'
const ContactMe = () => {
    return (
        <div className={classes.main} id="contact">
            <h5 className={classes.small}><span className={classes.span}>04.</span>What's Next?</h5>
            <h1 className={classes.title}>Contact Me</h1>
            <p className={classes.paragraph}>
                I`m currently looking for any new opportunities, my inbox is always open.
                Whether you have a question,
                you have an opportunity for me or just want to say hi, I`ll get back to you as soon as possible!
            </p>
            <button className={ classes.btn }>
                <Link href={"mailto: jay.haji041@gmail.com"} target="_blank">
                    <a target="_blank" rel="noopener noreferrer">
                       Get In Touch 
                    </a>
                </Link>
                
            </button>
        </div>
    )
}

export default ContactMe
