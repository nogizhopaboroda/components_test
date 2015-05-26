// component 1
console.log('comp constructor');
var baseElement = require('../base');

require('./component.css');

module.exports = document.registerElement(
    'my-element',
    {
        extends: 'div', // <== IMPORTANT
        prototype: Object.create(
            baseElement.prototype, {

                template: {value: require('../../../tpl.js')},

                blink: {value: function(){
                    var self = this;
                    this.style.background = 'red';
                    setTimeout(function(){
                        self.style.background = '';
                    }, 500);
                }},

                some_method: {value: function(){
                    console.log('some method1');
                }},

                some_accessor: {value: 'im accessor1'}
            })
    }
);
