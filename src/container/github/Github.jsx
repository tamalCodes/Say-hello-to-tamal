import React, { useEffect } from 'react'
import github from "../../assets/github/carbon.png"

const Github = () => {
    document.title = "Tamal's GitHub";
    useEffect(() => {
        if (window.location.pathname === '/github') {
            setTimeout(() => {
                window.location.href = 'https://github.com/IAmTamal';
            }, 700);
        }
    }, []);
    return (
        <>
            <div className='externalpage' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', justifyItems: 'center', fontWeight: '600', fontFamily: 'sans-serif', fontSize: '3rem', height: '100vh' }}>
                {/* <p> - git add Tamal 🚀 </p> */}

                <img src={github} alt="" />

                <p>Loading Tamal's GitHub 🚀</p>
            </div>

        </>
    )
}

export default Github