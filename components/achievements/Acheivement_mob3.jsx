import Image from 'next/image'
import React from 'react'
import styles2 from "../../styles/Landing.module.css"
import styles from "../../styles/About.module.css"
import and1 from "../../public/assets/and1.JPG"
import and2 from "../../public/assets/and2.JPG"
import jgec from "../../public/assets/jgec_mentor-1.png"
import milan from "../../public/assets/milan.png"

const Achievement_mob3 = () => {
    return (
        <>



            <div id="carouselExampleControls3" className={`carousel slide ${styles.carouselparent}`} data-bs-ride="carousel">
                <div className={`carousel-inner`}>
                    <div className={`carousel-item active ${styles.carouselitem}`}>
                        <Image src={jgec} alt="skillset" width={400} height={260} className={`d-block w-100 ${styles.ghworkshopimg_mob}`} />
                    </div>
                    <div className={`carousel-item  ${styles.carouselitem}`}>
                        <Image src={milan} alt="skillset" width={400} height={260} className={`d-block w-100 ${styles.ghworkshopimg_mob}`} />

                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <br />

            <p className={styles.landing_heythere2} style={{ textAlign: "center" }}>

                JWOC 2k22 : Best mentor award, and most contributed project : MILAN which had 90+ issues and 23 collaborators all over India<br />


            </p>


        </>
    )
}

export default Achievement_mob3