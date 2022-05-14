import Image from 'next/image'
import React from 'react'
import styles2 from "../../styles/Landing.module.css"
import styles from "../../styles/About.module.css"
import g1 from "../../public/assets/gitgh.jpg"
import g2 from "../../public/assets/gitgh2.jpg"

const Achievement_mob = () => {
    return (
        <>

            <p className={styles2.landing_heythere}>What else have i done ?</p>
            <p className={styles.landing_heythere2}>

                I&apos;ve been doing some fun stuffs through out my first and second year!!<br />


            </p>

            <br />

            <div id="carouselExampleControls" className={`carousel slide ${styles.carouselparent}`} data-bs-ride="carousel">
                <div className={`carousel-inner`}>
                    <div className={`carousel-item active ${styles.carouselitem}`}>
                        <Image src={g1} alt="skillset" width={400} height={260} className={`d-block w-100 ${styles.ghworkshopimg_mob}`} />
                    </div>
                    <div className={`carousel-item  ${styles.carouselitem}`}>
                        <Image src={g2} alt="skillset" width={400} height={260} className={`d-block w-100 ${styles.ghworkshopimg_mob}`} />

                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <br />

            <p className={styles.landing_heythere2} style={{ textAlign: "center" }}>

                Conducted offline workshop on Git and GitHub, under DSC UEMK with 150+ participants.<br />


            </p>


        </>
    )
}

export default Achievement_mob