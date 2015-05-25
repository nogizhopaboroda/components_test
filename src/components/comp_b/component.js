// component 2
//
console.log('comp2 constructor');

var baseElement = require('../base');

module.exports = document.registerElement(
    'my-element2',
    {
        extends: 'div', // <== IMPORTANT
        prototype: Object.create(
            baseElement.prototype, {

                blink: {value: function(){
                    var self = this;
                    this.style.background = 'green';
                    setTimeout(function(){
                        self.style.background = '';
                    }, 500);
                }},

                some_method: {value: function(){
                    console.log('some method2');
                }},

                some_accessor: {value: 'im accessor2'}
            })
    }
);
