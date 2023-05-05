/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';

const Resume = () => {
    document.title = "Tamal's resume";
    useEffect(() => {
        if (window.location.pathname === '/resume') {
            setTimeout(() => {
                window.location.href = 'https://drive.google.com/file/d/1xRnyQB1KsF6fZSbgHsqHfTtaomsLih07/view?usp=sharing';
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
