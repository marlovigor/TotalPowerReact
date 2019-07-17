import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Spring, animated } from 'react-spring/renderprops';

class Elemt extends React.Component {

  render() {
    return (
      <div>
        <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <div style={divcontrol3}>
          <Card inverse style={header3}>
            <CardImg width="100%" src="http://theathletedaily.com/wp-content/uploads/2017/09/4F7A0312-53.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={text3}>The Athletes</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
</ScrollAnimation>
      </div>
    )
  }
}

const divcontrol3={
  
}


// to make iage resize postion and left or right the image
const header3={
  clipPath: 'polygon(0 0, 0 100%, 100% 49%)',
  height:'40em',
    width: '100%',
  
  
  
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


export default Elemt
