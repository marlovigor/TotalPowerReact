import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import MediaQuery from 'react-responsive';

const Product = (props) => {
    return (
      <div>
        <MediaQuery query="(min-device-width: 284px) and (max-device-width: 480px)">
          <div style={divcontrol}>
            <Card inverse style={header1}>
              <CardImg width="100%" style={{borderRadius:'15px'}} src="https://smhttp-ssl-59557.nexcesscdn.net/media/catalog/product/cache/1/image/750x/17f82f742ffe127f42dca9de82fb58b1/w/i/wide-alt.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle style={text}>Shop </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 480px) and (max-device-width: 758px)">
          <div style={divcontrol}>
            <Card inverse style={header1}>
              <CardImg width="100%" style={{borderRadius:'15px'}} src="https://smhttp-ssl-59557.nexcesscdn.net/media/catalog/product/cache/1/image/750x/17f82f742ffe127f42dca9de82fb58b1/w/i/wide-alt.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle style={text}>Shop </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 758px) and (max-device-width: 1024px)">
          <div style={divcontrol3}>
            <Card inverse style={header3}>
              <CardImg width="100%" src="https://smhttp-ssl-59557.nexcesscdn.net/media/catalog/product/cache/1/image/750x/17f82f742ffe127f42dca9de82fb58b1/w/i/wide-alt.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle style={text}>Shop </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </MediaQuery>
        
      </div>
    );
  };
const divcontrol={
    
    margin:'0 auto',
    // borderWidth:' 5px',
    width: '95%',
    height:'100%;',
    // borderRadius:'15px',
    
}

const header1={
    borderRadius:'15px',
    position :'relative',
    top:'15px',
    margin:'0 auto',
    borderWidth:' 5px',
    width: '90%',
    height:'100%;',

}

const text={

}



// 
const divcontrol3={
    border:'2px solid rgb(148, 45, 45)',
    right:'200px',
    border:'none',

    width: '90%',
    position:'relative',
    // borderRadius: '15px',
    // paddingTop:'10px',
  }
  
  const header3={
      width:'20px',
    border:'none',
    margin:'0 auto',
    width: '40%',
  
  
    
    height:'100%',
    
    
  }


export default Product
