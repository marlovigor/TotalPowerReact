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
      <div style={nameDiv1}>
        <ScrollAnimation animateIn='bounceInRight'
      // animateOut='bounceOutright'
>
          <h1 style={athtitle0}>
            Athlete of the week
          </h1>
            <h2 style={athleteh0}>
              Stefi Cohen
            </h2>
            </ScrollAnimation>
            </div>
      <div style={divcontrol1}>
      
          <Card inverse style={header1}>
            <CardImg style={stefimage1} src="https://i.ytimg.com/vi/dFI8WeewkpQ/maxresdefault.jpg" alt="Card image cap" />
            <CardImgOverlay>
              
            </CardImgOverlay>
          </Card>
        </div>
        
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
        <div style={divcontrol2}>
          <Card inverse style={header2}>
            <CardImg width="100%" src="https://www.bodybuilding.com/images/2019/april/the-sumo-deadlift-from-the-ground-up-with-stefi-cohen-header-960x540.jpg" alt="Card image cap" />
            <CardImgOverlay>
              
            </CardImgOverlay>
          </Card>
        </div>
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
            </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 758px) and (max-device-width: 2000px)">
      <div style={divcontrol4}>
          <Card inverse style={header4}>
            <CardImg width="100%" src="https://www.bodybuilding.com/images/2019/april/the-sumo-deadlift-from-the-ground-up-with-stefi-cohen-header-960x540.jpg" alt="Card image cap" />
            <CardImgOverlay>
              
            </CardImgOverlay>
          </Card>
        </div>
        <div style={nameDiv4}>
        <ScrollAnimation animateIn='bounceInRight'
      // animateOut='bounceOutright'
>
          <h1 style={athtitle4}>
            Athlete of the week
          </h1>
            <h2 style={athleteh4}>
              Stefi Cohen
            </h2>
            </ScrollAnimation>
            </div>
       
      </MediaQuery>
      {/* <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
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
      </MediaQuery> */}

    </div>
  );
}};

const divcontrol1={
  position:'relative',
  // // left:'100px',
  // // margin:'0 auto',
  top:'120px',
  // maxWidth:'600px',
 
    
    // width:'20em',


  }
  
  const header1={
      margin:'0 auto',
      width: '80%',
      borderWidth:' 5px',
      height:'100%',
      boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',
  }
  

  const stefimage1 ={
  
  }
  // const text1={
  //     position: 'relative',
  //     fontSize: '3.2vw',
  //     top:'80px',
  //     float:'right',
  //     left:'40px',
  //     color:'orange',
  //     fontFamily: 'Gugi, cursive',
  
  
  // }
  
  const nameDiv1={
    position:'relative',
    margin:'0 auto',
    maxwidth:'100%;',
    top:'120px',
    // border: '9px solid red',
  
  }
  const athtitle0={
    position:'relative',
    textAlign:'center',
    color:'white',
    margin:'0 auto',
    width:'50%',
    fontSize:'3.2vw',
    textShadow: '4px 4px 4px #000',
  }
  
  const athleteh0={
    position:'relative',
    textAlign:'center',
    margin:'0 auto',
    width:'50%',
    fontSize:'5.2vw',
    color:'Steelblue',
  
  
  }

// next size 480 780

const divcontrol2={
position:'relative',
right:'90px',
margin:'0 auto',
top:'130px',
maxWidth:'400px',
  
  // width:'20em',
}

const header2={
    margin:'0 auto',
    width: '80%',
    borderWidth:' 5px',
    height:'100%',
    boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',
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

const nameDiv={
  position:'relative',
left:'280px',
margin:'0 auto',
top:'0px',
maxWidth:'400px',
}
const athtitle={
  color:'white',
  width:'80%',
  fontSize:'1.4em',
  textShadow: '4px 4px 4px #000',
}

const athleteh1={
  textAlign:'Left',
  margin:'0 auto',
  color:'Steelblue',


}
////

// next size
// const divcontrol3={
//   position :'relative',
//   width:'70%',
//   height:'20em',
//   clipPath: 'polygon(0 0, 100% 0, 40% 100%, 0% 100%)',
//   // border:'5px solid rgb(148, 45, 45)',

  
// }



 
// const stefimage={
//   clipPath: 'polygon(0 0, 100% 0, 40% 100%, 0% 100%)',
//   margin:'0',
  
 
// }

// const athleteprofile={
//   marginTop:'15px',
//   color:'white',
//   fontWeight:'bold',
//   textAlign:'center',
//   width:'80%',
//   fontSize:'1.2em',
// }
// // to make iage resize postion and left or right the image
// const header3={
//   backgroundColor:'rgba(2, 24, 43, 1)',

//   height:'40em',
//    width: '100%',
  
  
  
// }

// const text3={
//   position: 'relative',
//   fontSize: '3.2vw',
//   top:'80px',
//   float:'right',
//   left:'10px',
//   color:'white',
//   fontFamily: 'Gugi, cursive',


// }



// //////final dsk

// const nameDiv4={
//   position:'relative',
//   margin:'0 auto',
//   left:'10rem',
//   maxWidth:'280px',
//   margin:'0px',
//   top:'50px',
//   border: '9px solid green',

// }
// const athtitle3={
//   position:'relative',
//   textAlign:'right',
//   color:'white',
//   margin:'0 auto',
//   left:'8em',
//   width:'50%',
//   fontSize:'1.2vw',
//   textShadow: '4px 4px 4px #000',
// }

// const athleteh4={
//   border: '20px solid red',
//   position:'relative',
//   textAlign:'right',
//   margin:'0 auto',
//   left:'4em',
//   width:'50%',
//   fontSize:'2.2vw',
//   color:'Steelblue',


// }
// const divcontrol4={
//   position:'relative',
// right:'90px',
// margin:'0 auto',
// top:'130px',
// maxWidth:'400px',
  // maxWidth:'600px',
 
    
    // width:'20em',


  // }



  const divcontrol4={
    position:'relative',
    right:'75px',
    margin:'0 auto',
    top:'50px',
    maxWidth:'400px',
    // border: '20px solid red',
      
      // width:'20em',
    }


  const header4={
    margin:'0 auto',
    right:'2rem',
    width: '100%',
    borderWidth:' 5px',
    height:'100%',
    boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',
}

const text4={
    position: 'relative',
    fontSize: '3.2vw',
    top:'80px',
    float:'right',
    left:'10px',
    color:'orange',
    fontFamily: 'Gugi, cursive',


}

const nameDiv4={
  position:'relative',
left:'300px',
margin:'0 auto',
top:'-140px',
maxWidth:'400px',

}
const athtitle4={
  color:'white',
  width:'80%',
  fontSize:'1.2em',
  textShadow: '4px 4px 4px #000',
}

const athleteh4={
  textAlign:'Left',
  margin:'0 auto',
  color:'Steelblue',

}


export default Athletes;