import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

import CardColumns from 'react-bootstrap/CardColumns';

import './css/Cards.css';

import Apple from './img/apple-armchair.png';
import Clementine from './img/clementine-clock.png';
import Starfruit from './img/starfruit-stool.png';


import data from './Data.json';



              const newdata= data.listings.map(( data) => {
                  return (
                    
                    <Card key= {data.id} text="black">
                      <Card.Body>
                        <Card.Title>{ data.name}</Card.Title>
                        <div classname="text-primary">
                          <Card.Text >
                              {data.price}
                          </Card.Text>
                        
                          </div>
                        <Card.Img variant="top" src={Starfruit}>

                        </Card.Img>

                      </Card.Body>
                    </Card> 
                    
                  )
                }
              )

              

export default class Cards extends Component {
    render() {
      const style = {
        backgroundImage: Apple
      };
        return (
            <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>
           
        )
    }
}