console.log('comp constructor');

var baseElement = require('../base');

module.exports = document.registerElement(
    'my-element',
    {
        extends: 'div', // <== IMPORTANT
        prototype: Object.create(
            baseElement.prototype, {

                some_method: {value: function(){
                    console.log('some method1');
                }},

                some_accessor: {value: 'im accessor1'}
            })
    }
);
