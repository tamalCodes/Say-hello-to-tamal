/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';

const Resume = () => {
    document.title = "Tamal's resume";
    useEffect(() => {
        if (window.location.pathname === '/resume') {
            setTimeout(() => {
<<<<<<< HEAD
                window.location.href = 'https://drive.google.com/file/d/1wZTqr5hlDmVqAnbidVrNfNtrdwJnznI3/view?usp=sharing';
=======
                window.location.href = 'https://drive.google.com/file/d/1QmJEv7oN6ebOfuTMgL4wHk42F8dFN3nJ/view?usp=sharing';
>>>>>>> e1e70e9571fa006acbfb70f6604b4c5a7a27b00d
            }, 500);
        }
    }, []);

    return (
        <>
            <div className='externalpage' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', justifyItems: 'center', fontWeight: '600', fontFamily: 'sans-serif', fontSize: '3rem', height: '100vh' }}>
                <p> Loading Tamal's resume 🚀 </p>
            </div>

        </>
    );
};

export default Resume;
