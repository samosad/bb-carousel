/*global bbCarousel, $*/


window.APP = {
    Models: {},
    Collections: {
        slides: new Backbone.Collection([
            {
                'src': '../images/7.jpg',
                'label': 'Slide 7'
            },
            {
                'src': '../images/6.jpg',
                'label': 'Slide 6'
            },
            {
                'src': '../images/5.jpg',
                'label': 'Slide 5'
            },
            {
                'src': '../images/4.jpg',
                'label': 'Slide 4'
            },
            {
                'src': '../images/3.jpg',
                'label': 'Slide 3'
            },
            {
                'src': '../images/2.jpg',
                'label': 'Slide 2'
            },
            {
                'src': '../images/1.jpg',
                'label': 'Slide 1'
            }
        ])
    },
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from main.js!');

        // static carousel
        APP.Views.carousel = new BBCarousel({
            el: '#carousel'
        });

        // dinamic carousel
        APP.Views.carousel2 = new BBCarousel({
            el: '#carousel2',
            collection: APP.Collections.slides,
            template: 'bbcarousel.html'
        });
        APP.Views.carousel2.render();
    }
};

$(document).ready(function () {
    'use strict';
    APP.init();
});
