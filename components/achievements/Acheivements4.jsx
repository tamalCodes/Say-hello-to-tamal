import React, { useState } from 'react'
import styles from "../../styles/Achievement.module.css"
import ashray from "../../public/assets/ashray.png"
import h4b from "../../public/assets/h4b.png"
import Image from "next/image"
import { Button, Modal } from 'react-bootstrap'

const Acheivement4 = () => {
    const [lgShow, setLgShow] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    return (
        <>

            <div className={styles.parent2}>



                <div className="row">
                    <div className="col-lg-6">
                        <figure className={styles.hover_img} onClick={() => setLgShow(true)}>
                            <Image src={h4b} alt="fguns" width={550} height={365} />
                            <figcaption>
                                <p>JGEC JWOC : Best opensource mentor award.</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-lg-6">
                        <figure className={styles.hover_img} onClick={() => setLgShow2(true)}>
                            <Image src={ashray} alt="fguns" width={600} height={400} />
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
                    <Modal.Body><Image src={h4b} alt="fguns" /></Modal.Body>
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

                    <Modal.Body><Image src={ashray} alt="fguns" />
                    </Modal.Body>
                </Modal>




            </div>

        </>
    )
}

export default Acheivement4