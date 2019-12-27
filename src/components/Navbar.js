import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import MediaQuery from 'react-responsive';


export default class Navbar extends React.Component {
  render() {
    return (
      <div>
       {/* <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
          <div style={container}>
            <Nav style={navbarstyle}>
            
            <NavItem style={navtext}>
                <NavLink style={navtextcolr} href="#">Home</NavLink>
              </NavItem>
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
        </MediaQuery> */}

        <MediaQuery query="(min-device-width: 758px) and (max-device-width: 2000px)">
          <div style={container1}>

            <Nav style={navbarstyle2}>
            <NavItem style={navtext2}>
                <NavLink style={navtextcolr} href="#">Home</NavLink>
              </NavItem>
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
        {/* <MediaQuery query="(min-device-width: 1024px) and (max-device-width: 2000px)">
          <div style={container3}>

            <Nav style={navbarstyle3}>
            <NavItem style={navtext3}>
                <NavLink style={navtextcolr} href="#">Home</NavLink>
              </NavItem>
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
        </MediaQuery> */}
      </div>
    );
  }
}



// containers
const container3={
  paddingTop:'0px',
}

// containers//



// query="(min-device-width: 480px) and (max-device-width: 758px)"




// min-device-width: 758px) and (max-device-width: 1024px
const container1={
  position:'relative',
  margin:'0 auto',
  left:'20%',
  top:'-20px',
  width:'55%',
  // border: '10px solid red',
 
}
const navbarstyle2 = {
  position:'relative',
  margin: '0 auto ',
  left:'0em',
 
  textAlign: 'center',

}
const navtext2 ={

}
const navtextcolr={
  fontSize:'0.5rem',

}



