(function () {
  'use strict';
  var App = window.App || {};

  function BaseOrder (email) {
    this.email = email;
  }

  function PizzaOrder (email, size, speciality) {
    BaseOrder.call(this, email);
    this.size = size;
    this.speciality = speciality;
  }

  PizzaOrder.prototype = Object.create(BaseOrder.prototype);
  PizzaOrder.prototype.constructor = PizzaOrder;

  App.PizzaOrder = PizzaOrder;
  window.App.App;
}());
