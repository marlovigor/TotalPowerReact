import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';
import MenuButton from './MenuButton';



const Header = (props) => {

  return (
    <div>
      {/* <MediaQuery maxDeviceWidth={380}> */}
      <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
      <MenuButton />
        <div style={header1Container}>
        <h1 style={Logo2}>
            TOTAL POWER
      </h1>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
      <MenuButton />
      <div style={header2Container}>
          {/* <Card inverse style={header2}>
        <CardImg style={{border:'none'}} width="100%" height="80px" src="https://s3.amazonaws.com/zenplannerwordpress-stack0/wp-content/uploads/sites/119/2018/07/25103801/Gym-Background-Final.jpg" />
        <CardImgOverlay>
    
          <CardTitle style={title3}>
            Total Power
          </CardTitle>
          <CardText>
          </CardText>
        </CardImgOverlay>
      </Card> */}
          <h1 style={Logo}>
            TOTAL POWER
      </h1>
      
      
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 758px) and (max-device-width: 2000px)">
        <div style={headerContainer3}>
          <h1 style={Logo3}>
            TOTAL POWER
      </h1>
        </div>
      </MediaQuery>
      {/* <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
        <div style={header3}>
          <Card inverse style={header3}>
            <CardImg width="100%" height="110px" src="https://s3.amazonaws.com/zenplannerwordpress-stack0/wp-content/uploads/sites/119/2018/07/25103801/Gym-Background-Final.jpg" />
            <CardImgOverlay>
            
              <CardTitle style={title3}>
                Total Power
          </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery> */}
    </div>

  );
};

const header1Container = {
  position: 'absolute',
  margin:'0 auto',
  top:'-20px',
  width: '100%',
  height:'100px',
  border: '1px solid red',
}

const Logo2 = {
  backgroundColor:'steelblue',
  position:'relative',
  margin: '0 auto ',
  paddingTop:'20px',
  height:'90px',
  width:'160px',
  textAlign:'center',
  fontFamily: 'Alfa Slab One, cursive',
  fontSize:'1.5em',
  top: '0px',
  color:'black',
  fontWeight:'bolder',
  color:'white',

}
const title2 = {
  transform: 'rotate(-20deg)',
  position: 'relative',
  textAlign: 'center',
  top: '10px',
  fontSize: '6.5vw',
  margin: '0 auto',
  color: 'rgba(215, 38, 61, 1)',
  fontFamily: 'Faster One ,cursive',

}

const title3 = {
  position: 'relative',
  transform: 'rotate(-5deg)',
  textAlign: 'center',
  top: '-15px',
  fontSize: '4.5vw',
  margin: '0 auto',
  color: 'white',
  fontFamily: 'Faster One ,cursive',
}

const header1_1 = {
  // position:'relative',
  margin: '0 auto',
  border: 'none',
  width: '90%',
  height: '100%',
  borderRadius: '15px',
  // boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}
const header1 = {
  // position:'relative',
  margin: '0 auto',
  borderWidth: ' 5px',
  width: '90%',
  height: '100%;',
  borderRadius: '15px',
  // boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}
// (min-device-width: 480px) and (max-device-width: 758px)
const header2Container = {
  position: 'absolute',
  left:'25%',
  top:'-10px',
  width: '50%',
  height:'120px',
}

const Logo = {
  backgroundColor:'steelblue',
  position:'relative',
  margin: '0 auto ',
  paddingTop:'20px',
  height:'120px',
  width:'180px',
  textAlign:'center',
  fontFamily: 'Alfa Slab One, cursive',
  fontSize:'2.1em',
  top: '0px',
  color:'black',
  fontWeight:'bolder',
  color:'white',

}


// 
// min-device-width: 758px) and (max-device-width: 1024px
const headerContainer3 = {
  position: 'absolute',
  margin:'0 auto',
  top:'-20px',
  width: '100%',
  height:'100px',
  // border: '1px solid red',


}
const Logo3 ={
  backgroundColor:'steelblue',
  position:'relative',
  margin: '0 auto ',
  right:'8em',
  paddingTop:'20px',
  height:'90px',
  width:'160px',
  textAlign:'center',
  fontFamily: 'Alfa Slab One, cursive',
  fontSize:'1.5em',
  top: '5px',
  fontWeight:'bolder',
  color:'white',

}

const menubutton = {
  width: '15px',
  hieght: '15px',
  float: 'right',

}


// const imgstyle={

// }

export default Header
