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
                    <a href="/listing">
                    <Card key= {data.id} text="black" style={{width:"20rem", height:"8rem"}}>
                      <Card.Body>
                        <Card.Title>{ data.name}</Card.Title>
                        <div>
                          <Card.Text >
                              {data.price}
                          </Card.Text>
                        
                          </div>
                        <Card.Img variant="top" src={Starfruit}>

                        </Card.Img>

                      </Card.Body>
                    </Card> 
                    </a>
                  )
                }
              )

              

export default class Cards extends Component {
    render() {
        return (
            <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>
           
        )
    }
}