console.log('comp constructor');

module.exports = {
	foo: "bar"
};


window.MyElement = document.registerElement(
    'my-element',
    {
        extends: 'div', // <== IMPORTANT
        prototype: Object.create(
            HTMLElement.prototype, {

                some_method: {value: function(){
                    console.log('some method');
                }},

                createdCallback: {value: function() {
                    console.log('here I am ^_^ ');
                    console.log('with content: ', this.textContent);
                    this.addEventListener("click", function(){
                        alert(this.getAttribute("is"));
                    })
                }},
                attachedCallback: {value: function() {
                    console.log('live on DOM ;-) ');
                }},
                detachedCallback: {value: function() {
                    console.log('leaving the DOM :-( )');
                }},
                attributeChangedCallback: {value: function(
                    name, previousValue, value
                    ) {
                    if (previousValue == null) {
                        console.log(
                            'got a new attribute ', name,
                            ' with value ', value
                        );
                    } else if (value == null) {
                        console.log(
                            'somebody removed ', name,
                            ' its value was ', previousValue
                        );
                    } else {
                        console.log(
                            name,
                            ' changed from ', previousValue,
                            ' to ', value
                        );
                    }
                }}
            })
    }
);

var MyElement2 = document.registerElement(
    'my-element2',
    {
        extends: 'div', // <== IMPORTANT
        prototype: Object.create(
            MyElement.prototype, {

                some_method: {value: function(){
                    console.log('some method2');
                }},

                some_accessor: {value: 'im accessor'}
            })
    }
);

