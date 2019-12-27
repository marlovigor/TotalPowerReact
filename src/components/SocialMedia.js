import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

export class socialMedia extends Component {
    render() {
        return (
            <div>
            <div>
            <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
            <div style={socialDiv1}>
                <ul style={sociallist1}>
                    <li ><a><img style={socialIcon1} src="https://image.flaticon.com/icons/png/512/1051/1051309.png" /></a> </li>
                    <li ><a><img style={socialIcon1} src="https://image.flaticon.com/icons/png/512/1051/1051313.png" /></a> </li>
                    <li ><a><img style={socialIcon1} src="https://image.flaticon.com/icons/png/512/1384/1384012.png" /></a> </li>

                </ul>

            </div>
            </MediaQuery>
            </div>
            <div>
            <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">



            <div style={socialDiv}>
                <ul style={sociallist}>
                    <li ><a><img style={socialIcon} src="https://image.flaticon.com/icons/png/512/1051/1051309.png" /></a> </li>
                    <li ><a><img style={socialIcon} src="https://image.flaticon.com/icons/png/512/1051/1051313.png" /></a> </li>
                    <li ><a><img style={socialIcon} src="https://image.flaticon.com/icons/png/512/1384/1384012.png" /></a> </li>

                </ul>
                
            </div>
            </MediaQuery>
            </div>
            <div>
            <MediaQuery query="(min-device-width: 758px) and (max-device-width: 2000px)">



            <div style={socialDiv2}>
                <ul style={sociallist2}>
                    <li ><a><img style={socialIcon2} src="https://image.flaticon.com/icons/png/512/1051/1051309.png" /></a> </li>
                    <li ><a><img style={socialIcon2} src="https://image.flaticon.com/icons/png/512/1051/1051313.png" /></a> </li>
                    <li ><a><img style={socialIcon2} src="https://image.flaticon.com/icons/png/512/1384/1384012.png" /></a> </li>

                </ul>
                
            </div>
            </MediaQuery>
            </div>
            </div>
        )
    }
}

export default socialMedia

////mobile

const socialDiv1 = {
    // border: '10px solid black',
    width: '1em',
    height: '80px',
    position: 'absolute',
    top: '5px',
    right: '18px'




}

const sociallist1 = {

    position: 'absolute',
    width: '100%',
    height: '100px',
    listStyle: 'none',
    // border: '5px solid green',





}

const socialIcon1 = {
    margin: '5px',
    // float: 'left',
    width: '20px',
    // border: '5px solid green',



}


/////




const socialDiv = {
    // border: '10px solid black',
    width: '150px',
    height: '80px',
    position: 'absolute',
    top: '-10px',
    right: '0'




}

const sociallist = {

    position: 'absolute',
    width: '100%',
    height: '100px',
    listStyle: 'none',
    // border: '5px solid green',





}

const socialIcon = {
    margin: '10px',
    float: 'left',
    width: '25px',
    // border: '5px solid green',



}
//////
const socialDiv2 = {
    // border: '10px solid black',
    width: '200px',
    height: '80px',
    position: 'relative',
    margin:'auto',
    top: '-10px',
    left: '12rem',
  




}

const sociallist2 = {

    position: 'absolute',
    width: '100%',
    height: '100px',
    listStyle: 'none',
    // border: '5px solid green',





}

const socialIcon2 = {
    margin: '10px',
    float: 'left',
    width: '25px',
    // border: '5px solid green',



}