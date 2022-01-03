import Image from 'next/image'
import classes from './header.module.css'
import Link from 'next/link'
const Header = () => {

    return (
        <header className={classes.header} id='navbar'>
            <Image
                src={ '/images/mo.png' }
                alt={ 'My Logo' }
                width={ 100 }
                height={ 150 }
                className={classes.logo}
            />
            <nav className={classes.navigation}>
                <ul className={classes.navigationList}>
                    <li className={ classes.navigationListItem }>
                        <Link href='#about'>
                            <a>
                                <span className={ classes.navigationListItemSpan }>01.</span>About  
                            </a>
                        </Link>
                    </li>
                    <li className={ classes.navigationListItem }>
                        <Link href='#exp'>
                            <a>
                                <span className={ classes.navigationListItemSpan }>02.</span>Experiance
                            </a>
                        </Link>
                        
                    </li>
                    <li className={ classes.navigationListItem }>
                        <Link href='#projects'>
                            <a>
                                <span className={ classes.navigationListItemSpan }>03.</span>Projects
                            </a>
                        </Link>
                       
                    </li>
                    <li className={ classes.navigationListItem }>
                        <Link href='#contact'>
                            <a>
                                <span className={ classes.navigationListItemSpan }>04.</span>Contact
                            </a>
                        </Link>
                        
                    </li>
                </ul>
                <button className={ classes.resumeBtn }>
                    <Link href="Mohammad's Resume.pdf">
                        <a>
                            Resume
                        </a>
                    </Link>
                </button>
            </nav>
        </header>
    )
}

export default Header
