import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';
import MenuButton from './MenuButton';


const Header = (props) => {
 
  return (
    <div>
    <MediaQuery maxDeviceWidth={380}>
    <div style={header1}>
      <Card inverse >
        <CardImg style={imgstyle}width="100%" height='15%' src="http://sfwallpaper.com/images/weightlifting-wallpapers-10.jpg" />
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
      <Card inverse>
        <CardImg width="100%" src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/05/05/945625dd9c15f1b.jpg" />
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
fontSize:'9vw',
position:'relative',
right:'15px',
top:'20px',
color:'red',
fontFamily: 'Lato, sans-serif',



}
const title2={
  textAlign:'center',
  top:'60px',
  fontSize:'8vw',
  margin:'0 auto',
  color:'blue',
  fontFamily: 'Lato, sans-serif',
  
  
  
  }

  const title3={
    textAlign:'center',
    top:'60px',
    fontSize:'7vw',
    margin:'0 auto',
    color:'yellow',
    
        fontFamily: 'Lato, sans-serif',
    
    
    
    }


const header1 ={
  // position:'relative',
  borderRadius: '50px',
  margin:'0 auto',
  width: '85%',
  height:'15px',
  left:'15px',
  
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no - repeat',
  

}
const header3 ={
  position:'relative',
  borderRadius: '20px',
  margin:'0 auto',
  width: '55%',

  // backgroundSize: 'cover',
  backgroundRepeat: 'no - repeat',
  

}

const menubutton ={
  width:'15px',
  hieght:'15px',
  float:'right',
}


const imgstyle={

}

export default Header
