import React from 'react';
import {
  BrowserRouter as Router,
  Route} from "react-router-dom";
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Projects from './components/pages/Project';
import Contact from './components/pages/Contact';
import InfoCard from './components/Infocard'
import './App.css';
 
 export class App extends React.Component {
   constructor(props)
   {
     super(props);
     this.state = {
       title: "Krishna Santhosh",
       links: [
         {title: 'Home', path: '/'},
         {title: 'Education', path: '/education'},
         {title: 'Experience', path: '/experience'},
         {title: 'Contact', path: '/contact'}

       ],
       home: {
         title: 'Projects'
        },
       education: {
          title: 'College'
         },
       experience: {
          title: 'Internship'
         },
       Contact: {
          title: 'Contact'
         }

     }
   }
   render() {
     return (
       <Router>
          <div className = "App" styles={{background:'#1B3465'}}>
            <div className = "Container">
             <Header />
             <Route exact path="/"><InfoCard/></Route> 
             <Route path = '/projects' component={Projects} />
             <Route path = '/contact' component={Contact} />
             <br></br>
             <Footer/>
            </div>
          </div>
       </Router>
     )
   }
 }
 
 export default App;
 
