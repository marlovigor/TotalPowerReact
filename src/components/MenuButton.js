import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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
      <Dropdown style={menubuttonspace} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={menubutton}>
          menu
        </DropdownToggle>
        <DropdownMenu style={menubutton}>
        <DropdownItem>Meets</DropdownItem>
        <DropdownItem>Gear</DropdownItem>
          <DropdownItem>Athletes</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const menubuttonspace ={
  float:'left',
  top:'-16px',
  right:'20px',
  
}

const menubutton ={
  paddingTop:'0px',
  borderRadius:'15px',
  paddingBottom:'0px',
  paddingRight:'0px',
  paddingLeft:'0px',
  color:'black',
  fontSize:'0.8em',
  backgroundColor:'white',
  width:'66px',
  
}


