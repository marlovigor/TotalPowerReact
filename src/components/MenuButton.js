import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MediaQuery from 'react-responsive';


export default class MenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        
      <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
      <div style={buttonDiv1}>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  style={menubutton1}>
          Menu
        </DropdownToggle>
        <DropdownMenu style={menubutton2}>
        <DropdownItem>Home</DropdownItem>
        <DropdownItem>Meets</DropdownItem>
        <DropdownItem>Gear</DropdownItem>
          <DropdownItem>Athletes</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
      <div style={buttonDiv2}>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  style={menubutton2}>
          Menu
        </DropdownToggle>
        <DropdownMenu style={menubutton2}>
        <DropdownItem>Home</DropdownItem>
        <DropdownItem>Meets</DropdownItem>
        <DropdownItem>Gear</DropdownItem>
          <DropdownItem>Athletes</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      </MediaQuery>
      </div>
    );
  }
}

const buttonDiv1 ={
  position:'relative',
  // border: '1px solid red',
  top:'10px',
  left:'00px',
  width:'50%',
  
  
  
}

const menubutton1 ={
  
  paddingTop:'0px',
  borderRadius:'5px',
  paddingBottom:'0px',
  paddingRight:'0px',
  paddingLeft:'5px',
  color:'white',
  fontSize:'1.1em',
  fontWeight:'bold',
  backgroundColor:'onyx',
  width:'3.5rem',
   border: '1px solid red',
  
}

const buttonDiv2 ={
  position:'relative',
  // border: '1px solid red',
  top:'10px',
  left:'00px',
  width:'50%',
  
}


const menubutton2 ={
  paddingTop:'0px',
  borderRadius:'5px',
  paddingBottom:'0px',
  paddingRight:'0px',
  paddingLeft:'5px',
  color:'white',
  fontSize:'1.1em',
  fontWeight:'bold',
  backgroundColor:'onyx',
  width:'66px',
  
}
