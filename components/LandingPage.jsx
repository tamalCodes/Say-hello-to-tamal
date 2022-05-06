import React from 'react'
import styles from "../styles/Landing.module.css"
import Image from "next/image"
import pimg from "../public/assets/mobport.svg"
import pimg2 from "../public/assets/tamalport1.png"
import Navbar from './Navbar'
import Link from 'next/link'

const LandingPage = () => {
    return (
        <div className={styles.parent}>

            <div className={styles.navbardiv}>
                <Navbar />
            </div>

            <div className={`container ${styles.parentDesktop}`}>
                <div className="row">

                    <div className={`col-8`}>
                        <div className={styles.landingheydesktop}>

                            <div className={styles.landing_navbar}>
                                <p className={styles.navlink1}>Projects</p>
                                <p className={styles.navlink2}>About me</p>
                                <p className={styles.navlink3}>Contact me</p>
                            </div>

                            <p className={styles.landing_heythere}>Hey there, <br /> I&apos;m Tamal</p>

                            <p className={styles.landing_heythere2}>A passionate Web developer from India, <br /> contributing to open source and connecting communities !!  <br /> <br /> Look at my projects, know more about to me and feel free to reach out !!  </p>

                            <button className={`btn btn-warning ${styles.explorebtn}`}>
                                Explore &gt;
                            </button>
                        </div>
                    </div>

                    <div className={`col-4`}>
                        <div className={styles.landing_imgdiv}>


                            <Image src={pimg2} width={350} height={350} alt="portfolio" className={styles.portfolioimg} />



                        </div>
                    </div>

                </div>
            </div>










            <div className={styles.landing_imgdiv2}>

                <p className={styles.landing_heythere}>Hey there, <br /> I&apos;m Tamal</p>

                <p className={styles.landing_heythere2}>I design beautifully simple things, <br /> And I love what i do.</p>

                <Image src={pimg} width={350} height={350} alt="twitterdp" className={styles.portfolioimg_mob} />



            </div>





        </div>
    )
}

export default LandingPage