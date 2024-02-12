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

const EditorialBoard = () => {
    return (
        <div style={{ marginTop: "30px" }}>
            <header>
                <h1>Editorial Board Memebers</h1>
            </header>

            <MDBRow className='justify-content-center mt-4'>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Deepa.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Dr. DEEPA V. RAISINGHANI</MDBCardTitle>
                                <MDBCardText>
                                    Chairman – JTA Editorial Board<br></br>
                                    Senior Faculty<br></br>
                                    Textile Department, VJTI<br></br>
                                    Email:raisinghanidv@tx.vjti.ac.in<br></br>raisinghanidv@vjti.org.in
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Mandot.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Dr. AADHAR MANDOT</MDBCardTitle>
                                <MDBCardText>
                                    Hon. Editor – JTA<br></br>
                                    Asst. Professor, Dept. of Textile Engg.
                                    Faculty of Technology and Engineering
                                    The M. S. University of Baroda<br></br>
                                    E-mail: aadharmandot@yahoo.com
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
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Soma.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Mr. J. B. SOMA</MDBCardTitle>
                                <MDBCardText>
                                    Hon. Asso. Editor & Publisher<br></br>
                                    E-mail: jb.soma@gmail.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Ramkumar.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Prof. (Dr.) SESHADRI RAMKUMAR</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Editorial Board<br></br>
                                    TIEHH<br></br>
                                    Texas Tech University<br></br>
                                    E-mail: Seshadri.Ramkumar@TIEHH.TTU.edu
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
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Meena.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Dr. CHET RAM MEENA</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Editorial Board<br></br>
                                    Asstt. Professor<br></br> Dept. of Textile Design
                                    & Regional Industry Coordinator<br></br>
                                    NIFT Jodhpur & NIFT Campus, Karwar<br></br>
                                    E-mail: chetram.meena@nift.ac.in
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Rakshit.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Dr. ANUP RAKSHIT</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Editorial Board<br></br>
                                    Executive Director<br></br>
                                    Indian Technical Textile Association<br></br>
                                    E-mail: ed@ittaindia.org
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
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Mankodi.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Dr. Ms. HIRENI MANKODI</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Editorial Board<br></br>
                                    Associate Professor, Textile Engg. Dept.
                                    Faculty of Technology,<br></br>
                                    The M. S. University of Baroda<br></br>
                                    E-mail: taibaroda@gmail.com<br></br>dr.mankodi@gmail.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Mr. Kale.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Prof. R. D. KALE</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Editorial Board<br></br>
                                    Department of Fibers and Textile Processing Technology<br></br>
                                    Institute of Chemical Technology<br></br>
                                    E-mail: rd.kale@ictmumbai.edu.in
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
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Burji.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>DR. MANJUNATH BURJI</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Editorial Board<br></br>
                                    Assistant Professor<br></br>
                                    DKTE Society’s Textile & Eng. Institute<br></br>
                                    E-mail: mburji@gmail.com
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard style={{ maxWidth: '540px', height: '210px', margin: '10px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Chanana.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Dr. Ms. BHAWANA CHANANA</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Editorial Board<br></br>
                                    Director<br></br>
                                    Amity School of Fashion Technology<br></br>
                                    E-mail: bchanana@mum.amity.edu
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
                            <MDBCardImage style={{ height: '210px', width: '200px' }} src='/src/assets/Dr. Neha.jpg' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Dr. Ms. NEHA MEHRA</MDBCardTitle>
                                <MDBCardText>
                                    Member – JTA Editorial Board<br></br>
                                    Assistant Professor<br></br>
                                    VJTI<br></br>
                                    E-mail: mehrarneha@gmail.com<br></br>
                                    nehamehra@tx.vjti.ac.in
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
export default EditorialBoard