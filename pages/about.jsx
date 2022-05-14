import React from 'react'
import styles2 from "../styles/Landing.module.css"
import styles from "../styles/About.module.css"
import Image from "next/image"
import pimg from "../public/assets/tamalabt_mob.png"
import pimg2 from "../public/assets/tamalport1.png"
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Head from "next/head"
import tdabt from "../public/assets/tdabt.png"
import skill from "../public/assets/skilllogo_mob.svg"

import SkillsetDesktop from '../components/SkillsetDesktop'
import Acheivement1 from '../components/achievements/Acheivement1'
import Acheivement2 from '../components/achievements/Acheivement2'
import Acheivement3 from '../components/achievements/Acheivement3'
import Achievement_mob from '../components/achievements/Achievement_mob'
import Achievement_mob2 from '../components/achievements/Acheivement_mob2'


const about = () => {
    return (
        <div className={styles2.parent}>

            <Head>
                <title>Portfolio | About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles2.navbardiv}>
                <Navbar />
            </div>

            <div className={`container ${styles2.parentDesktop}`}>
                <div className={`row ${styles.row1}`}>


                    <div className={`col-4`}>
                        <div className={styles.landing_imgdiv}>


                            <Image src={tdabt} width={310} height={310} alt="portfolio" className={styles2.portfolioimg} />



                        </div>
                    </div>

                    <div className={`col-8`}>
                        <div className={styles2.landingheydesktop}>

                            <div className={styles2.landing_navbar}>
                                <Link href={"/projects"} ><p className={styles2.navlink1}>Projects</p></Link>
                                <Link href={"/about"} ><p className={styles2.navlink2}>About me</p></Link>
                                <Link href={"/contact"} ><p className={styles2.navlink3}>Contact me</p></Link>

                            </div>

                            <p className={styles.landing_heythere}>Here&apos;s all, <br /> about me</p>

                            <p className={styles.landing_heythere2}>I&apos;m Tamal Das , a sophomore pursuing BTech in CSE from UEMk. I&apos;m 21, in love with developing new products and being active in all dev communities.

                                I love watching animes, travelling to places and just spending time with friends and families !!  </p>

                            <br />






                        </div>
                    </div>



                </div>

                {/* <hr className={styles.abthr} /> */}

                <SkillsetDesktop />
                <Acheivement1 />
                <Acheivement2 />
                <Acheivement3 />

            </div>






            {/* //* TOTALLY FOR MOBILE  */}



            <div className={styles2.landing_imgdiv2}>

                <p className={styles2.landing_heythere}>Here&apos;s all, <br /> about me</p>

                <p className={styles.landing_heythere2}>

                    I am Tamal Das, a 21 year old sophomore pursuing Bachelors in CSE from UEM, Kolkata. <br />

                </p>

                <Image src={pimg} width={350} height={350} alt="twitterdp" className={styles2.portfolioimg_mob} />

                <br />
                <hr className={styles.abthr} />
                <br />
                <br />
                <p className={styles2.landing_heythere}>What am i, <br /> skilled at ?</p>
                <p className={styles.landing_heythere2}>

                    Here&apos;s some of them, i love making cool stuff with these and i am already learning more !! <br />

                </p>
                <br />
                <Image src={skill} alt="skillset" width={300} height={300} />

                <br />
                <hr className={styles.abthr} />
                <br />
                <br />

                <Achievement_mob />
                <Achievement_mob2 />


            </div>





        </div>
    )
}

export default about