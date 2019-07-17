import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';
import ScrollAnimation from 'react-animate-on-scroll';
import { InView } from 'react-intersection-observer';
import {Spring, animated} from 'react-spring/renderprops';






class Athletes extends React.Component {
  render(){
  return (
    <div>
      <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
        <div style={divcontrol}>
          <Card inverse style={header1}>
            <CardImg width="100%" style={{borderRadius:'15px'}} src="https://madnessmedia.net/wp-content/uploads/2018/08/Thumb-no-bars-1-8-758x426.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={text}>The Athletes</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
        <div style={divcontrol2}>
          <Card inverse style={header2}>
            <CardImg width="100%" style={{borderRadius:'15px'}} src="https://madnessmedia.net/wp-content/uploads/2018/08/Thumb-no-bars-1-8-758x426.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={text2}>The Athletes</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 758px) and (max-device-width: 1024px)">
      <div style={nameDiv}>
      <ScrollAnimation animateIn='bounceInRight'
      // animateOut='bounceOutright'
>
          <h1 style={athtitle}>
            Athlete of the week
          </h1>
            <h2 style={athleteh1}>
              Stefi Cohen
            </h2>
            </ScrollAnimation>
            <p style={athleteprofile}>
                With her deap skill set there is not stopping her fast momentom to the the top
              </p>
            </div>
            
      <div style={divcontrol3}  >
          <Card inverse style={header3}>
          <ScrollAnimation animateIn='bounceInLeft'
          animateOut='bounceOutLeft'>
            <CardImg width="100%" 
            style={stefimage}
            src="https://www.bodybuilding.com/images/2019/april/the-sumo-deadlift-from-the-ground-up-with-stefi-cohen-header-960x540.jpg" alt="Card image cap" />
            </ScrollAnimation>
            <CardImgOverlay>
            </CardImgOverlay>
          </Card>
          
          <div> 
          
          </div>
        </div>
       
      </MediaQuery>
      <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
      <div style={nameDiv}>
      <ScrollAnimation animateIn='bounceInRight'
      // animateOut='bounceOutright'
>
          <h1 style={athtitle}>
            Athlete of the week
          </h1>
            <h2 style={athleteh1}>
              Stefi Cohen
            </h2>
            </ScrollAnimation>
            <p style={athleteprofile}>
                With her deap skill set and heavy sumo dead lift there is not stopping her fast momentom to the the top
              </p>
            </div>
            
      <div style={divcontrol3}  >
          <Card inverse style={header3}>
          <ScrollAnimation animateIn='bounceInLeft'
          animateOut='bounceOutLeft'>
            <CardImg width="100%" 
            style={stefimage}
            src="https://www.bodybuilding.com/images/2019/april/the-sumo-deadlift-from-the-ground-up-with-stefi-cohen-header-960x540.jpg" alt="Card image cap" />
            </ScrollAnimation>
            <CardImgOverlay>
            </CardImgOverlay>
          </Card>
          
          <div> 
          
          </div>
        </div>
      </MediaQuery>

    </div>
  );
}};

const divcontrol={
   
    borderRadius: '15px',
    paddingTop:'10px',
}

const header1={
    margin:'0 auto',
    width: '80%',
    borderWidth:' 5px',
    height:'100%',
    borderRadius: '15px',
}

const text={
    position: 'relative',
    fontSize: '3.2vw',
    top:'80px',
    float:'right',
    left:'10px',
    color:'orange',
    fontFamily: 'Gugi, cursive',


}

// next size 

const divcontrol2={
    borderRadius: '15px',
    paddingTop:'10px',
}

const header2={
    margin:'0 auto',
    width: '80%',

    borderWidth:' 5px',
    height:'100%',
    
    borderRadius: '15px',
}

const text2={
    position: 'relative',
    fontSize: '3.2vw',
    top:'80px',
    float:'right',
    left:'10px',
    color:'orange',
    fontFamily: 'Gugi, cursive',


}

// next size
const divcontrol3={
  position :'relative',
  width:'70%',
  height:'20em',
  clipPath: 'polygon(0 0, 100% 0, 40% 100%, 0% 100%)',
  // border:'5px solid rgb(148, 45, 45)',

  
}

const athtitle={
  color:'white',
  fontSize:'1.4em',
}

const nameDiv={
  position:'relative',
  float:'right',
  right:'80px',
  width:'30%',
  height:'100px',
 
  // border:'5px solid rgb(148, 45, 45)',
  top:'70px',
}
 const athleteh1={
   textAlign:'Left',
   margin:'0 auto',
   color:'orange',


 }
const stefimage={
  clipPath: 'polygon(0 0, 100% 0, 40% 100%, 0% 100%)',
  margin:'0',
  
 
}

const athleteprofile={
  marginTop:'15px',
  color:'white',
  fontWeight:'bold',
  textAlign:'center',
  width:'80%',
  fontSize:'1.2em',
}
// to make iage resize postion and left or right the image
const header3={
  backgroundColor:'rgba(2, 24, 43, 1)',

  height:'40em',
   width: '100%',
  
  
  
}

const text3={
  position: 'relative',
  fontSize: '3.2vw',
  top:'80px',
  float:'right',
  left:'10px',
  color:'white',
  fontFamily: 'Gugi, cursive',


}
export default Athletes;