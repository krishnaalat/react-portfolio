import React from 'react';
import PhotoCard from './Photocard';
import { numberTypeAnnotation } from '@babel/types';

function Infocard() {
    return (
        <div styles={{background:'#1B3465'}}>
            <PhotoCard/>
            <br></br>
            <div style = {infoStyle}>
                <h4 style = {{fontSize: '20px',padding:'10px'}}><b>ACADEMICS</b></h4>
                <ul style={bulletStyle}>
                    <li><b>M.Sc Software Systems [5 years Integrated]</b>
                        <ul style={bulletStyleInner}> 
                            <li>Coimbatore Institute of Technology</li>
                            <li>[2015-Present]</li>
                            <li>CGPA: 8.33/10(upto 9th semster)</li>
                        </ul>
                    </li>
                    <br></br>
                    <li><b>Class XII</b>
                        <ul style={bulletStyleInner}> 
                            <li>Rajagiri Public School, Kochi, Kerala</li>
                            <li>[2014-2015]</li>
                            <li>89%</li>
                        </ul>
                    </li>
                    <br></br>
                    <li><b>Class X</b>
                        <ul style={bulletStyleInner}> 
                            <li>Rajagiri Public School, Kochi, Kerala</li>
                            <li>[2012-2013]</li>
                            <li>CGPA: 10/10</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <br></br>
            <div style = {infoStyle}>
            <h4 style = {{fontSize: '20px',padding:'10px'}}><b>AREA OF INTEREST</b></h4>
                <ul style={bulletStyleGeneral}>
                    <li> Object Oriented Programming Paradigms</li>
                    <li> Web Development</li>
                </ul>
            </div>
            <br></br>
            <div style = {infoStyle}>
            <h4 style = {{fontSize: '20px',padding:'10px'}}><b>SKILLS</b></h4>
                <ul style={bulletStyleGeneral}>
                    <li><b>Languages</b>: C, C++, Java</li>
                    <li><b>Web Languages</b>: Node.js, HTML, CSS, JavaScript</li>
                </ul>
            </div>
            <br></br>
        </div>
    )
}

const bulletStyle = {
    listStyle: 'none',
    padding: '10px',
    fontSize:'20px'
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
    padding:'10px',
}
const infoStyle = {
    border: '2px',
    borderStyle: 'solid',
    borderColor:'lightGray',
    width: '50%'



}
export default Infocard;
