import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

import CardColumns from 'react-bootstrap/CardColumns';

import '../css/Cards.css';

import Apple from '../img/apple-armchair.png';
import Clementine from '../img/clementine-clock.png';
import Starfruit from '../img/starfruit-stool.png';


import data from '../Data.json';



              const  newdata= data.listings.map( ( data) => {
                  return  (
                    <Card key= {data.id}>
                      <Card.Body>
                        <Card.Title>{ data.name}</Card.Title>
                        <Card.Text>
                              {data.description}
                        </Card.Text>

                        <a className="btn-primary"
                          href={data.image} 
                          target="_blank"
                          rel=" noopener noreferrer"
                           > 
                          Download
                        </a>

                      </Card.Body>
                    </Card> 
                  
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