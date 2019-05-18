import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';

const Athletes = (props) => {
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
      <div style={divcontrol3}>
          <Card inverse style={header3}>
            <CardImg width="100%" src="https://madnessmedia.net/wp-content/uploads/2018/08/Thumb-no-bars-1-8-758x426.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={text3}>The Athletes</CardTitle>
              

            </CardImgOverlay>
          </Card>
        </div>
      
      
      </MediaQuery>
      <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
      <div style={divcontrol3}>
          <Card inverse style={header3}>
            <CardImg width="100%" src="https://madnessmedia.net/wp-content/uploads/2018/08/Thumb-no-bars-1-8-758x426.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={text3}>The Athletes</CardTitle>
              

            </CardImgOverlay>
          </Card>
        </div>
      
      
      </MediaQuery>

    </div>
  );
};

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
  border:'2px solid rgb(148, 45, 45)',
  left:'200px',
  border:'none',
  width: '100%',
  position:'absolute',
  // borderRadius: '15px',
  // paddingTop:'10px',
}

const header3={
  border:'none',
  margin:'0 auto',
  width: '40%',


  
  height:'100%',
  
  
}

const text3={
  position: 'relative',
  fontSize: '3.2vw',
  top:'80px',
  float:'right',
  left:'10px',
  color:'orange',
  fontFamily: 'Gugi, cursive',


}
export default Athletes;