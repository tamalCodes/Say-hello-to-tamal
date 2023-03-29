import React, { useEffect } from 'react';

const Milan = () => {
    document.title = "Milan | Home";
    useEffect(() => {
        if (window.location.pathname === '/milan') {
            setTimeout(() => {
                window.location.href = 'https://milaan.vercel.app/';
            }, 800);
        }
    }, []);
    return (
        <>
            <div
                className="externalpage"
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    justifyItems: 'center',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                    fontSize: '3rem',
                    height: '100vh',
                }}
            >
                <p>
                    {' '}
                    We are <br /> connecting Help and Need {' '}
                </p>

                <br />

                <p>💙</p>
            </div>
        </>
    );
};

export default Milan;
