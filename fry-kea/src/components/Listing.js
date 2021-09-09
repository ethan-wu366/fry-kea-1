import React, { Component } from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import ItemData from '../Data.json';


import '../css/Listing.css';

import Apple from '../img/apple-armchair.png';
import Clementine from '../img/clementine-clock.png';
import Starfruit from '../img/starfruit-stool.png';

import Cards from '../Cards';
import ListingCards from '../ListingCard';

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
			<ListingCards></ListingCards>
			
        </div>
        
        );
};

export default Listing;