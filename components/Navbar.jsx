import React, { useContext, useState } from 'react'
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
import nvb from "../public/assets/nvb.png"
import Image from "next/image"


const Navbar = () => {

    const [showdropdown, setshowdropdown] = useState(false);


    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.mainnav}`}>
            <div className="container-fluid">
                <Link href="/" passHref >

                    <div className={styles.brand}>

                        <Image alt='nvb' src={nvb} width={45} height={45} />


                    </div>

                </Link>

                <button className={`navbar-toggler ${styles.navbarbtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ">
                        <Link href={"/"} passHref>
                            <li className={`nav-item ${styles.navlinks}`}>
                                Projects
                            </li>

                        </Link>

                        <Link href={"/about"} passHref>
                            <li className={`nav-item ${styles.navlinks}`}>
                                About me
                            </li>

                        </Link>


                        <li className={`nav-item ${styles.navlinks}`} >
                            Contact me
                        </li>










                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar