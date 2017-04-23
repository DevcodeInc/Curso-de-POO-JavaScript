(function () {
  'use strict';
  var App = window.App || {};

  var order = {
    email: '',
    displayOrder: function () {
      console.log('Order for: ' + this.email);
    }
  };

  function pizzaOrderFactory(email, size, speciality) {
    return Object.create(order, {
      email: { value: email },
      size: { value: size },
      speciality: { value: speciality },
      displayOrder: {
        value: function() {
          order.displayOrder.call(this);
          console.log('Size: ' + this.size);
        }
      }
    });
  }

  App.pizzaOrderFactory = pizzaOrderFactory;
  window.App = App;
}());
