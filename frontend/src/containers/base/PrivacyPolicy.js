import React, { Component }  from 'react';
import { useEffect } from 'react';

import { Typography, Divider } from "@mui/material";


const PrivacyPolicy = () => {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://cdn.iubenda.com/iubenda.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="container" id='contain' style={{'line-height': '200%', 'word-spacing': '175%', 'padding-top': '5px', 'padding-bottom': '5px'}}>
      <div
        style={{
          minHeight: "100vh",
          width: '100%',
          margin: 'auto',
          alignItems: 'left',
          justifyContent: 'left',
          textAlign: 'left',
        }}
      >
        <div style={{'width': '95%', 'margin': 'auto'}} className="iub_content legal_pp">


                
        <div class="iub_header">
                
        <Typography variant="h2" fontWeight="800" align="center">
          Privacy Policy of <strong>www.frincs.com</strong>
          </Typography>
          <br/>
        <Typography variant="body1" align="center">
              <p>This Application collects some Personal Data from its Users.</p>
              <p>This document can be printed for reference by using the print command in the settings of any browser.</p>
          </Typography>
        </div>

<br/>
        
<div class="one_line_col">
  <h2 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="owner_of_the_data">
    Owner and Data Controller
  </h2>
      <p>Frincs</p>
      <p><strong>Owner contact email:</strong> post@frincs.com</p>
</div>


<div class="one_line_col">
  <h2 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="types_of_data">
    Types of Data collected
  </h2>


    <p>
      Among the types of Personal Data that this Application collects, by itself or through third parties, there are:
      Tracker; Usage Data.
    </p>

  <p>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.<br />Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.<br />Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.<br />Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.<br />Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.</p>
  <p>Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.</p>
</div>


<div class="one_line_col">
  <h2 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="place_of_processing">Mode and place of processing the Data</h2>
  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Methods of processing</h3>
  <p>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.<br />The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.</p>
  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Legal basis of processing</h3>
  <p>The Owner may process Personal Data relating to Users if one of the following applies:</p>
  <ul>
    <li>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;</li>
    <li>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;</li>
    <li>processing is necessary for compliance with a legal obligation to which the Owner is subject;</li>
    <li>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;</li>
    <li>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li>
  </ul>
  <p>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract. </p>
  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Place</h3>
  <p>The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.<br /><br />
Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.</p>
  <p>Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.<br /><br />
If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.</p>
  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Retention time</h3>
  <p>Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.</p>
  <p>Therefore:</p>
  <ul>
    <li>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.</li>
    <li>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of  this document or by contacting the Owner.</li>
  </ul>
  <p>The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.<br /><br />
Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.</p>
</div>



  <div class="one_line_col">
    <h2 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="use_collected_data">The purposes of processing</h2>
      <p>
        The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following:
        Analytics and Displaying content from external platforms.
      </p>
     
    <p>For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”.</p>
  </div>







<div data-locale="en"></div>


    <div class="one_line_col">
      <h2 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="data_processing_detailed_info">Detailed information on the processing of Personal Data</h2>
      <p>Personal Data is collected for the following purposes and using the following services:</p>
      <ul class="for_boxes">

          <li>
            <div class="box_primary box_10 expand">
              <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  class="expand-click w_icon_24 policyicon_purpose_9034752">Analytics</h3>
              <div class="expand-content">
                <p>The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.</p>


                  <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Google Analytics (Google Ireland Limited)</h4>
                  <div class="wrap">
                    <p>Google Analytics is a web analysis service provided by Google Ireland Limited (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services.<br />
Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</p>
                  </div>

                    <p>Personal Data processed: Tracker; Usage Data.</p>

                  
                  <p>Place of processing:  Ireland –  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://tools.google.com/dlpage/gaoptout?hl=en" onclick="javascript:return tryFunc('tryGaOptOut',{href:'https://tools.google.com/dlpage/gaoptout?hl=en'})" target="_blank">Opt Out</a>. </p>
                  
                  

                  
              </div>
            </div>
          </li>

          <li>
            <div class="box_primary box_10 expand">
              <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  class="expand-click w_icon_24 policyicon_purpose_9034766">Displaying content from external platforms</h3>
              <div class="expand-content">
                <p>This type of service allows you to view content hosted on external platforms directly from the pages of this Application and interact with them.<br />
This type of service might still collect web traffic data for the pages where the service is installed, even when Users do not use it.</p>


                  <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Google Fonts (Google Ireland Limited)</h4>
                  <div class="wrap">
                    <p>Google Fonts is a typeface visualization service provided by Google Ireland Limited that allows this Application to incorporate content of this kind on its pages.</p>
                  </div>

                    <p>Personal Data processed: Tracker; Usage Data.</p>

                  
                  <p>Place of processing:  Ireland –  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p>
                  
                  

                  
              </div>
            </div>
          </li>
      </ul>
    </div>






<div data-locale="en"></div>




<div class="one_line_col">
  <h2 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="rights_subjects">The rights of Users</h2>
  <p>Users may exercise certain rights regarding their Data processed by the Owner.</p>
  <p>In particular, Users have the right to do the following:</p>

  <ul>
    <li><strong>Withdraw their consent at any time.</strong> Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.</li>
    <li><strong>Object to processing of their Data.</strong> Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.</li>
    <li><strong>Access their Data.</strong> Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.</li>
    <li><strong>Verify and seek rectification.</strong> Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.</li>
    <li><strong>Restrict the processing of their Data.</strong> Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.
</li>
    <li><strong>Have their Personal Data deleted or otherwise removed.</strong> Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.</li>
    <li><strong>Receive their Data and have it transferred to another controller.</strong> Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.</li>
    <li><strong>Lodge a complaint.</strong> Users have the right to bring a claim before their competent data protection authority.</li>
  </ul>

  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Details about the right to object to processing</h3>
  <p>Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.</p>
  <p>Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document. </p>

  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >How to exercise these rights</h3>
  <p>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.</p>
</div>




    <div class="one_line_col">
      <h2 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="cookie_policy">Cookie Policy</h2>
      <p>This Application uses Trackers. To learn more, the User may consult the <a href="//www.iubenda.com/privacy-policy/46933299/cookie-policy" title="Cookie Policy" class="show_comp_link iframe-preserve an-preserve">Cookie Policy</a>.</p>
    </div>


<div class="one_line_col">
  <h2 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="further_data_processing_info">Additional information about Data collection and processing</h2>
  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Legal action</h3>
  <p>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services.<br />The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.</p>
  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Additional information about User's Personal Data</h3>
  <p>In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.</p>
  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >System logs and maintenance</h3>
  <p>For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.</p>
  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Information not contained in this policy</h3>
  <p>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.</p>

    <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >How “Do Not Track” requests are handled</h3>
    <p>This Application does not support “Do Not Track” requests.<br />To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.</p>

  <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Changes to this privacy policy</h3>
  <p>The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. <br /><br />
Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.</p>

</div>




<div class="one_line_col">
  <div class="box_primary box_10 definitions expand">
    <h3 style={{'padding-top': '5px', 'padding-bottom': '5px',}}  id="definitions_and_legal_references" class="expand-click w_icon_24 icon_ribbon">
      Definitions and legal references
    </h3>
    <div class="expand-content">
      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Personal Data (or Data)</h4>
      <p>Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</p>

      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Usage Data</h4>
      <p>Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</p>

      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >User</h4>
      <p>The individual using this Application who, unless otherwise specified, coincides with the Data Subject.</p>

      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Data Subject</h4>
      <p>The natural person to whom the Personal Data refers.</p>

      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Data Processor (or Data Supervisor)</h4>
      <p>The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.</p>

      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Data Controller (or Owner)</h4>
      <p>The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.</p>

      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >This Application</h4>
      <p>The means by which the Personal Data of the User is collected and processed.</p>

      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Service</h4>
      <p>The service provided by this Application as described in the relative terms (if available) and on this site/application.</p>

      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >European Union (or EU)</h4>
      <p>Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.</p>

            <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Cookie</h4>
            <p>Cookies are Trackers consisting of small sets of data stored in the User's browser.</p>

            <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Tracker</h4>
            <p>Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User’s device.</p>
      <Divider />
      <h4 style={{'padding-top': '5px', 'padding-bottom': '5px',}} >Legal information</h4>
      <p>This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).</p>
      <p>This privacy policy relates solely to this Application, if not stated otherwise within this document.</p>
    </div>
  </div>
</div>


        
<div class="iub_footer">

  <p>
    Latest update: December 27, 2021
  </p>

  
  <p>
    <a target="_top" href="https://www.iubenda.com/en/privacy-and-cookie-policy-generator" title="iubenda - Privacy Policy generator">iubenda</a> hosts this content and only collects <a target="_top" href="//www.iubenda.com/privacy-policy/65675001">the Personal Data strictly necessary</a> for it to be provided.
  </p>

          <a href="//www.iubenda.com/privacy-policy/46933299" title="Show the simplified Privacy Policy" class="show_comp_link iframe-preserve an-preserve">Show the simplified Privacy Policy</a>



    </div>
      </div> 
      </div> 
      </div> 
  );

};


export default PrivacyPolicy;

