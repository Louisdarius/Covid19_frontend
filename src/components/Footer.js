import React from 'react';
import './CompStyles.css';
import ChatIcon from '@material-ui/icons/Chat';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer(){
  return(
    <div id = 'footer' className="jumbotron text-center footer">
    <div className="row pt-3">

    <div className="col">
    <FacebookIcon style = {{color: 'blue', fontSize: '50px'}} />
    <InstagramIcon style = {{color: 'red', fontSize: '50px'}}/> 
    <LinkedInIcon style = {{color: 'blue', fontSize: '50px'}}/>
   </div>
      
      <div className="col">
      <p> Copywright @  University of East London led by Dr. Nadeem Qazi (CN5006) </p>
      </div>
      
      <div className="col">
      <ChatIcon /> Chat us Now 
      </div>
    </div>
</div>
  );
}
export default Footer;