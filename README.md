# BBCarousel

Backbone carousel image slider

## Tools 
* [Yeoman](http://yeoman.io/)
* [Grunt](http://gruntjs.com/)
* [Bower](http://bower.io/)

## Dependencies

* [Backbone](http://backbonejs.org/)
* [Underscore](http://underscorejs.org/)
* [jQuery](http://jquery.com/) 

## Usage

```javascript
var slides = [
	{ 'src': '../images/1.jpg', 'label': 'Slide 1' },
	{ 'src': '../images/2.jpg', 'label': 'Slide 2' },
];

var carousel = new BBCarousel({
	el : "#carousel",
	collection : new Backbone.Collection(slides),
	template : "../templates/bbcarousel.html"
});
```

Parameters 'collection' and 'template' are optional.
You can also use fixed markup. Look at examples.

## Example

View the online [DEMO](http://samosad.github.io/bb-carousel/)

or start local server:

```
$ npm install
$ bower install
$ grunt serve
```

## TODO
* Use Modernizr transition functions
* Add play/pause feature
* Add image circle feature
* Add popup window with big image

## Credits

Created by Aleksey Tabakman ( [@samosad](http://github.com/samosad) )

