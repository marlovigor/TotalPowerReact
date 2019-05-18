import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import MediaQuery from 'react-responsive';


export default class Example extends React.Component {
  render() {
    return (
      <div>
        {/* <MediaQuery query="(min-device-width: 284px) and (max-device-width: 380px)">
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
          </MediaQuery> */}
       
        

       <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
          <div style={container}>
            <Nav style={navbarstyle}>
              <NavItem style={navtext} >
                <NavLink href="#" style={navtextcolr} >Athletes</NavLink>
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

        <MediaQuery query="(min-device-width: 758px) and (max-device-width: 1024px)">
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
        <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
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
  paddingTop:'10px',
  border:'none',
}
const navbarstyle = {
  paddingTop: '10px',
  backgroundColor: 'rgba(68, 143, 163, 1)',
  margin: '0 auto',
  width: '80%',
  textAlign: 'center',
  borderRadius: '15px',
  boxShadow: '0px 32px 32px rgba(0, 0, 0, 0.25)',
}
const navbarstyle2 = {
  border:'none',
  paddingTop: '10px',
  backgroundColor: 'rgba(68, 143, 163, 1)',
  margin: '0 auto',
  width: '100%',
  height:'20%',
  textAlign: 'center',
 
}
const navbarstyle3 = {
  border:'none',
  // paddingTop: '10px',
  backgroundColor: 'rgba(68, 143, 163, 1)',
  margin: '0 auto',
  width: '100%',
  textAlign: 'center',

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