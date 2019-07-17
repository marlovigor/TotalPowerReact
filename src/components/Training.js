import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';







const Training = (props) => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
        <div style={divcontrol}>
          <Card inverse style={header1}>
            <CardImg width="100%"  src="/img/3074356-barbell_bodybuilding_effort_exercise_fitness_gym_man_muscles_person_strong_training_weightlifting.jpg" />
            <CardImgOverlay>
              <CardTitle style={text}>Becoming Strength</CardTitle>
              <CardText style={text2}>Total training system where your POWER is our Priority</CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
        <div style={divcontrol}>
          <Card inverse style={header1}>
            <CardImg width="100%" src="/img/3074356-barbell_bodybuilding_effort_exercise_fitness_gym_man_muscles_person_strong_training_weightlifting.jpg" />
            <CardImgOverlay>
              <CardTitle style={texts1}>Becoming Strength</CardTitle>
              <CardText style={texts2}>Total training system where your POWER is our Priority</CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      
      <MediaQuery query="(min-device-width: 758px) and (max-device-width: 1024px)">
      <div style={divcontrol2}>
          <Card inverse style={header2}>
            <CardImg width="100%" src="/img/3074356-barbell_bodybuilding_effort_exercise_fitness_gym_man_muscles_person_strong_training_weightlifting.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={texts1_1}>Becoming<br/>Strength</CardTitle>
              <CardText style={texts2_2}>Total training system where your POWER is our Priority</CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
        <div style={divcontrol3}>
          <Card inverse style={header3}>
            <CardImg width="100%" src="/img/3074356-barbell_bodybuilding_effort_exercise_fitness_gym_man_muscles_person_strong_training_weightlifting.jpg" alt="Card image cap" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle style={texts1_2}>Becoming <br/> Strength</CardTitle>
              <CardText style={texts2_3}>Total training system where your POWER is our Priority</CardText>

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
  // borderColor:'rgba(1, 151, 246, 1)',
  borderWidth:' 5px',
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
  width: '30%',
  fontFamily: 'Kanit sans-serif',
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
  width: '30%',
  fontSize: '3.2vw',
  fontFamily: 'Kanit sans-serif',
  float: 'right',
  bottom: '40px',
  left: '20px',

}
//no more mobile display
const divcontrol2 = {
  border:'0px',
  // paddingTop: '10px',
}

const header2 = {
  border:'0px',
  overflow: 'hidden',
  margin: '0 auto',
  width: '100%',
  
  
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}

const texts1_1= {
  margin:'0px',
  position: 'relative',
  top: '40px',
  fontSize: '6.2vw',
  left:'20px',
  color: 'red',
  fontFamily: 'Black Ops One ,cursive',
  width: '50%',
}

const texts2_2 = {
  position: 'relative',
  textAlign:'center',
  width: '40%',
  fontSize: '4.1vw',
  top: '40px',
  fontFamily: 'Anton, sans-serif',
  float: 'right',
  bottom: '80px',
  
  left: '10px',

}

// final desktop

const divcontrol3 = {
  border:'none',
  paddingTop: '0px',
}

const header3 = {
  border:'0px',
  overflow: 'hidden',
  margin: '0 auto',
  width: '100%',
  
  
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',

}

const texts1_2= {
  margin:'0px',
  position: 'relative',
  top: '40px',
  fontSize: '6.2vw',
  left:'20px',
  color: 'red',
  fontFamily: 'Black Ops One ,cursive',
  width: '50%',
}

const texts2_3 = {
  position: 'relative',
  textAlign:'center',
  width: '40%',
  fontSize: '6.2vw',
  top: '-100px',
  fontFamily: 'Anton, sans-serif',
  float: 'right',
  bottom: '80px',
  
  left: '10px',

}



export default Training;