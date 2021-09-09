import React, { Component } from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import ItemData from '../Data.json';


import '../css/Landing.css';

import Apple from '../img/apple-armchair.png';
import Clementine from '../img/clementine-clock.png';
import Starfruit from '../img/starfruit-stool.png';

import Cards from '../Cards';

const Landing = () => {
	$(document).ready(function () {
		/* Check the location of each desired element */
		$('.fade-in').each(async function (i) {
			var top_of_object = $(this).offset().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_of_object) {
				$(this).animate({ opacity: '1' }, 550);
			}
		});
		/* Every time the window is scrolled */
		$(window).scroll(async function () {
			/* Check the location of each desired element */
			$('.fade-in').each(function (i) {
				var top_of_object = $(this).offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > top_of_object) {
					$(this).animate({ opacity: '1' }, 350);
				}
			});
		});
	});
	return (
        <div classname="landing">
            <SiteNavbar sticky="false" bg="transparent" />
			<div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src={Apple} class="img-fluid" alt=""/>
            </div>
            <div class="col">
                <div class="card-block px-2">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">BUTTON</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
            Footer stating cats are CUTE little animals
        </div>
  </div>
            <p>Hello</p>
			<Cards></Cards>
			<div classname="rectangle top">
			<img
					src={Apple}
					alt="apple"
					className="landing-logo selectDisable"
				/>
			</div>
        </div>
        
        );
};

export default Landing;