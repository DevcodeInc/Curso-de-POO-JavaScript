(function () {
  'use strict';
  var App = window.App || {};

  function BaseOrder (email) {
    this.email = email;
  }

  BaseOrder.prototype.displayOrder = function () {
    console.log('Order for: ' + this.email);
  };

  function PizzaOrder (email, size, speciality) {
    BaseOrder.call(this, email);
    this.size = size;
    this.speciality = speciality;
  }

  PizzaOrder.prototype = Object.create(BaseOrder.prototype);
  PizzaOrder.prototype.constructor = PizzaOrder;

  PizzaOrder.prototype.displayOrder = function () {
    BaseOrder.prototype.displayOrder.call(this);
    console.log('Size: ' + this.size);
  };

  var obj = { email: 'example@devcode.com' };
  var obj2 = { email: 'example2@devcode.com' };
  BaseOrder.prototype.displayOrder.call(obj);
  var displayEmail = BaseOrder.prototype.displayOrder.bind(obj2);
  displayEmail();

  App.PizzaOrder = PizzaOrder;
  window.App.App;
}());
