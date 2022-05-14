import React, { useState } from 'react'
import styles from "../../styles/Achievement.module.css"
import and1 from "../../public/assets/and1.JPG"
import and2 from "../../public/assets/and2.JPG"
import Image from "next/image"
import { Button, Modal } from 'react-bootstrap'

const Acheivement2 = () => {
    const [lgShow, setLgShow] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    return (
        <>

            <div className={styles.parent2}>



                <div className="row">
                    <div className="col-lg-6">
                        <figure className={styles.hover_img} onClick={() => setLgShow(true)}>
                            <Image src={and2} alt="fguns" />
                            <figcaption>
                                <p>Android Worskhop - Tamal organized an offline app-devlopment workshop with 70+ participants</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-lg-6">
                        <figure className={styles.hover_img} onClick={() => setLgShow2(true)}>
                            <Image src={and1} alt="fguns" />
                            <figcaption>
                                <p>ACM UEMK : Tamal is the WebMaster at ACM UEMk.</p>
                            </figcaption>
                        </figure>
                    </div>



                </div>


                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" className={styles.mt}>
                            Android Worskhop
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Image src={and2} alt="fguns" /></Modal.Body>
                </Modal>



                <Modal
                    size="lg"
                    show={lgShow2}
                    onHide={() => setLgShow2(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" className={styles.mt}>
                            ACM UEMK
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body><Image src={and1} alt="fguns" />
                    </Modal.Body>
                </Modal>




            </div>

        </>
    )
}

export default Acheivement2