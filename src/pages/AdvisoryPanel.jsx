import React from 'react'

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const AdvisoryPanel = () => {
    return (
        <div style={{ marginTop: "30px" }}>
            <header>
                <h1>JTA - Advisory Panel</h1>
            </header>

            <MDBRow className='justify-content-center mt-4'>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Gotmare.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Dr. V. D. GOTMARE</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Advisory Panel<br></br>
                                    Representative Director (India)<br></br>
                                    Frontier Cool Inc., Taiwan<br></br>
                                    Former Head, Textile Engg. Department, VJTI<br></br>
                                    Email: vdgotmare@gmail.com<br></br>vdgotmare@vjti.org.in
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Aras.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Mr. G. V. ARAS</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Advisory Panel<br></br>
                                    Ex Director – ATE<br></br>
                                    E-mail: arasgv@gmil.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBRow>

            <MDBRow className='justify-content-center mt-4'>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Bhajekar.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Mr. RAHUL BHAJEKAR</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Advisory Panel<br></br>
                                    Managing Director<br></br>
                                    Texanlab Laboratories Pvt. Ltd.<br></br>
                                    E-mail: thane@texanlab.com<br></br>rahul.bhajekar@gmail.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Bali.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Mr. RAKESH BALI</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Advisory Panel<br></br>
                                    Head of Marketing & Senior VP Petrochemicals<br></br>
                                    Reliance Industries Ltd.<br></br>
                                    Reliance Corporate Park<br></br>
                                    E-mail: rakesh.bali@ril.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBRow>

            <MDBRow className='justify-content-center mt-4'>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Pankaj.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Mr. PANKAJ DANGRA</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Advisory Panel<br></br>
                                    Head Marketing India<br></br>
                                    Rieter India Private Limited<br></br>
                                    E-mail: pankaj.dangra@rieter.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Subhash.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Mr. SUBHASH BHARGAVA</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Advisory Panel<br></br>
                                    Managing Director<br></br>
                                    Colorant Limited<br></br>
                                    E-mail: mktg@colorantindia.com<br></br>
                                    subhash@colorantindia.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBRow>

            <MDBRow className='justify-content-center mt-4'>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Mandal.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Mr. SUDIPTO MANDAL</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Advisory Panel<br></br>
                                    Senior Sales Executive<br></br>
                                    Oerlikon Textile India Pvt. Ltd.<br></br>
                                    E-mail: mandalsudipto007@gmail.com<br></br> sudipto.mandal@oerlikon.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Hrushikesh.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Mr. HRUSHIKESH TAKBHATE </MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Advisory Panel<br></br>
                                    Digital & Print Media Consultant<br></br>
                                    E-mail: takbhatehrushikesh@gmail.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBRow>


            <MDBFooter className='text-center text-lg-start text-white' style={{ backgroundColor: "#0a4275" }}>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='https://www.facebook.com/Textile.Association' className='me-4 text-reset'>
                            <MDBIcon color='white' fab icon='facebook-f' />
                        </a>
                        <a href='https://twitter.com/textile_in' className='me-4 text-reset'>
                            <MDBIcon color='white' fab icon='twitter' />
                        </a>
                        <a href='https://www.textileassociationindia.org/' className='me-4 text-reset'>
                            <MDBIcon color='white' fab icon='google' />
                        </a>
                        <a href='https://www.linkedin.com/in/tai-india-003093a1/?originalSubdomain=in' className='me-4 text-reset'>
                            <MDBIcon color='white' fab icon='linkedin' />
                        </a>
                    </div>
                </section>
                <section>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>

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
                                    <a href='/about' className='text-reset'>
                                        About
                                    </a>
                                </p>
                                <p>
                                    <a href='https://www.textileassociationindia.org/jta-archives' className='text-reset'>
                                        Journal
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Contact
                                    </a>
                                </p>

                            </MDBCol>


                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    Journal Of Textile Association | © Copyright 2023 | All rights reserved.
                </div>
            </MDBFooter>

        </div>

    )
}
export default AdvisoryPanel