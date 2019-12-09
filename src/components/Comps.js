import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';
import ScrollAnimation from 'react-animate-on-scroll';

const Comps = (props) => {
    return (
      <div>
        <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
          <div style={divcontrol}>
            <Card inverse style={header1}>
              <CardImg width="100%" style={{borderRadius:'15px'}} src="http://static.wixstatic.com/media/6c49c9_aab4dfc6c5c24fc0942f7f2d9d839474~mv2.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle style={text}>Meets</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">       
           <div style={divcontrol}>
            <Card inverse style={header1}>
              <CardImg width="100%" style={{borderRadius:'15px'}} src="http://static.wixstatic.com/media/6c49c9_aab4dfc6c5c24fc0942f7f2d9d839474~mv2.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle style={text2}>Meets</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 758px) and (max-device-width: 1024px)">
           <div style={header3}>
           <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
            <Card inverse style={header3}>
              <CardImg width="100%" style={{borderRadius:'15px'}} src="http://static.wixstatic.com/media/6c49c9_aab4dfc6c5c24fc0942f7f2d9d839474~mv2.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle style={text3}>Meets</CardTitle>
              </CardImgOverlay>
            </Card>
            </ScrollAnimation>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">

           <div style={header4}>
           <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
            <Card inverse style={header4}>
              <CardImg width="100%" style={{borderRadius:'15px'}} src="http://static.wixstatic.com/media/6c49c9_aab4dfc6c5c24fc0942f7f2d9d839474~mv2.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle style={text33}>Meets</CardTitle>
              </CardImgOverlay>
            </Card>
            </ScrollAnimation>
          </div>
        </MediaQuery>
        
        
      </div>
    );
  };


  const divcontrol={
    paddingTop:'10px',
    margin:'0 auto',
    // borderWidth:' 5px',
    width: '100%',
    height:'100%;',
    // borderRadius:'15px',
    
}

const header1={
    margin:'0 auto',
    width: '80%',
    borderWidth:' 5px',
    height:'100%',
    borderRadius: '15px',

}

const text={
  color:'red',
  fontSize:'2.2em',
  position:'relative',
  top:'60px',
  fontFamily:'Anton, sans-serif',
  left:'20px',

}
// size up

const text2={
  color:'red',
  fontSize:'3.5em',
  position:'relative',
  top:'100px',
  fontFamily:'Anton, sans-serif',
  left:'20px',

}

// desktop
  const divcontrol3={

  
}

const header3={
  border:'0px',
  overflow: 'hidden',
  margin: '0 auto',
  width: '100%',
  
  
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

  
  


}
const text3={
  color:'red',
  fontSize:'6.3vw',
  position:'relative',
  margin:'0 auto',
  fontFamily: 'Black Ops One ,cursive',
  
}
const header4={
  
  margin:'0 auto',
  top:'20px',
  width: '100%',
  height:'100%',
  


}
const text33={
  position:'relative',
  margin:'0 auto',
  color:'red',
  fontSize:'7.4vw',
  top:'100px',
  fontFamily: 'Black Ops One ,cursive',
  left:'20px',

}




export default Comps
