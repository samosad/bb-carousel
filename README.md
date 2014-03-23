# BBCarousel

Backbone carousel image slider

## Tools 
* yeoman
* bower
* grunt

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

var view = new BBCarousel({
	el : "#carousel",
	collection : new Backbone.Collection(slides),
	template : "../templates/bbcarousel.html"
});
```

For local view:

```
$ npm install
$ bower install
$ grunt serve
```

## Example

View the [DEMO](http://samosad.github.io/bb-carousel/)


## Credits

Created by Aleksey Tabakman ( [@samosad](http://github.com/samosad) )

