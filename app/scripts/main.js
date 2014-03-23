/*global bbCarousel, $*/


window.APP = {
    Models: {},
    Collections: {
        slides: new Backbone.Collection([
            {
                'src': 'http://www.nature.org/cs/groups/webcontent/@photopublic/documents/media/mama-and-baby-bears-600x400.jpg',
                'label': 'Slide 7'
            },
            {
                'src': 'http://cocktailswithmom.com/wp-content/uploads/2011/11/Coca-Cola-Polar-Bear-Small-600x400.jpg',
                'label': 'Slide 6'
            },
            {
                'src': 'http://static.environmentalgraffiti.com/sites/default/files/images/polar-bear-swimming.img_assist_custom-600x400.jpg',
                'label': 'Slide 5'
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
