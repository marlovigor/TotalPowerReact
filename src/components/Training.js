import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';

const Training = (props) => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
        <div style={divcontrol1}>
          <Card inverse style={header0}>
            <CardImg width="100%"  src="https://musclemecca.com/attachment.php?attachmentid=17050&d=1521455185" />
            <CardImgOverlay>
            <CardTitle style={texts0}>Training For Your Next Meet<br/>Find a Coach HERE</CardTitle>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
        <div style={divcontrol}>
          <Card inverse style={header1}>
            <CardImg width="100%" src="https://musclemecca.com/attachment.php?attachmentid=17050&d=1521455185" />
            <CardImgOverlay>
              <CardTitle style={texts1}>Training For Your Next Meet<br/>Find a Coach HERE</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      
      <MediaQuery query="(min-device-width: 758px) and (max-device-width: 2000px)">
      <div style={divcontrol2}>
          <Card inverse style={header2}>
            <CardImg width="100%" src="https://musclemecca.com/attachment.php?attachmentid=17050&d=1521455185" />
            <CardImgOverlay>
              <CardTitle style={texts2}>Training For Your Next Meet<br/>Find a Coach HERE</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      {/* <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
        <div style={divcontrol3}>
          <Card inverse style={header3}>
            <CardImg width="100%" src="/img/3074356-barbell_bodybuilding_effort_exercise_fitness_gym_man_muscles_person_strong_training_weightlifting.jpg" alt="Card image cap" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={texts1_2}>Becoming <br/> Strength</CardTitle>
              <CardText style={texts2_3}>Total training system where your POWER is our Priority</CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery> */}
    </div>
  );
};

// mobiel

const divcontrol1 = {
  position:'relative',
  // left:'100px',
  margin:'0 auto',
  width:'80%',
  top:'100px',
  

}

const header0 = {
  width: '100%',
  height:'100%;',
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',
  border: '5px solid white',

}

const texts0 = {
  position: 'absolute',
  top: '0px',
  paddingTop:'60px',
  left:'0px',
  color: 'red',
  backgroundColor:'rgba(18, 36, 54, 0.856)',
  height:'12.5em',
  width: '40%',
  fontWeight:'boldest',
  fontSize: '3.5vw',
  textAlign:'center',
  fontFamily: 'Alfa Slab One, cursive',
  textShadow: '4px 4px 4px #000',
}

// query="(min-device-width: 480px) and (max-device-width: 758px)
const divcontrol = {
position:'relative',
// left:'100px',
margin:'0 auto',
top:'100px',
maxWidth:'500px',

//  border: '1px solid red',

}

// const imgstyle ={
//   maxWidth:'80px',

// }

const header1 = {
  // borderColor:'rgba(1, 151, 246, 1)',
  // borderWidth:' 5px',
  // overflow: 'hidden',
  // position:'relative',
  // margin:'0 auto',
  width: '100%',
  height:'100%;',
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}

const texts1 = {
  position: 'absolute',
  top: '0px',
  paddingTop:'60px',
  left:'0px',
  color: 'red',
  backgroundColor:'rgba(18, 36, 54, 0.856)',
  height:'280px',
  width: '40%',
  fontWeight:'boldest',
  fontSize: '3.5vw',
  textAlign:'center',
  fontFamily: 'Alfa Slab One, cursive',
  textShadow: '4px 4px 4px #000',
}


// 


//no more mobile display
const divcontrol2 = {
  position:'relative',
  // left:'100px',
  margin:'0 auto',
  top:'-20px',
  maxWidth:'600px',
}

const header2 = {
  width: '100%',
  height:'100%;',
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}

const texts2= {
  position: 'absolute',
  top: '0px',
  paddingTop:'60px',
  left:'0px',
  color: 'red',
  backgroundColor:'rgba(18, 36, 54, 0.856)',
  height:'336px',
  width: '40%',
  fontWeight:'boldest',
  fontSize: '2.5vw',
  textAlign:'center',
  fontFamily: 'Alfa Slab One, cursive',
  textShadow: '4px 4px 4px #000',
}



// final desktop

// const divcontrol2 = {
//   border:'none',
//   paddingTop: '0px',
// }

// const header2 = {
//   border:'0px',
//   overflow: 'hidden',
//   margin: '0 auto',
//   width: '100%',
  
  
//   boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

// }

// const texts1_2= {
//   margin:'0px',
//   position: 'relative',
//   top: '40px',
//   fontSize: '6.2vw',
//   left:'20px',
//   color: 'red',
//   fontFamily: 'Black Ops One ,cursive',
//   width: '50%',
// }

// const texts2_3 = {
//   position: 'relative',
//   textAlign:'center',
//   width: '40%',
//   fontSize: '6.2vw',
//   top: '-100px',
//   fontFamily: 'Anton, sans-serif',
//   float: 'right',
//   bottom: '80px',
  
//   left: '10px',

// }



export default Training;