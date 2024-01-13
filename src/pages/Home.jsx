import React from 'react'

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

//import { Card } from 'primereact/card';
const Home = () => {
    /* const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">

        </div>
    ); */
    const navigate = useNavigate();

    const onLogin = () =>{
        navigate("/login")
    }

    const onRegister = () =>{
        navigate("/register");
    }
    return (
        <div>
            <header>
                <h1>Journal Of Textile Association (JTA)</h1>
            </header>

            <div className="container">
                <div className="text" style={{ marginTop: "0px", paddingTop: "0px" }}>
                    {/* <h1>Journal Of Textile Association(JTA)</h1> */}
                    <p>
                        The Textile Association (India) publishes its Journal of the Textile Association (ITA)
                        since 1940 having (ISSN 0368-4636) is a prestigious bimonthly peer reviewed journal,
                        registered with Registrar of Newspapers of India under RNI No. 11386/57 (formerly as Textile Digest).
                        Presently this journal reaches to around 5000 textile professionals directly and has a readership of more than 20,000.
                    </p>
                    <p>
                        JTA is devoted to articles and papers of practical interest to technicians and
                        managers in Fibre Production, Spinning, Weaving, Knitting, Garment and Chemical Processing
                        of all types of fibres and also Embroidery. Fashion and Lifestyles.
                        Also it projects the new developments in applied industrial research in Technical Textiles,
                        for members and subscribers over last 8 decades.</p>

                    <p>
                        Now JTA is in the digital version on website. JTA is available online as e-journal (e-ISSN 2347-2537).
                        Although this publication has gone through a process of evolution, the form and the content
                        in which it is presently being published indicates its wide acceptance.</p>

                    <p>
                        JTA is abstracted by Chemical Abstracts (USA), World Textile Abstracts (U.K.).
                        Texincon and also covered in Indian Science Abstract (ISA), Elsevier, Scopus - Netherland  which indicates its international repute.
                        Journal of the Textile Association is an effective tool for strengthening the company's business
                        in India and abroad through advertisements. Corporate news, new product & technology write-ups are also
                        invited to be published in the journal.</p>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={onLogin} style={{ padding: "10px", margin: "10px" }} label="Login" severity="success" />
                        <Button onClick={onRegister} style={{ padding: "10px", margin: "10px" }} label="Register" severity="primary" />
                    </div>
                </div>

                <div className="image" style={{ marginTop: "95px", paddingTop: "0px" }}>
                    <img style={{ height: 700, width: 500 }} src="src/assets/j1.jpg" alt="Your Image" />
                </div>
            </div>

            {/* <footer style={{ margin: 60 }}>
                <hr className="footer-line" />
                <div>
                    <p>&copy; 2023 Journal Submission Feature. All rights reserved.</p>
                </div>

            </footer> */}


            {/* footer */}


            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='facebook-f' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='twitter' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='google' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='instagram' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='linkedin' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='github' />
                        </a>
                    </div>
                </section> */}

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                {/* <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit.
                                </p> */}

                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    702, Santosh Apartment,
                                    7th Floor, Ploat No. 72-A,
                                    Dr. Madhukar B. Raut Road,
                                    Shivaji Park, Dadar(West),
                                    Mumbai - 400 028,
                                    Maharashtra (India)
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    taicnt@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> +91-22-3554 8583
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> +91 8000440618
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Journal
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Contact
                                    </a>
                                </p>

                            </MDBCol>

                            {/* <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol> */}

                            {/* <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    702, Santosh Apartment,
                                    7th Floor, Ploat No. 72-A,
                                    Dr. Madhukar B. Raut Road,
                                    Shivaji Park, Dadar(West),
                                    Mumbai - 400 028,
                                    Maharashtra (India)
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol> */}
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    Journal Of Textile Association | © Copyright 2023 | All rights reserved.
                    {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a> */}
                </div>
            </MDBFooter>


        </div>

    )
}

export default Home
