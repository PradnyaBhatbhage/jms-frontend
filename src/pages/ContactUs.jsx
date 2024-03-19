import React, { useEffect } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


const ContactUs = () => {
    return (

        <div className="d-flex justify-content-center align-items-start" style={{ marginTop: "30px" }}>
            <div className="d-flex flex-column align-items-center" style={{ width: '40%', marginRight: '5%' }}>
                <h2>Association Address</h2>
                <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    702, Santosh Apartment,<br />
                    7th Floor, Ploat No. 72-A,<br />
                    Dr. Madhukar B. Raut Road,<br />
                    Shivaji Park, Dadar(West),<br />
                    Mumbai - 400 028,<br />
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
            </div>
            <MDBValidation noValidate id='form' className='text-center' style={{ width: '50%', maxWidth: '300px' }}>
                <h1>Contact Us</h1>

                <MDBValidationItem invalid feedback='Please provide your name.'>
                    <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
                </MDBValidationItem>

                <MDBValidationItem invalid feedback='Please provide your email.'>
                    <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
                </MDBValidationItem>

                <MDBValidationItem invalid feedback='Please provide mail subject.'>
                    <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
                </MDBValidationItem>

                <MDBValidationItem invalid feedback='Please provide a message text.'>
                    <MDBTextArea wrapperClass='mb-4' label='Message' required />
                </MDBValidationItem>

                <MDBValidationItem feedback=''>
                    <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
                </MDBValidationItem>

                <MDBBtn type='submit' color='primary' block className='my-4'>
                    Send
                </MDBBtn>
            </MDBValidation>
        </div>

    );
}

export default ContactUs