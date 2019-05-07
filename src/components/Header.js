import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';
import MenuButton from './MenuButton';


const Header = (props) => {
 
  return (
    <div>
    <MediaQuery maxDeviceWidth={380}>
    <div style={header1_1}>
      <Card inverse style={header1}>
        <CardImg style={{borderRadius:'15px'}}width="100%"  src="http://sfwallpaper.com/images/weightlifting-wallpapers-10.jpg" />
        <CardImgOverlay>
        <MenuButton style={menubutton}/>
          {/* <CardTitle style={title1}>TOTAL POWER</CardTitle> */}
          <CardTitle style={title1}>
            Total Power
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
    </MediaQuery>
    <MediaQuery query="(min-device-width: 380px) and (max-device-width: 580px)">
    <div style={header1}>
      <Card inverse style={header1}>
        <CardImg  style={{borderRadius:'15px'}}width="100%" src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/05/05/945625dd9c15f1b.jpg" />
        <CardImgOverlay>
          {/* <CardTitle style={title1}>TOTAL POWER</CardTitle> */}
          <CardTitle style={title2}>
            Total Power
          </CardTitle>
          <CardText>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
    </MediaQuery>
    <MediaQuery query="(min-device-width: 580px) and (max-device-width: 780px)">
    <div style={header3}>
      <Card inverse>
        <CardImg width="100%" src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/05/05/945625dd9c15f1b.jpg" />
        <CardImgOverlay>
          {/* <CardTitle style={title1}>TOTAL POWER</CardTitle> */}
          <CardTitle style={title3}>
            Total Power
          </CardTitle>
          <CardText>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
    </MediaQuery>
    <MediaQuery query="(min-device-width: 780px) and (max-device-width: 2200px)">
    <div style={header3}>
      <Card inverse>
        <CardImg width="100%" src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/05/05/945625dd9c15f1b.jpg" />
        <CardImgOverlay>
          {/* <CardTitle style={title1}>TOTAL POWER</CardTitle> */}
          <CardTitle style={title3}>
            Total Power
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
    </MediaQuery>
    </div>
  
  );
};


const title1={
  transform: 'rotate(-15deg)',
fontSize:'5.8vw',
position:'relative',
right:'30px',
top:'20px',
color:'white',
fontFamily: 'Faster One ,cursive',



}
const title2={
  transform: 'rotate(-20deg)',
  textAlign:'center',
  top:'60px',
  fontSize:'8vw',
  margin:'0 auto',
  color:'White',
  fontFamily: 'Faster One ,cursive',
  
  }

  const title3={
    transform: 'rotate(-20deg)',
    textAlign:'center',
    top:'60px',
    fontSize:'4.1vw',
    margin:'0 auto',
    color:'white',
    
        fontFamily: 'Lato, sans-serif',
    
    
    
    }

    const header1_1 ={
      // position:'relative',
      margin:'0 auto',
      width: '90%',
      height:'100%',
      borderRadius: '15px',
      // boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',
    
    }
const header1 ={
  // position:'relative',
  margin:'0 auto',
  width: '90%',
  height:'100%;',
  borderRadius: '15px',
  // boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}
const header3 ={
  position:'relative',
  borderRadius: '20px',
  margin:'0 auto',
  width: '38%',
  
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',
  // backgroundSize: 'cover',
  backgroundRepeat: 'no - repeat',
  

}

const menubutton ={
  width:'15px',
  hieght:'15px',
  float:'right',
  
}


// const imgstyle={

// }

export default Header
