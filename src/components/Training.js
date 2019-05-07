import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';

const Training = (props) => {
  return (
    <div>
      <MediaQuery maxDeviceWidth={380}>
        <div style={divcontrol}>
          <Card inverse style={header1}>
            <CardImg width="100%"  src="https://winthemes.me/i/c/720x380//media/629/image00005.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={text}>Becoming Strength</CardTitle>
              <CardText style={text2}>Total traing system where your POWER is our Priority</CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 379px) and (max-device-width: 580px)">
        <div style={divcontrol}>
          <Card inverse style={header1}>
            <CardImg width="100%" src="https://winthemes.me/i/c/720x380//media/629/image00005.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={texts1}>Becoming Strength</CardTitle>
              <CardText style={texts2}>Total traing system where your POWER is our Priority</CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 580px) and (max-device-width: 780px)">
        <div style={divcontrol2}>
          <Card inverse style={header2}>
            <CardImg width="100%" src="https://winthemes.me/i/c/720x380//media/629/image00005.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={texts1_1}>Becoming Strength</CardTitle>
              <CardText style={texts2_2}>Total traing system where your POWER is our Priority</CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 780px) and (max-device-width: 2200px)">
        <div style={divcontrol3}>
          <Card inverse style={header3}>
            <CardImg width="100%" src="https://winthemes.me/i/c/720x380//media/629/image00005.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={texts1_2}>Becoming Strength</CardTitle>
              <CardText style={texts2_3}>Total traing system where your POWER is our Priority</CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
    </div>
  );
};



const divcontrol = {
  paddingTop: '10px',
  height:'25%',
}

const header1 = {

  overflow: 'hidden',
  // position:'relative',
  margin:'0 auto',
  width: '80%',
  height:'100%;',
  borderRadius: '15px',
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}

const text = {
  position: 'relative',
  top: '-5px',
  color: 'orange',
  width: '50%',
  fontSize: '3.2vw',
}

const text2 = {
  position: 'relative',
  width: '45%',
  fontSize: '2.7vw',
  float: 'right',
  bottom: '35px',
  left: '20px',

}
// size up

const texts1 = {
  position: 'relative',
  top: '-5px',
  color: 'orange',
  width: '50%',
}

const texts2 = {
  position: 'relative',
  width: '45%',
  fontSize: '3.2vw',
  float: 'right',
  bottom: '40px',
  left: '20px',

}
//no more mobile display
const divcontrol2 = {
  paddingTop: '10px',
}

const header2 = {
  overflow: 'hidden',
  margin: '0 auto',
  width: '38%',
  height: '15%',
  borderRadius: '15px',
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}

const texts1_1= {
  position: 'relative',
  top: '-20px',
  fontSize: '2.4vw',
  color: 'orange',
  width: '50%',
}

const texts2_2 = {
  position: 'relative',
  width: '45%',
  fontSize: '2.4vw',
  float: 'right',
  bottom: '80px',
  left: '20px',

}

// final desktop

const divcontrol3 = {
  paddingTop: '0px',
}

const header3 = {
  overflow: 'hidden',
  margin: '0 auto',
  width: '38%',
  height: '15%',
  
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}

const texts1_2= {
  position: 'relative',
  top: '-20px',
  fontSize: '2.5vw',
  color: 'orange',
  width: '50%',
}

const texts2_3 = {
  position: 'relative',
  width: '30%',
  color: 'orange',
  fontSize: '1.2vw',
  float: 'right',
  bottom: '70px',
  left: '20px',

}



export default Training;