/* Backbone Carousel
 * Source: https://github.com/samosad/bb-carousel
 *
 * Created by Aleksey Tabakman (@samosad)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function($, _, Backbone) {
    var BBCarousel = Backbone.View.extend({

        events: {
            'click .prev': 'clickPrev',
            'click .next': 'clickNext',
            'click .nav a': 'clickNav'
        },

        initialize: function(options) {
            var self = this,
                options = options || {};
            this.$el.addClass('bbcarousel');
            this.position = 0;
            if (options.template) {
                $.get(options.template, function(data) {
                    self.template = _.template(data);
                    self.render();
                });
            } else {
                self.render();
            }
        },

        render: function() {
            var self = this;
            if (typeof this.template === 'function') {
                this.$el.html(this.template({
                    'slides': this.collection.toJSON()
                }));
            }
            // slight delay to let the DOM rest
            setTimeout(function() {
                self.$slides = self.$el.find('.slide');
                self.$wrapper = self.$el.find('.slides');
                self.slidesWidth = self.$slides.width();
                self.slidesNum = self.$slides.length;
                self.showSlide(0);
            }, 300);
            return this;
        },

        clickPrev: function(e) {
            e.preventDefault();
            if (e.target.classList.contains('disabled')) {
                return false;
            }
            var next = $(this.el).find('.slide.active').prev().index();
            if (next > -1) {
                this.showSlide(next);
            }
        },

        clickNext: function(e) {
            e.preventDefault();
            if (e.target.classList.contains('disabled')) {
                return false;
            }

            var prev = this.$el.find('.slide.active').next().index();
            if (prev > -1) {
                this.showSlide(prev);
            }
        },

        clickNav: function(e) {
            e.preventDefault();
            if (e.target.classList.contains('active')) {
                return false;
            }
            this.showSlide($(e.target).parent().index());
        },

        showSlide: function(num) {
            // console.log('showSlide #' + num);
            this.position = -1 * this.$slides.width() * num;
            this.$wrapper.css('margin-left', this.position + 'px');
            this.$slides.removeClass('active');
            this.$slides[num].classList.add('active');
            this.updateArrows().updateNav();
        },

        updateArrows: function() {
            this.$el.find('.arrow').removeClass('disabled');
            if (this.position === 0) {
                this.$el.find('.arrow.prev').addClass('disabled');
            } else if (this.position === -1 * this.slidesWidth * (this.slidesNum - 1)) {
                this.$el.find('.arrow.next').addClass('disabled');
            }
            return this;
        },

        updateNav: function() {
            var $items = this.$el.find('.nav li'),
                activeSlideNum = this.$el.find('.slide.active').index();
            $items.removeClass('active');
            $items[activeSlideNum].classList.add('active');
            return this;
        }
    });

    // Support module loaders
    if (typeof module === 'object' && module && typeof module.exports === 'object') {
        // Expose as module.exports in loaders that implement CommonJS module pattern.
        module.exports = BBCarousel;
    } else {
        // Register as a named AMD module, used in Require.js
        if (typeof define === 'function' && define.amd) {
            define([], function() {
                return BBCarousel;
            });
        }
    }
    // If there is a window object, that at least has a document property
    if (typeof window === 'object' && typeof window.document === 'object') {
        window.Backbone = Backbone;
        window.BBCarousel = BBCarousel;
    }


})(this.jQuery, this._, this.Backbone);
