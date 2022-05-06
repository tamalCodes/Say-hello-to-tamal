import React from 'react'
import styles from "../styles/Landing.module.css"
import Image from "next/image"
import pimg from "../public/assets/mobport.svg"
import pimg2 from "../public/assets/grp5.png"
import Navbar from './Navbar'

const LandingPage = () => {
    return (
        <div className={styles.parent}>

            <Navbar />

            <div className={styles.landing_imgdiv}>


                <Image src={pimg2} width={480} height={520} alt="portfolio" className={styles.portfolioimg} />


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