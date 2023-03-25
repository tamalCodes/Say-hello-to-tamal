/* https://drive.google.com/file/d/1N6SaRyXLIb9117wbCjlBiqOoadYAKzOw/view?usp=sharing */

/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';

const Resume = () => {
    document.title = "Tamal's resume";
    useEffect(() => {
        if (window.location.pathname === '/resume') {
            setTimeout(() => {
                window.location.href = 'https://drive.google.com/file/d/1N6SaRyXLIb9117wbCjlBiqOoadYAKzOw/view?usp=sharing';
            }, 2000);
        }
    }, []);

    return (
        <>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', justifyItems: 'center', fontWeight: '600', fontFamily: 'sans-serif', fontSize: '3rem', height: '100vh' }}>
                <p> Loading tamal's resume 🚀 </p>
            </div>

        </>
    );
};

export default Resume;
