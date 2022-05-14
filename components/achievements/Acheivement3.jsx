import React, { useState } from 'react'
import styles from "../../styles/Achievement.module.css"
import jgec from "../../public/assets/jgec_mentor-1.png"
import milan from "../../public/assets/milan.png"
import Image from "next/image"
import { Button, Modal } from 'react-bootstrap'

const Acheivement3 = () => {
    const [lgShow, setLgShow] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    return (
        <>

            <div className={styles.parent2}>



                <div className="row">
                    <div className="col-lg-6">
                        <figure className={styles.hover_img} onClick={() => setLgShow(true)}>
                            <Image src={jgec} alt="fguns" width={550} height={365} />
                            <figcaption>
                                <p>JGEC JWOC : Best opensource mentor award.</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-lg-6">
                        <figure className={styles.hover_img} onClick={() => setLgShow2(true)}>
                            <Image src={milan} alt="fguns" />
                            <figcaption>
                                <p>Milan : Best opensource project, JWOC 2k22.</p>
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
                            JGEC JWOC
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Image src={jgec} alt="fguns" /></Modal.Body>
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
                            Project Milan
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body><Image src={milan} alt="fguns" />
                    </Modal.Body>
                </Modal>




            </div>

        </>
    )
}

export default Acheivement3