import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h1
                    className="big-title"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    CONTACT US
                </motion.h1>

                <div className="contact-grid">
                    {/* Left Column: Info */}
                    <div className="info-col">
                        <div className="headline">
                            <p>Let's unlock together the next</p>
                            <p>level of possibilities!</p>
                            <p className="highlight">Reach out.</p>
                        </div>

                        <div className="details-grid">
                            <div className="detail-group">
                                <h6>SOCIAL-MEDIA</h6>
                                <div className="social-links">
                                    <a href="#">WHATSAPP</a>
                                    <span>—</span>
                                    <a href="#">INSTAGRAM</a>
                                    {/* <span>—</span>
                                    <a href="#">GITHUB</a>
                                    <span>—</span>
                                    <a href="#">TWITCH</a> */}
                                </div>
                            </div>

                            <div className="detail-group">
                                <h6>GET IN TOUCH</h6>
                                <a href="mailto:hello@basement.studio" className="contact-link">HELLO@BASEMENT.STUDIO</a>
                            </div>

                            <div className="detail-group">
                                <h6>LOCATION</h6>
                                <p>MAR DEL PLATA - ARGENTINA</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="form-col">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <FormInput label="Name" type="text" id="name" />
                            </div>

                            <div className="form-row">
                                <FormInput label="Email" type="email" id="email" />
                            </div>

                            <div className="form-row">
                                <FormInput label="Message" type="text" id="message" isTextArea />
                            </div>

                            <button type="submit" className="submit-btn">
                                <span>SUBMIT</span>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-section {
                    background-color: #050505;
                    color: #ffffff;
                    padding: 60px 0 100px;
                    font-family: 'Inter', sans-serif;
                    overflow: hidden;
                }

                .container {
                    width: 90%;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .big-title {
                    font-size: clamp(3rem, 10vw, 8rem);
                    font-weight: 800;
                    text-transform: uppercase;
                    color: #ffffff;
                    line-height: 0.9;
                    margin-bottom: 60px;
                    text-align: center;
                    letter-spacing: -2px;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    border-top: 1px solid #333;
                    padding-top: 60px;
                }

                /* Info Column Styles */
                .info-col {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 60px;
                }

                .headline p {
                    font-size: clamp(1.2rem, 2.5vw, 2rem);
                    line-height: 1.3;
                    font-weight: 300;
                    color: #e0e0e0;
                    margin: 0;
                }

                .headline .highlight {
                    color: #ffffff;
                    font-weight: 400;
                    margin-top: 10px;
                }

                .details-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }

                .detail-group h6 {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 15px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .social-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    font-size: 0.95rem;
                    text-transform: uppercase;
                }

                .social-links a, .contact-link {
                    color: #fff;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .social-links span {
                    color: #666;
                }
                
                .social-links a:hover, .contact-link:hover {
                    color: #ffffff;
                }

                .detail-group p {
                    text-transform: uppercase;
                    font-size: 0.95rem;
                }

                /* Form Column Styles */
                .form-col {
                    padding-top: 10px;
                }

                .form-row {
                    margin-bottom: 40px;
                }

                .input-group {
                    position: relative;
                    width: 100%;
                }

                .input-field {
                    width: 100%;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid #333;
                    padding: 15px 0;
                    color: #fff;
                    font-size: 1.2rem;
                    outline: none;
                    transition: border-color 0.3s;
                    border-radius: 0;
                }

                .input-field:focus {
                    border-color: #ffffff;
                }

                .input-label {
                    position: absolute;
                    top: 15px;
                    left: 0;
                    color: #666;
                    font-size: 1.2rem;
                    pointer-events: none;
                    transition: all 0.3s ease;
                }

                .input-field:focus ~ .input-label,
                .input-field:not(:placeholder-shown) ~ .input-label {
                    top: -10px;
                    font-size: 0.85rem;
                    color: #999;
                }

                .submit-btn {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: transparent;
                    border: none;
                    border-top: 2px solid #fff;
                    padding-top: 30px;
                    margin-top: 40px;
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .submit-btn span {
                    font-size: 4rem; /* Big Submit Text */
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: -1px;
                }

                .submit-btn:hover {
                    color: #ffffff;
                    border-top-color: #ffffff;
                }

                .submit-btn svg {
                     transition: transform 0.3s;
                }

                .submit-btn:hover svg {
                    transform: translate(5px, -5px);
                }

                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 50px;
                        border: none;
                    }
                    
                    .info-col {
                        order: 2; /* Put info below form on mobile if preferred, or keep above. Image text layout usually implies top-left flow */
                        border-top: 1px solid #333;
                        padding-top: 40px;
                    }

                    .form-col {
                        order: 1;
                    }
                    
                    .submit-btn span {
                        font-size: 2.5rem;
                    }

                    .big-title {
                        margin-bottom: 40px;
                    }
                }

                @media (max-width: 600px) {
                    .contact-section {
                        padding: 40px 0 60px;
                    }

                    .big-title {
                        font-size: clamp(2.5rem, 12vw, 4rem);
                        margin-bottom: 30px;
                    }

                    .headline p {
                        font-size: 1.1rem;
                    }

                    .submit-btn span {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

const FormInput = ({ label, type, id, isTextArea }) => {
    return (
        <div className="input-group">
            {isTextArea ? (
                <textarea
                    id={id}
                    className="input-field"
                    placeholder=" "
                    rows={1}
                    style={{ resize: 'none', overflow: 'hidden' }}
                    onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                ></textarea>
            ) : (
                <input type={type} id={id} className="input-field" placeholder=" " />
            )}
            <label htmlFor={id} className="input-label">{label}</label>
        </div>
    );
};

export default Contact;
