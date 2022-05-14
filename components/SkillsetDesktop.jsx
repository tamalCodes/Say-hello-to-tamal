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
import g1 from "../public/assets/gitgh.jpg"
import g2 from "../public/assets/gitgh2.jpg"
import skillstyle from "../styles/Skillset.module.css"

const SkillsetDesktop = () => {
    return (
        <>




            <div className={skillstyle.parent1}>

                <div className={skillstyle.textdiv}>


                    <p className={skillstyle.whatami}>What am i, <br /> skilled at ?</p>

                    <p className={skillstyle.skilldesc}>

                        Here&apos;s some of them, I&apos;ve been using these in all my remote works, i love making cool stuffs with these and i&apos;m already learning more !! <br /> <br />
                        You can checkout my Open source contributions, and some fun projects i made in my <Link href={"https://github.com/IAmTamal?tab=repositories"} passHref>GitHub.</Link>

                    </p>


                </div>


                <div className={skillstyle.imagediv}>

                    <Image src={skill} alt="skillset" width={330} height={330} className={styles.skillset_img} />

                </div>
            </div>
        </>
    )
}

export default SkillsetDesktop