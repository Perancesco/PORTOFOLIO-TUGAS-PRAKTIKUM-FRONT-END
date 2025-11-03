'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top p-3">
                    <div className="container-fluid">
                        <div>
                            <a className="logo" href="#home">Francesco <span>Alexander</span></a>
                            <p className="nim">535240156</p>
                        </div>
                        <button 
                            className="navbar-toggler"
                            type="button" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-controls="navbarNav"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section className="home d-flex align-items-center" id="home">
                    <div className="container">
                        <div className="row align-items-center g-5 flex-column-reverse flex-lg-row">
                            <div className="col-lg-7 home-content text-center text-lg-start">
                                <h1 className="display-3 fw-bold">Hi, Its <span>Francesco</span></h1>
                                <h3 className="text-animation my-3 mx-auto mx-lg-0">I am <span></span></h3>
                                <p className="lead">Halo Nama Saya Francesco Alexander, bisa dipanggil Fran, Umur saya adalah 18 tahun, saya suka belajar dan membaca buku, hobi utama saya yaitu coding menciptakan aplikasi-aplikasi random.</p>
                                <div className="btn-group flex-wrap justify-content-center mt-4" role="group">
                                    <a href="https://drive.google.com/file/d/1j_olyeD7rhpP-wOmiVeWogC-SW78W81G/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-main rounded-pill px-4 py-2 m-2">My CV</a>
                                    <a href="https://drive.google.com/file/d/1Es-v34O9HCAqxtGkFtYS2rDjMqVtPY-Q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-hire rounded-pill px-4 py-2 m-2">Hire Me</a>
                                    <a href="https://drive.google.com/file/d/1W3Vc60p1bW1sEl1lRUh7ZOjegsf3el1G/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-main rounded-pill px-4 py-2 m-2">Contact Me</a>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center home-img">
                                <Image src="/fotogw.jpg" alt="Francesco GG" width={400} height={400} className="img-fluid rounded-circle" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section id="education" className="d-flex align-items-center py-5" style={{minHeight: '100vh', background: 'var(--second-bg-color)'}}>
                    <div className="container">
                        <h1 className="text-center display-4 mb-5 fw-bold">My <span>Education</span></h1>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="card text-white h-100" style={{backgroundColor: '#383737'}}>
                                    <div className="card-body text-center p-4">
                                        <h3 className="card-title">Kuliah</h3>
                                        <p className="card-text">Universitas Tarumanegara - FTI</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card text-white h-100" style={{backgroundColor: '#383737'}}>
                                    <div className="card-body text-center p-4">
                                        <h3 className="card-title">SMA</h3>
                                        <p className="card-text">Santa Maria Della Strada - MIPA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card text-white h-100" style={{backgroundColor: '#383737'}}>
                                    <div className="card-body text-center p-4">
                                        <h3 className="card-title">SMP</h3>
                                        <p className="card-text">Van Lith - Swasta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="d-flex align-items-center py-5" style={{minHeight: '100vh'}}>
                    <div className="container text-center">
                        <h1 className="text-center display-4 mb-5 fw-bold">Contact <span>Me</span></h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div style={{background: 'var(--second-bg-color)'}} className="p-4 p-md-5 rounded-3">
                                    <p className="lead mb-4">
                                        Berikut Media Sosial Saya, dapat dipencet dan juga akan redirect
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center flex-wrap mb-5">
                                        <div className="d-flex align-items-center mx-3 my-2">
                                            <i className='bx bxs-envelope fs-2 me-2' style={{color: 'var(--main-color)'}}></i>
                                            <span className="fs-5">francesco.535240156@stu.untar.ac.id</span>
                                        </div>
                                        <div className="d-flex align-items-center mx-3 my-2">
                                            <i className='bx bxs-phone fs-2 me-2' style={{color: 'var(--main-color)'}}></i>
                                            <span className="fs-5">+62 123-4567-8910</span>
                                        </div>
                                    </div>

                                    <div className="social-icons my-4 justify-content-center">
                                        <a href="https://www.instagram.com/francesco.alx/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                                        <a href="https://github.com/Perancesco" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
                                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}