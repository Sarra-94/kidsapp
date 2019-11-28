import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";

const Cardcomp=(props)=>{
  const {card}=props
  const { Meta } = Card;
  
  console.log(card)
  
    return   (
       <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>   

        
      )
    
  }

export default Cardcomp;
