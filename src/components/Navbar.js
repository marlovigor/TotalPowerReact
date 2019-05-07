import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import MediaQuery from 'react-responsive';


export default class Example extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 380px) and (max-device-width: 580px)">
          <div style={container}>
            <Nav style={navbarstyle}>
              <NavItem style={navtext} >
                <NavLink href="#" style={navtextcolr} >Athletes | </NavLink>
              </NavItem>
              <NavItem style={navtext}>
                <NavLink style={navtextcolr} href="#">Sponsors</NavLink>
              </NavItem>
              <NavItem style={navtext}>
                <NavLink style={navtextcolr} href="#">Gear</NavLink>
              </NavItem>
              <NavItem style={navtext}>
                <NavLink style={navtextcolr} href="#">Meets</NavLink>
              </NavItem>
            </Nav>
          </div>
        </MediaQuery>

        <MediaQuery query="(min-device-width: 580px) and (max-device-width: 780px)">
          <div style={container}>

            <Nav style={navbarstyle2}>
              <NavItem style={navtext2} >
                <NavLink style={navtextcolr} href="#">Athletes</NavLink>
              </NavItem>
              <NavItem style={navtext2}>
                <NavLink style={navtextcolr} href="#">Sponsors</NavLink>
              </NavItem>
              <NavItem style={navtext2}>
                <NavLink style={navtextcolr} href="#">Gear</NavLink>
              </NavItem>
              <NavItem style={navtext2}>
                <NavLink style={navtextcolr} href="#">Meets</NavLink>
              </NavItem>
            </Nav>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 780px) and (max-device-width: 2200px)">
          <div style={container3}>

            <Nav style={navbarstyle3}>
              <NavItem style={navtext3} >
                <NavLink style={navtextcolr} href="#">Athletes</NavLink>
              </NavItem>
              <NavItem style={navtext3}>
                <NavLink style={navtextcolr} href="#">Sponsors</NavLink>
              </NavItem>
              <NavItem style={navtext3}>
                <NavLink style={navtextcolr} href="#">Gear</NavLink>
              </NavItem>
              <NavItem style={navtext3}>
                <NavLink style={navtextcolr} href="#">Meets</NavLink>
              </NavItem>
            </Nav>
          </div>
        </MediaQuery>
      </div>
    );
  }
}



// containers
const container3={
  paddingTop:'0px',
}

// containers//




const container={
  paddingTop:'5px',
}
const navbarstyle = {
  paddingTop: '10px',
  backgroundColor: 'orange',
  margin: '0 auto',
  width: '80%',
  textAlign: 'center',
  borderRadius: '15px',
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',
}
const navbarstyle2 = {
  paddingTop: '10px',
  backgroundColor: '#D8E7E4',
  margin: '0 auto',
  width: '38%',
  height:'20%',
  textAlign: 'center',
  borderRadius: '15px',
}
const navbarstyle3 = {
  // paddingTop: '10px',
  backgroundColor: '#D8E7E4',
  margin: '0 auto',
  width: '38%',
  textAlign: 'center',
  borderRadius: '2px',
  height:'40px',
}

const navtext = {
  color: 'white',
  margin: '0 auto',
  fontSize: '3.1vw',

}
const navtext2 = {
  color: 'white',
  margin: '0 auto',
  fontSize: '1.3vw',

}
const navtext3 = {
  color: 'white',
  margin: '0 auto',
  fontSize: '1.1vw',

}

const navtextcolr={
  // color:'white',
  fontFamily: 'Lato, sans-serif',
}