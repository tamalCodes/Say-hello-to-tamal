import React, { useEffect } from 'react'
import twitter from "../../assets/twitter/twitter.svg"

const Twitter = () => {
    document.title = "Tamal's Twitter";
    useEffect(() => {
        if (window.location.pathname === '/twitter') {
            setTimeout(() => {
                window.location.href = 'https://twitter.com/mrTamall';
            }, 800);
        }
    }, []);
    return (
        <>
            <div className='externalpage' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', justifyItems: 'center', fontWeight: '600', fontFamily: 'sans-serif', fontSize: '3rem', height: '100vh' }}>
                {/*  <img src={twitter} alt="" style={{ width: "60%", borderRadius: "15px", marginBottom: "50px" }} /> */}
                <p> Loading Tamal's tweets 🚀 </p>
            </div>

        </>
    )
}

export default Twitter