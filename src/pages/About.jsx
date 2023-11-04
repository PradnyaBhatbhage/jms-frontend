import React from 'react'
import { Card } from 'primereact/card';
import "/src/css/about.css";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  // const header = (
  //   <h3>Our Mission</h3>
  // );
  return (
    <div>
      <header>
        <h1>About Textile Association India (TAI)</h1>
      </header>

      {/* <section>
        <p>
          The Textile Association (India) established in the year 1939, is the foremost leading and largest Nonprofit making
          National Professional & Technocrats body in the country having more than 25000 strong memberships of 26 affiliated units
          at various textile centers in the country. TAI has more than 8 decades of service to the industry to its credit.
          It has been providing guidance and services of various kinds to the Textile Industry.
          TAI organizes various National and International Textile Conferences & other activities and also conducts distance textile ATM/GMTA Exams annually.
        </p>
      </section> */}

      <div className="container">
        <div className="text">

          <p>The Textile Association (India) established in the year 1939, is the foremost leading and largest Nonprofit making
            National Professional & Technocrats body in the country having more than 25000 strong memberships of 26 affiliated units
            at various textile centers in the country.<br></br>
            TAI has more than 8 decades of service to the industry to its credit.
            It has been providing guidance and services of various kinds to the Textile Industry.
            TAI organizes various National and International Textile Conferences & other activities and also conducts distance textile ATM/GMTA Exams annually.
          </p>
          <p>The Textile Association (India) has been publishing a prestigious bi-monthly peer reviewed technical
            Journal of the Textile Association since 1940. Journal is devoted to articles and papers of practical
            interest to technicians of all segments of the textile industry which reaches to around 4600
            textile professionals directly and has a readership of more than 23000 readers.
            Journal of the Textile Association is available online as an e-journal.
            Journal is being circulated to almost key decision makers in the textile industry across the Textile,
            Apparel & Fashion sectors, Textile Educational and Research Institutes</p>
          <p>
            To add value to our activities, the Textile Association (India) has launched the website
            www.textileassociationindia.org and has made significant progress and having advertising
            opportunities along with several informative wings. It is made RESPONSIVE, compatible with Mobile Phones,
            Tablets, Laptops etc. Website has satisfactory visitor traffic and hits from across the Indian textile industry
            as well as globally. It has attracted almost all the global players in this industry across more than 180 countries</p>
        </div>

        <div className="image">
          <img style={{ height: 500, width: 500 }} src="src/assets/c2.jpg" alt="Your Image" />
        </div>
      </div>

      {/*
      <div style={{ padding: "20px", display: "flex" }} className="card flex justify-content-center">
        <Card style={{ width: "300px", margin: "20px" }} header={header} className="md:w-15rem">
          <p className="m-0">
            Streamline your research journey with our innovative journal submission feature, simplifying the process of sharing your groundbreaking discoveries with the world.
          </p>
        </Card>
      </div> */}

      <div style={{ padding: "20px", justifyContent: "center", display: "flex" }} className="card flex justify-content-center">
        <Card style={{ width: "300px", margin: "20px" }} title="Our Mission">
          <p>To conduct the programmes for textile professionals and technocrats with an aim to achieve their continuous growth and development,
            which will enhance industrial Performance in terms of quality and productivity.
          </p>
        </Card>

        <Card style={{ width: "300px", margin: "20px" }} title="Our Vision">
          <p>To be a leading largest and internationally reputed Association of textile technocrats promoting scientific
            and technological knowledge and training globally with benchmark performance as well as
            commitments to professional ethics and social responsibility.
          </p>
        </Card>
      </div>

      {/* <section>
        <h2>Why Choose Us?</h2>
        <p>Our journal submission feature is designed with researchers, scholars, and scientists in mind. Here's why you should choose our platform:</p>

        <strong>Efficiency:</strong> We make it easier than ever to submit your research papers, articles, and findings to top-tier journals.<br />
        <strong>Innovation:</strong> We're constantly innovating to provide you with cutting-edge tools and features for a seamless submission experience.<br />
        <strong>Global Reach:</strong> Your work deserves a global audience, and our platform helps you achieve that reach effortlessly.<br />

      </section>

      <section>
        <h2>Meet the Team</h2>
        <p>We are a dedicated team of professionals passionate about advancing the world of academic publishing. Get to know us:</p>

        <strong>John Smith</strong> - CEO and Co-founder<br />
        <strong>Jane Doe</strong> - CTO and Co-founder<br />
        <strong>Alice Johnson</strong> - Head of Research Partnerships<br />
        <strong>Bob Williams</strong> - User Experience Designer<br />
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions, feedback, or suggestions, please don't hesitate to get in touch with us. We value your input and are here to assist you.</p>
        <p>Contact Email: <a href="mailto:info@example.com">info@example.com</a></p>
      </section> */}

      {/* <footer>
        <hr className="footer-line" />
        <p>&copy; 2023 Journal Submission Feature. All rights reserved.</p>
      </footer> */}

      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
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

    </div >
  )
}
export default About
