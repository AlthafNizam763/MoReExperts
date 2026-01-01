import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-bottom">
                    {/* Big Logo / Text */}
                    <div className="big-logo">
                        <span>MoRe Experts</span>
                    </div>

                    <div className="legal-links">
                        <a href="#">TERMS OF USE</a>
                        <a href="#">PRIVACY POLICY</a>
                        <a href="#">SECURITY</a>
                        <span className="copyright">© MoRe Experts {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-section {
                    background-color: #050505;
                    color: #ffffff;
                    padding: 80px 0 40px;
                    border-top: 1px solid #222;
                    font-family: 'Inter', sans-serif;
                }

                .container {
                    width: 90%;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .footer-bottom {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                }

                .big-logo {
                    font-size: clamp(4rem, 15vw, 12rem);
                    font-weight: 600;
                    line-height: 0.8;
                    color: #e6dfd6; /* Maintain reference style color */
                    letter-spacing: -4px;
                }

                .legal-links {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    font-size: 0.75rem;
                    color: #666;
                    text-transform: uppercase;
                    text-align: right;
                    padding-bottom: 10px; /* Align with bottom of text */
                }

                .legal-links a {
                    color: #666;
                    text-decoration: none;
                }
                
                .legal-links a:hover {
                    color: #999;
                }

                .copyright {
                    margin-top: 16px;
                    color: #444;
                }

                @media (max-width: 900px) {
                    .footer-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 40px;
                    }

                    .legal-links {
                        text-align: left;
                    }
                    
                    .big-logo {
                        order: 2;
                        width: 100%;
                    }
                }

                @media (max-width: 600px) {
                    .footer-section {
                        padding: 60px 0 30px;
                    }

                    .big-logo {
                        font-size: 18vw; /* Make it even larger relative to screen width on mobile if needed, or keep clamp */
                        letter-spacing: -2px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
