import React, { Component } from 'react'

export default class Rights extends Component {
    render() {
        return (
            <div>
                <div style={container}>
                    <div>
                    <h1 style={right}>2019 all rights reserved</h1>
                    </div>
                    <div>
                    <h2 style={sponsor}>sponsors</h2>
                    </div>
                    <div style={listcontainer}>
                    <ul style={listmain}>
                        <li style={lis}>Rouge - </li>
                        <li style={lis}>EliteFTS - </li>
                        <li style={lis}>SuperTraining - </li>
                        <li style={lis}>Exile Fitness - </li> 
                         </ul>
                         </div>

                </div>
                
            </div>
        )
    }
}


const container={
    // border:'5px solid rgb(148, 45, 45)',
    position:'relative',
    margin:'0 auto',
    width:'90%',
    paddingTop:'40px',
    top:'20px',


} 

const sponsor={
    color:'red',
    textAlign:'center',
    fontSize:'1.2em',
    fontWeight:'bold',


}

const right={

   color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:'2.1em',
    

}

const listcontainer={
    


}
const listmain={
    position:'relative',
    textAlign:'center',
    fontSize:'2.2em',
    color:'white',
    listStyle:'none',
    width:'100%',
    

}

const lis={
    display:'inline',
   textAlign:'cener',
    margin:'10px',
}