import React from 'react';
import { Carousel } from 'react-bootstrap'

function Project() {
    return (
       <div> 
       <h1>PROJECT WORK</h1>
       <ul style={bulletStyle}>
           <li><b>Klenty CRM Chrome Plugin</b>
            <ul style={bulletStyleInner}>
            A chrome plugin/Gmail extension for the already existing Klenty CRM.
            </ul>
            <ul style={bulletStyleGeneral}>
                <li><b>Description : </b>Klenty is a CRM application that is used by B2B inbound and outbound sales teams to track their potential prospects and close their deals faster.My internship project was to build a chrome/Gmail plugin for their existing web application.This helps to extend some selected features of the web application into a plugin that can attached to the user’s browser. </li>
                <li><b>Tools and Technologies Used : </b>Node.js, Express.js</li>
            </ul>
           </li>
           <hr style={lineStyle}></hr>
           <br></br>
           <li><b>Fingerprint based locker system</b>
            <ul style={bulletStyleInner}>An IoT based locker system that is enabled by fingerprint. </ul>
            <ul style={bulletStyleGeneral}>
                <li><b>Description : </b> An IoT locker system that uses fingerprint to authenticate the user via mobile phone.</li>
                <li><b>Tools and Technologies Used : </b>Arduino, NodeMCU, ThingSpeak</li>
            </ul>
           </li>
           <hr style={lineStyle}></hr>
           <br></br>
           <li><b>Resume Parsing and Processing</b>
            <ul style={bulletStyleInner}>A smart resume parser that makes it easy for recruiters to complete the first round of shortlisting.</ul>
            <ul style={bulletStyleGeneral}>
                <li><b>Description : </b>Resumes to an organisation comes in many forms like docs, text,pdf and images, it isn't easy to separate these out and shortlist candidates for an interview.This application aims to reduce the burden on the recruiters by extracting information from the resumes and checking for the required parameter and identifying if they are eligible to move to the next round using machine learning,NLP and data extraction.</li>
                <li><b>Tools and Technologies Used : </b>Python, Hadoop</li>
            </ul>
           </li>
           
       </ul>
       <hr style={lineStyle}></hr>
       <br></br>
       <h1>INTERNSHIP</h1>
       <p>
       Interned at <b>Klenty</b>, Chennai for a duration of 6 months on their product completely on MEAN stack technology.I mainly worked on 3 projects
       <br></br>
        1.Klenty CRM - Chrome plugin
        <br></br>
        2.Integrated the Klenty - web application with Pipedrive[A sales CRM and pipeline management software].
        <br></br>
        3.Build an automated testing framework for the organization.

       </p>
       <br></br>
       </div>
    )

}
const bulletStyle = {
    listStyle: 'none',
    padding: '10px',
    fontSize:'20px'
}
const lineStyle={
    marginTop:'10px'
}
const bulletStyleInner = {
    listStyle: 'none',
    padding: '0px',
    color:'#859CA1',
    fontSize:'16px'
}
const bulletStyleGeneral = {
    listStyle: 'none',
    padding: '0px',
    fontSize:'16px',
}
const infoStyle = {
    border: '2px',
    borderStyle: 'solid',
    borderColor:'lightGray',
    width: '50%'



}


export default Project;
