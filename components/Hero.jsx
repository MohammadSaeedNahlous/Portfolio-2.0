import Image from 'next/image'
import classes from './hero.module.css'
const Hero = () => {
    return (
        <div className={classes.main}>
            <div className={ classes.imageContainer }>
                <Image
                    className={ classes.img }
                    src={ '/images/my-pic.JPG' }
                    alt="My Image"
                    width={ 630 }
                    height={ 750 }
                />
            </div>
            <div className={ classes.text }>
                <div className={ classes.textContainer }>
                    <div className={ classes.smallTextContainer }>
                        <h5 className={ classes.smallText }>Hi!, my name is</h5>
                    </div>
                    <div className={ classes.bigTextContainer }>
                        <h1 className={ classes.bigText }>Mohammad Saeed Nahlous.</h1>
                        
                        <h1 className={ classes.bigText }>I create stuff for the web.</h1>
                    </div>
                    <div className={ classes.infoTextContainer }>
                        <p>
                            I'm a software engineer specializing in web development especially ReactJs.
                            Currently, I'm Self-Employed, focused on building my experience,
                            and looking for my next job opportunity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
