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

  App.PizzaOrder = PizzaOrder;
  window.App.App;
}());
