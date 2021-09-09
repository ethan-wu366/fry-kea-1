import React, { Component } from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import ItemData from '../Data.json';


import '../css/Listing.css';

import Apple from '../img/apple-armchair.png';
import Clementine from '../img/clementine-clock.png';
import Starfruit from '../img/starfruit-stool.png';

import Cards from '../Cards';

const Listing = () => {
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
			<Cards></Cards>
			<div class="card" style={{width: "18rem"}}>
					<img src="Apple" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
					</div>
        </div>
        
        );
};

export default Listing;