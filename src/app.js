require('document-register-element/build/document-register-element.max');

require('./components/comp_a/component');
require('./components/comp_b/component');

console.log('app constructor');

window.addEventListener('DOMContentLoaded', function(){
  console.log('dom ready');
  var comp1 = window.comp1 = document.getElementById('comp1');
  var comp2 = window.comp2 = document.getElementById('comp2');

  comp1.addEventListener('click', function(){
    comp2.blink();
  });
  comp2.addEventListener('click', function(){
    comp1.blink();
  });
});
