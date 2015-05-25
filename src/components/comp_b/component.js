console.log('comp2 constructor');

var baseElement = require('../base');

module.exports = document.registerElement(
    'my-element2',
    {
        extends: 'div', // <== IMPORTANT
        prototype: Object.create(
            baseElement.prototype, {

                some_method: {value: function(){
                    console.log('some method2');
                }},

                some_accessor: {value: 'im accessor2'}
            })
    }
);
