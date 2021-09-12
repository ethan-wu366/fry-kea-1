import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

import CardColumns from 'react-bootstrap/CardColumns';

import './css/Cards.css';

import Apple from './img/apple-armchair.png';
import Clementine from './img/clementine-clock.png';
import Starfruit from './img/starfruit-stool.png';


import data from './Data.json';

  //function to get id 
  /** data.image doesn't work, not linked to file
   * Render Reviews with Array
  */

              const newdata= data.listings.map((data) => {
                  return (
                    
                    <Card key= {data.id} text="black" style={{width:"30rem", height:"40rem"}}>
                      <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>Tags: {data.tags}</Card.Text>
                        <Card.Text>Tags: {data.description}</Card.Text>
                        <div>
                          <Card.Title>Reviews</Card.Title>
                          <Card.Text >
                              
                          </Card.Text>
                        
                          </div>
                        <Card.Img variant="top" src={Apple}> 
                        </Card.Img>
                        
                      </Card.Body>
                    </Card>
                  )
                }
              )

              

export default class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idNumber: null,
    };
  }
  //handle visibility of other unclicked cards
  handleSwitch(int) {
    this.setState({ idNumber: int });
  }
    render() {
        return (
            <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>
           
        )
    }
}