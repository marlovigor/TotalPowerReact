import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';
import ScrollAnimation from 'react-animate-on-scroll';

const Product = (props) => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
        <div style={divcontrol}>
          <Card inverse style={header1}>
            <CardImg width="100%" style={{ borderRadius: '15px' }} src="https://www.elitefts.com/wp/wp-content/uploads/2016/10/Plater-1.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={text}>Shop </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
        <div style={divcontrol}>
          <Card inverse style={header1}>
            <CardImg width="100%" style={{ borderRadius: '15px' }} src="https://www.elitefts.com/wp/wp-content/uploads/2016/10/Plater-1.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={text}>Shop </CardTitle>
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
            Shop NOW
          </h1>
            <h2 style={athleteh1}>
              ELeiko,Rouge,York ,etc
            </h2>
            </ScrollAnimation>
            
            </div>
            
      <div style={divcontrol3}  >
          <Card inverse style={header3}>
          <ScrollAnimation animateIn='bounceInLeft'
          animateOut='bounceOutLeft'>
            <CardImg width="100%" 
            style={stefimage}
            src="https://www.elitefts.com/wp/wp-content/uploads/2016/10/Plater-1.jpg" alt="Card image cap" />
            </ScrollAnimation>
            <CardImgOverlay>
            </CardImgOverlay>
          </Card>
          
          <div> 
          
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
      <div style={nameDiv3}>
      <ScrollAnimation animateIn='bounceInRight'
      // animateOut='bounceOutright'
>
          <h1 style={athtitle2}>
            Shop <br/> NOW
          </h1>
            <h2 style={athleteh1}>
              ELeiko,Rouge,York ,etc
            </h2>
            </ScrollAnimation>
            
            </div>
            
      <div style={divcontrol4}  >
          <Card inverse style={header4}>
          <ScrollAnimation animateIn='bounceInLeft'
          animateOut='bounceOutLeft'>
            <CardImg width="100%" 
            style={stefimage2}
            src="https://www.elitefts.com/wp/wp-content/uploads/2016/10/Plater-1.jpg" alt="Card image cap" />
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
};
const divcontrol = {
  paddingTop: '10px',
  margin: '0 auto',
  // borderWidth:' 5px',
  width: '100%',
  height: '100%;',
  // borderRadius:'15px',

}

const header1 = {
  margin: '0 auto',
  width: '80%',
  borderWidth: ' 5px',
  height: '100%',
  borderRadius: '15px',

}

const text = {

}

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

//

const divcontrol3={
  position :'relative',
  width:'70%',
  float:'right',
  height:'20em',
  clipPath: 'polygon(17% 0, 100% 0%, 100% 100%, 0% 100%)',
  // border:'5px solid rgb(148, 45, 45)',

  
}

const athtitle={
  color:'white',
  fontSize:'1.4em',
  color:'red',
  fontSize:'4.4vw',
  textAlign:'center',
  fontWeight:'bold',
}

const nameDiv={
  position:'relative',
  float:'left',
  right:'2px',
  width:'30%',
  height:'100px',
 
  // border:'5px solid rgb(148, 45, 45)',
  top:'70px',
}
 const athleteh1={
   textAlign:'center',
   margin:'0 auto',
   color:'orange',
   fontFamily: 'Anton, sans-serif',


 }
const stefimage={
  clipPath: 'polygon(17% 0, 100% 0%, 100% 100%, 0% 100%)',
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

///final size up

const divcontrol4={
  position :'relative',
  width:'70%',
  height:'100%',
  float:'right',
  height:'20em',
  clipPath: 'polygon(17% 0, 100% 0%, 100% 100%, 0% 100%)',
  // border:'5px solid rgb(148, 45, 45)',

  
}

const athtitle2={
  color:'white',
  fontSize:'1.4em',
  color:'red',
  fontSize:'4.4vw',
  textAlign:'center',
  fontWeight:'bold',
}

const nameDiv3={
  position:'relative',
  float:'left',
  right:'2px',
  width:'30%',
  height:'100px',
 
  // border:'5px solid rgb(148, 45, 45)',
  top:'70px',
}
 const athleteh2={
   textAlign:'center',
   margin:'0 auto',
   color:'orange',
   fontFamily: 'Anton, sans-serif',


 }
const stefimage2={
  clipPath: 'polygon(17% 0, 100% 0%, 100% 100%, 0% 100%)',
  margin:'0',
  
 
}

const athleteprofile2={
  marginTop:'15px',
  color:'white',
  fontWeight:'bold',
  textAlign:'center',
  width:'80%',
  fontSize:'1.2em',
}
// to make iage resize postion and left or right the image
const header4 ={
  backgroundColor:'rgba(2, 24, 43, 1)',

  height:'40em',
   width: '100%',
  
  
  
}

const text4={
  position: 'relative',
  fontSize: '3.2vw',
  top:'80px',
  float:'right',
  left:'10px',
  color:'white',
  fontFamily: 'Gugi, cursive',


}





export default Product
