import Image from 'next/image'
import React from 'react'
import styles2 from "../../styles/Landing.module.css"
import styles from "../../styles/About.module.css"
import jgec from "../../public/assets/jgec_mentor-1.png"
import milan from "../../public/assets/milan.png"
import ashray from "../../public/assets/ashray.png"
import h4b from "../../public/assets/h4b.png"

const Achievement_mob4 = () => {
    return (
        <>



            <div id="carouselExampleControls4" className={`carousel slide ${styles.carouselparent}`} data-bs-ride="carousel">
                <div className={`carousel-inner`}>
                    <div className={`carousel-item active ${styles.carouselitem}`}>
                        <Image src={h4b} alt="skillset" width={400} height={260} className={`d-block w-100 ${styles.ghworkshopimg_mob}`} />
                    </div>
                    <div className={`carousel-item  ${styles.carouselitem}`}>
                        <Image src={ashray} alt="skillset" width={400} height={260} className={`d-block w-100 ${styles.ghworkshopimg_mob}`} />

                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <br />

            <p className={styles.landing_heythere2} style={{ textAlign: "center" }}>

                Hack4Bengal : Most creative use of GitHub award, HashDefine : Top 25 project out of 150.<br />


            </p>


        </>
    )
}

export default Achievement_mob4