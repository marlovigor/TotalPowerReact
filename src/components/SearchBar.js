import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import MediaQuery from 'react-responsive';

const SearchBar = (props) => {
  return (
   <div>
     <MediaQuery query="(min-device-width: 280px) and (max-device-width: 758px)">
    <div style={navMainDiv}>
      <br />
      <InputGroup style={navMain}>
        <Input style={hieght} />
        <InputGroupAddon style={searhStyle} addonType="append">
          <InputGroupText>Searh</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
    </div>
    </MediaQuery>
      <MediaQuery query="(min-device-width: 758px) and (max-device-width: 2330px)">
      <div style={navMainDiv2}>
      <br />
      <InputGroup style={navMain2}>
        <Input style={hieght2} />
        <InputGroupAddon style={searhStyle} addonType="append">
          <InputGroupText>Searh</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
    </div>

      </MediaQuery>
       </div>

  );
};

export default SearchBar;


const navMainDiv={
  // border: '5px solid orange',
  positon:'absolute',
  width:'100%',
  top:'20px',

}

const navMain = {
  positon:'absolute',
  margin:'0 auto',
  top:'80px',
  width:'80%',
  height:'20px',

  
}

const hieght ={
  height:'25px',
  border: '1px solid red',
}

const searhStyle ={
  height:'25px',
  border: '1px solid red',
}
////////
const navMainDiv2={
  // border: '5px solid orange',
  positon:'relative',
  margin:'0 auto',
  maxWidth:'600px',
  top:'-10px',

}

const navMain2 = {
  positon:'absolute',
  margin:'0 auto',
  top:'-30px',
  Width:'100px',
  height:'20px',

  
}

const hieght2 ={
  height:'25px',
  border: '1px solid red',
}

const searhStyle2 ={
  height:'25px',
  border: '1px solid red',
}