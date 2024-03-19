import React from 'react'
import "../css/authorGuideline.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const AuthorsGuidelines = () => {
    return (
        <div style={{ padding: '25px' }}>
            <div className='para'>
                <h3>Author Guidelines</h3>
                <p>
                    The Journal of the Textile Association (JTA) is an Open Access, internationally indexed prestigious bi-monthly Peer Reviewed Textile Journal published by the Textile Association (India) since over 84 years, devoted for publication of communications embodying the results of original work of Research / Review which covers in only on different Textile branches of Textile Science, Technology, Engineering and Management that provides rapid publication.
                </p>
                <p>
                    JTA is indexed by Scopus (Elsevier), National Academy of Agriculture Science (NAAS), Indian Citation Index (ICI) and National Institute of Science Communication & Information Resources (NISCIAR) and by some others.
                </p>
                <p>
                    JTA is Abstracted by Chemical Abstract (USA), Science Abstract (India) and World Textile Abstract (UK) etc.
                </p>

                <p>
                    JTA is in the phase of transformation to a Peer Reviewed journal and hence it is requested to go through the JTA Guidelines and send us Manuscripts as per the requirements mentioned. Please follow the parameters for improving journal’s better Quality and Impact Factor. We follow Blind Peer Review Process. Received Manuscript Submissions, Hon. Editor decides for its acceptance or rejection. Accordingly, Author is intimated to make the changes considering the format and guidelines. If it is accepted, it goes for blind review process. Received comments from the reviewers will be sent to the author to send back edited revised manuscript after changes. Author will be informed for final rejection or the acceptance of the manuscript.
                </p>

                <ul>
                    <li>Corresponding Author has to declare first that the article is original, not published (entirely or partly) in any other journal and not similar article is published by any other authors. (Article Submission Declaration Form to be sent).</li>
                    <li>Avoid publishing of Unethical Policies and practices. Such manuscripts will not be accepted.</li>
                    <li>Plagiarism - Require 96 to 100% Unique Data for publication (Compulsory).</li>
                    <li>Manuscripts should be spell checked and grammar checked. Also please check for free of plagiarism. </li>
                    <li>Author should submit Three Reviewers which are related to the field of the paper with their Full Contact Details (Name, Position, Organisation, Full Address, E-mail ID & Cell no.) and reasoning for suggesting these Reviewers. They should not be from the same institute of Authors.</li>
                    <li>Use the guidelines to carry out a final check of your manuscript before you send it to the journal for publication.</li>
                    <li>Page Layout: A4 Size paper, Margin Top 0.2”, Bottom 0.3”, Left 0.7”, Right 0.6” (No formatting in lines). Do not highlight with coloured.</li>
                    <li>Manuscripts should be mailed to Hon. Editor at jtaeditor@gmail.com / taicnt@gmail.com</li>
                    <li>Authors are strictly warned for not to contact any Reviewer/s and request for the acceptance of their manuscripts. If it is noticed or get the information to us, such manuscript will be rejected without mentioning the reason.</li>
                    <li>Editorial Board has reserved the right to accept or reject any Manuscripts.</li>
                    <li>JTA does not levy Article Processing Charges (APCs) or Article Submission Charges.</li>

                </ul>

                <table>
                    <tr>
                        <th>Type Of Articles</th>
                        <th>Abstract words limit</th>
                        <th>Words Limit</th>
                        <th>Pages Limit</th>
                        <th>Reference Limit</th>
                    </tr>
                    <tr>
                        <td>Original Research Articles</td>
                        <td>&lt;250 words</td>
                        <td>&lt;4000 words</td>
                        <td>7-8 pages</td>
                        <td>&lt;40</td>
                    </tr>
                    <tr>
                        <td>Review Articles</td>
                        <td>&lt;300 words</td>
                        <td>&lt;6000 words</td>
                        <td>10-12 pages</td>
                        <td>&lt;60</td>
                    </tr>
                    <tr>
                        <td>Short Communications</td>
                        <td>&lt;150-200 words</td>
                        <td>&lt;2000 words</td>
                        <td>3-6 pages</td>
                        <td>&lt;15-20</td>
                    </tr>
                    <tr>
                        <td>Texperience</td>
                        <td>NA</td>
                        <td>&lt;1000 words</td>
                        <td>2-4 pages</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>Texpert Views</td>
                        <td>NA</td>
                        <td>&lt;500 words</td>
                        <td>1-2 pages</td>
                        <td>NA</td>
                    </tr>
                </table>
            </div>

            <div className='para'>
                <h3>Preparation and Format For Article</h3>
                <p>
                    It should be written in English only on MS Word 2007 or above in Single Column. No Header & Footer to be inserted. Illustrations (Figures & Tables) to be clear readable images in (JPEG) format and must be inserted in the article at the appropriated position to appear. Articles should be concisely in 1.15 spaces in A4 paper size with required margins. Article shall be prepared in Times New Roman using font size 11 normal and for Article Title (14 bold faces, each of first word in Capital and others in Lower case). Author/s Name using font size 12 bold faces, Institute, Department with location using font size 11 Italic faces are to be used. For citation/references follow the journal style. It should be numbered in the text consecutively, like [1] [2] or [1, 2] etc. formatted as superscript. It should be arranged in the following order:
                </p>

                <ol>
                    <li>Title</li>
                    <li>Author(s)</li>
                    <li>Institute</li>
                    <li>Abstract &amp; Keywords</li>
                    <li>Corresponding Author</li>
                    <li>Introduction</li>
                    <li>Materials and Methods</li>
                    <li>Results</li>
                    <li>Conclusions</li>
                    <li>Acknowledgement (if any)</li>
                    <li>References</li>
                </ol>
            </div>

            <div className='para'>
                <h4>
                    Title Page
                </h4>
                <p>
                    The Title should be on the first page with Times New Roman (14 font Bold), not more than 10-12 words, Name/s of the Author/s (11 font Bold), Department, Name of Institute with Address (11 font Italic). Total Authors should not be more than 4.
                </p>
                <p>Please mention Full Address of *Corresponding Author including E-mail ID at bottom left corner of the title page. If any of the co-authors are from different organizations, their addresses too should be mentioned and indicated using numbers after their names. The Corresponding Author of the article must be marked with an asterisk*. More than 4 Authors names will be deleted.</p>

                <h4>Abstract</h4>
                <p>
                    Abstract should be typed briefly reflect all aspects of the study, as most databases list mainly abstracts and references should be avoided. The abstract section should not exceed more than 250 words and divided must be into Background, Methods, Results and Conclusion sub-heading.
                </p>

                <h4>Keywords</h4>
                <p>Must provide 5-7 appropriate Keywords after the abstract section and Keywords should be arranged alphabetically order.</p>

                <h4>Introduction</h4>
                <p>The introduction should not be an extensive literature review although it should provide sufficient background information for the reader to understand and evaluate the results of the present study.</p>

                <h4>Materials And Method</h4>
                <p>
                    Describe the materials used in the experiment, department, place, month, year of experimentation etc. in the separate first paragraph. Followed by describe the methodology (with references) implied for collection of data in short on next paragraph.
                </p>

                <h4>Tables</h4>
                <p>
                    Tables should be numbered consecutively (Table 1, Table 2 etc.) and each table must paste on the appropriate position in the article text. The title should be typed at the top of the table in Bold letters. No full stop at the end of each caption’
                </p>

                <h4>Illustrations and Figures</h4>
                <p>Figures must be (Preferable in JPEG) cleared readable, visible, numbered and cited at the relevant position in the below of the article text, e.g. Figure 1:, Figure 2 :, etc. in Bold letters. No full stop at the end of each caption’</p>

                <h4>Results And Discussion</h4>
                <p>Results should be clear and concise. Discussion should explore the significance of the results of the work, not repeat them. A combined Results and Discussion section is desirable. Avoid extensive citations and discussion of published literature.</p>

                <h4>Conculsions</h4>
                <p>This should state clearly the main conclusions of the research and give a clear explanation of their importance and relevance. A short, paragraph summarizing the most important finding(s) of the research is required. The conclusions section should not exceed more than 150 words.
                </p>

                <h4>Acknowledgment</h4>
                <p>
                    The source of any financial support, gifts, technical assistance and advice received for the work being published must be indicated in the Acknowledgments section. This should be brief and for special assistance only.
                </p>
                <h4>References</h4>
                <p>
                    The authors are responsible for the accuracy of the bibliographic information (references). It should be numbered consecutively in [  ] in the order in which they are first mentioned in the text at the end of the respective text. The style and punctuation of the references should conform to the following examples: Reference numbering should start with 1 and follow in a sequential manner.
                </p>

                <ul>
                    <li><h5>Journal References</h5>
                        <p>
                            [1] N. Gokerneshan, A. J. Abisha Raju, Lakshmi Sudheer & K. M. Pachiyappan, “Acoustic Properties of Woven - Part II : Studies on Corduroy and Fabric with Polyester Fabrics made from Staple and Textured Weft Yarns”, Journal of the Textile Association, 82/2 (2021) 61-67, https://doi.org/10.56716/4/2301
                        </p>
                    </li>
                    <li><h5>Books</h5>
                        <p>
                            [2] Beyer WF, Fridovich I. ‘A Text Book of Medical Biochemistry’, 2nd ed., Germany; LAP Lambert Academic publishing: 2013: pp. 13-33.
                        </p>
                    </li>
                    <li>
                        <h5>Website</h5>
                        <p>
                            [3] Cancer-Pain.org [Internet]. New York: Association of Cancer Online Resources, Inc.; c2000-01 [updated 2002 May 16; cited 2002 Jul 9], http://www.cancer-pain.org/
                        </p>
                    </li>

                </ul>

            </div>

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
                                    <a href='/contactUs' className='text-reset'>
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

export default AuthorsGuidelines